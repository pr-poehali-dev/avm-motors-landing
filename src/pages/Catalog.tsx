import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import { BackgroundBlur } from "@/components/ui/decorative-background";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import { Vehicle } from "@/data/vehicles";
import CatalogFiltersDesktop from "@/components/catalog/CatalogFiltersDesktop";
import CatalogControls from "@/components/catalog/CatalogControls";
import CatalogVehiclesList from "@/components/catalog/CatalogVehiclesList";

const Catalog = () => {
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
  const [vehiclesData, setVehiclesData] = useState<any>(null);
  const [openFilters, setOpenFilters] = useState<{[key: string]: boolean}>({
    search: true,
    region: true,
    type: true,
    condition: true,
    price: true
  });

  useEffect(() => {
    import("@/data/vehicles").then(module => {
      setVehiclesData({
        vehiclesChina: module.vehiclesChina,
        vehiclesEurope: module.vehiclesEurope,
        vehiclesAmerican: module.vehiclesAmerican,
        vehiclesJapan: module.vehiclesJapan,
        vehiclesKorea: module.vehiclesKorea
      });
    });
  }, []);

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

  const allVehicles = useMemo(() => {
    if (!vehiclesData) return [];
    
    const { vehiclesChina, vehiclesEurope, vehiclesAmerican, vehiclesJapan, vehiclesKorea } = vehiclesData;
    
    return [
      ...vehiclesChina.map((v: Vehicle, i: number) => ({ ...v, id: i + 1, region: "Китай", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) * 1000 })),
      ...vehiclesEurope.map((v: Vehicle, i: number) => ({ ...v, id: vehiclesChina.length + i + 1, region: "Европа", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) * 1000 })),
      ...vehiclesAmerican.map((v: Vehicle, i: number) => ({ ...v, id: vehiclesChina.length + vehiclesEurope.length + i + 1, region: "Америка", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) * 1000 })),
      ...vehiclesJapan.map((v: Vehicle, i: number) => ({ ...v, id: vehiclesChina.length + vehiclesEurope.length + vehiclesAmerican.length + i + 1, region: "Япония", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) * 1000 })),
      ...vehiclesKorea.map((v: Vehicle, i: number) => ({ ...v, id: vehiclesChina.length + vehiclesEurope.length + vehiclesAmerican.length + vehiclesJapan.length + i + 1, region: "Корея", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) * 1000 })),
    ];
  }, [vehiclesData]);

  const regions = useMemo(() => ["Китай", "Европа", "Америка", "Япония", "Корея"], []);
  
  const types = useMemo(() => {
    const allTypes = Array.from(new Set(allVehicles.map(v => v.type)));
    return allTypes.sort();
  }, [allVehicles]);

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

  const filteredVehicles = useMemo(() => {
    return allVehicles.filter(vehicle => {
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
  }, [allVehicles, searchQuery, selectedRegion, selectedType, selectedCondition, priceRange, showRfPassable]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedRegion([]);
    setSelectedType([]);
    setSelectedCondition([]);
    setPriceRange([0, 50000000]);
    setMinPriceInput('');
    setMaxPriceInput('');
    setShowRfPassable(false);
  };

  if (!vehiclesData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

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

      <main>
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
          <BackgroundBlur variant="catalog" />
          <div className="w-full px-4 sm:px-6 lg:px-12">
            <SectionHeader
              label="Каталог"
              title="Полный каталог автомобилей"
              description="Автомобили из Китая, Европы, Америки, Japonии и Кореи"
            />
          </div>
        </section>

        <section className="pb-16 md:pb-32">
          <div className="w-full px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <CatalogFiltersDesktop
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedRegion={selectedRegion}
                selectedType={selectedType}
                selectedCondition={selectedCondition}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                minPriceInput={minPriceInput}
                setMinPriceInput={setMinPriceInput}
                maxPriceInput={maxPriceInput}
                setMaxPriceInput={setMaxPriceInput}
                showRfPassable={showRfPassable}
                setShowRfPassable={setShowRfPassable}
                regions={regions}
                types={types}
                toggleFilter={toggleFilter}
                openFilters={openFilters}
                toggleFilterSection={toggleFilterSection}
                onResetFilters={handleResetFilters}
              />

              <div className="flex-1">
                <CatalogControls
                  isMobileFilterOpen={isMobileFilterOpen}
                  setIsMobileFilterOpen={setIsMobileFilterOpen}
                  filteredVehiclesCount={filteredVehicles.length}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  viewMode={viewMode}
                  setViewMode={setViewMode}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedRegion={selectedRegion}
                  selectedType={selectedType}
                  selectedCondition={selectedCondition}
                  priceRange={priceRange}
                  regions={regions}
                  types={types}
                  toggleFilter={toggleFilter}
                  openFilters={openFilters}
                  toggleFilterSection={toggleFilterSection}
                  onResetFilters={handleResetFilters}
                />

                <CatalogVehiclesList
                  filteredVehicles={filteredVehicles}
                  viewMode={viewMode}
                  onResetFilters={handleResetFilters}
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Catalog;