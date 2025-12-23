import { useState, useEffect, lazy, Suspense } from "react";
import Header from "@/components/Header";
import { useVehicleModal } from "@/hooks/useVehicleModal";
import { BackgroundBlur } from "@/components/ui/decorative-background";
import SectionHeader from "@/components/SectionHeader";
import { Vehicle, vehiclesChina, vehiclesEurope, vehiclesAmerican, vehiclesJapan, vehiclesKorea } from "@/data/vehicles";
import CatalogFilters from "@/components/catalog/CatalogFilters";
import CatalogHeader from "@/components/catalog/CatalogHeader";
import CatalogGrid from "@/components/catalog/CatalogGrid";

const Footer = lazy(() => import("@/components/Footer"));

interface ExtendedVehicle extends Vehicle {
  id: number;
  region: string;
  condition: string;
  priceNum: number;
}

const Catalog = () => {
  const { openVehicleModal, VehicleModalComponent } = useVehicleModal();
  const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000000]);
  const [minPriceInput, setMinPriceInput] = useState('');
  const [maxPriceInput, setMaxPriceInput] = useState('');
  const [showRfPassable, setShowRfPassable] = useState(false);
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [showFilterInHeader, setShowFilterInHeader] = useState(false);
  const [openFilters, setOpenFilters] = useState<{[key: string]: boolean}>({
    search: true,
    region: true,
    type: true,
    condition: true,
    price: true,
    additional: true
  });

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 400;
          setShowFilterInHeader(scrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFilterSection = (section: string) => {
    setOpenFilters(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const allVehicles: ExtendedVehicle[] = [
    ...vehiclesChina.map((v, i) => ({ ...v, id: i + 1, region: "Китай", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) * 1000 })),
    ...vehiclesEurope.map((v, i) => ({ ...v, id: vehiclesChina.length + i + 1, region: "Европа", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) * 1000 })),
    ...vehiclesAmerican.map((v, i) => ({ ...v, id: vehiclesChina.length + vehiclesEurope.length + i + 1, region: "Америка", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) * 1000 })),
    ...vehiclesJapan.map((v, i) => ({ ...v, id: vehiclesChina.length + vehiclesEurope.length + vehiclesAmerican.length + i + 1, region: "Япония", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) * 1000 })),
    ...vehiclesKorea.map((v, i) => ({ ...v, id: vehiclesChina.length + vehiclesEurope.length + vehiclesAmerican.length + vehiclesJapan.length + i + 1, region: "Корея", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) * 1000 })),
  ];

  const regions = ["Китай", "Европа", "Америка", "Япония", "Корея"];
  
  const allTypes = Array.from(new Set(allVehicles.map(v => v.type)));
  const types = allTypes.sort();

  const conditions = ["Новый", "Б/У"];

  const toggleFilter = (filter: string, type: 'region' | 'type' | 'condition') => {
    if (type === 'region') {
      setSelectedRegion(prev => 
        prev.includes(filter) ? prev.filter(r => r !== filter) : [...prev, filter]
      );
    } else if (type === 'type') {
      setSelectedType(prev => 
        prev.includes(filter) ? prev.filter(t => t !== filter) : [...prev, filter]
      );
    } else {
      setSelectedCondition(prev => 
        prev.includes(filter) ? prev.filter(c => c !== filter) : [...prev, filter]
      );
    }
  };

  const filteredVehicles = allVehicles.filter(vehicle => {
    if (searchQuery && !vehicle.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (selectedRegion.length > 0 && !selectedRegion.includes(vehicle.region)) return false;
    if (selectedType.length > 0 && !selectedType.includes(vehicle.type)) return false;
    if (selectedCondition.length > 0 && !selectedCondition.includes(vehicle.condition)) return false;
    if (vehicle.priceNum < priceRange[0] || vehicle.priceNum > priceRange[1]) return false;
    
    if (showRfPassable) {
      const powerMatch = vehicle.power?.match(/\d+/);
      const powerNum = powerMatch ? parseInt(powerMatch[0]) : 0;
      if (powerNum > 160) return false;
    }
    
    return true;
  });

  const sortedVehicles = [...filteredVehicles].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.priceNum - b.priceNum;
      case 'price-desc':
        return b.priceNum - a.priceNum;
      case 'year-desc':
        return parseInt(b.year) - parseInt(a.year);
      case 'year-asc':
        return parseInt(a.year) - parseInt(b.year);
      default:
        return 0;
    }
  });

  const clearFilters = () => {
    setSelectedRegion([]);
    setSelectedType([]);
    setSelectedCondition([]);
    setSearchQuery('');
    setPriceRange([0, 50000000]);
    setMinPriceInput('');
    setMaxPriceInput('');
    setShowRfPassable(false);
  };

  const activeFiltersCount = selectedRegion.length + selectedType.length + selectedCondition.length + 
    (showRfPassable ? 1 : 0) + 
    (priceRange[0] > 0 || priceRange[1] < 50000000 ? 1 : 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        onVehicleRegionChange={() => {}} 
        showFilterButton={showFilterInHeader}
        onFilterClick={() => setIsMobileFilterOpen(true)}
        filterCount={selectedRegion.length + selectedType.length + selectedCondition.length}
        onSearch={(query) => setSearchQuery(query)}
        searchValue={searchQuery}
      />

      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        <BackgroundBlur variant="catalog" />
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <SectionHeader
            label="Каталог"
            title="Полный каталог автомобилей"
            description="Автомобили из Китая, Европы, Америки, Японии и Кореи"
          />
        </div>
      </section>

      <section className="pb-16 md:pb-32">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <CatalogFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedRegion={selectedRegion}
              selectedType={selectedType}
              selectedCondition={selectedCondition}
              toggleFilter={toggleFilter}
              minPriceInput={minPriceInput}
              maxPriceInput={maxPriceInput}
              setMinPriceInput={setMinPriceInput}
              setMaxPriceInput={setMaxPriceInput}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              showRfPassable={showRfPassable}
              setShowRfPassable={setShowRfPassable}
              clearFilters={clearFilters}
              regions={regions}
              types={types}
              conditions={conditions}
              isMobileFilterOpen={isMobileFilterOpen}
              setIsMobileFilterOpen={setIsMobileFilterOpen}
              openFilters={openFilters}
              toggleFilterSection={toggleFilterSection}
            />

            <div className="flex-1 min-w-0">
              <CatalogHeader
                filteredCount={filteredVehicles.length}
                totalCount={allVehicles.length}
                sortBy={sortBy}
                setSortBy={setSortBy}
                viewMode={viewMode}
                setViewMode={setViewMode}
                clearFilters={clearFilters}
                activeFiltersCount={activeFiltersCount}
              />

              <CatalogGrid
                vehicles={sortedVehicles}
                viewMode={viewMode}
                onVehicleClick={openVehicleModal}
              />
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="py-20 text-center"><div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div></div>}>
        <Footer />
      </Suspense>

      <VehicleModalComponent />
    </div>
  );
};

export default Catalog;