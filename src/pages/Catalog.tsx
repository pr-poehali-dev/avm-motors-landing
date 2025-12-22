import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VehicleModal from "@/components/VehicleModal";
import VehicleCard from "@/components/VehicleCard";
import SectionHeader from "@/components/SectionHeader";
import FilterSection from "@/components/FilterSection";
import EmptyState from "@/components/EmptyState";
import { Vehicle, vehiclesChina, vehiclesEurope, vehiclesAmerican, vehiclesJapan, vehiclesKorea } from "@/data/vehicles";

const Catalog = () => {
  const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000000]);
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [showFilterInHeader, setShowFilterInHeader] = useState(false);
  const [openFilters, setOpenFilters] = useState<{[key: string]: boolean}>({
    search: true,
    region: true,
    type: true,
    condition: true,
    price: true
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 400;
      setShowFilterInHeader(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFilterSection = (section: string) => {
    setOpenFilters(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const allVehicles = [
    ...vehiclesChina.map((v, i) => ({ ...v, id: i + 1, region: "Китай", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) * 1000 })),
    ...vehiclesEurope.map((v, i) => ({ ...v, id: vehiclesChina.length + i + 1, region: "Европа", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) * 1000 })),
    ...vehiclesAmerican.map((v, i) => ({ ...v, id: vehiclesChina.length + vehiclesEurope.length + i + 1, region: "Америка", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) * 1000 })),
    ...vehiclesJapan.map((v, i) => ({ ...v, id: vehiclesChina.length + vehiclesEurope.length + vehiclesAmerican.length + i + 1, region: "Япония", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) * 1000 })),
    ...vehiclesKorea.map((v, i) => ({ ...v, id: vehiclesChina.length + vehiclesEurope.length + vehiclesAmerican.length + vehiclesJapan.length + i + 1, region: "Корея", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) * 1000 })),
  ];

  const regions = ["Китай", "Европа", "Америка", "Япония", "Корея"];
  
  const allTypes = Array.from(new Set(allVehicles.map(v => v.type)));
  const types = allTypes.sort();

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

  const openVehicleModal = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const closeVehicleModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedVehicle(null), 300);
  };

  const filteredVehicles = allVehicles.filter(vehicle => {
    if (searchQuery && !vehicle.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (selectedRegion.length > 0 && !selectedRegion.includes(vehicle.region)) return false;
    if (selectedType.length > 0 && !selectedType.includes(vehicle.type)) return false;
    if (selectedCondition.length > 0 && !selectedCondition.includes(vehicle.condition)) return false;
    if (vehicle.priceNum < priceRange[0] || vehicle.priceNum > priceRange[1]) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        onVehicleRegionChange={() => {}} 
        showFilterButton={showFilterInHeader}
        onFilterClick={() => setIsMobileFilterOpen(true)}
        filterCount={selectedRegion.length + selectedType.length + selectedCondition.length}
      />

      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-accent/5 blur-[100px] md:blur-[120px] rounded-full"></div>
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
            {/* Desktop Filters */}
            <aside className="hidden lg:block w-64 flex-shrink-0 space-y-2 sticky top-32 max-h-[calc(100vh-9rem)] overflow-y-auto scrollbar-hide">
              <FilterSection
                icon="Search"
                title="Поиск"
                isOpen={openFilters.search}
                onToggle={() => toggleFilterSection('search')}
              >
                <Input
                  type="text"
                  placeholder="Марка автомобиля"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-9 text-sm bg-secondary/50 border-border"
                />
              </FilterSection>

              <FilterSection
                icon="MapPin"
                title="Регион"
                isOpen={openFilters.region}
                onToggle={() => toggleFilterSection('region')}
              >
                <div className="space-y-2">
                  {regions.map(region => (
                    <button
                      key={region}
                      onClick={() => toggleFilter(region, 'region')}
                      className={`w-full px-3 py-2 rounded-md text-sm text-left transition-all ${
                        selectedRegion.includes(region)
                          ? 'bg-accent text-accent-foreground font-medium'
                          : 'bg-secondary/50 hover:bg-secondary text-foreground'
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </FilterSection>

              <FilterSection
                icon="Car"
                title="Тип кузова"
                isOpen={openFilters.type}
                onToggle={() => toggleFilterSection('type')}
              >
                <div className="space-y-2">
                  {types.map(type => (
                    <label
                      key={type}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedType.includes(type)}
                        onChange={() => toggleFilter(type, 'type')}
                        className="w-4 h-4 rounded border-2 border-border checked:bg-accent checked:border-accent"
                      />
                      <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection
                icon="Badge"
                title="Состояние"
                isOpen={openFilters.condition}
                onToggle={() => toggleFilterSection('condition')}
              >
                <div className="space-y-2">
                  {["Новый", "Б/У"].map(condition => (
                    <label
                      key={condition}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCondition.includes(condition)}
                        onChange={() => toggleFilter(condition, 'condition')}
                        className="w-4 h-4 rounded border-2 border-border checked:bg-accent checked:border-accent"
                      />
                      <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                        {condition}
                      </span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection
                icon="DollarSign"
                title="Цена"
                isOpen={openFilters.price}
                onToggle={() => toggleFilterSection('price')}
              >
                <div className="flex gap-2">
                  <Input
                    type="text"
                    value={`${(priceRange[0] / 1000000).toFixed(1)} млн`}
                    readOnly
                    className="bg-secondary/50 border-border text-center text-xs h-9"
                  />
                  <Input
                    type="text"
                    value={`${(priceRange[1] / 1000000).toFixed(1)} млн`}
                    readOnly
                    className="bg-secondary/50 border-border text-center text-xs h-9"
                  />
                </div>
              </FilterSection>

              <Button
                variant="outline"
                size="sm"
                className="w-full border-accent text-accent hover:bg-button-primary hover:text-accent-foreground text-xs"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRegion([]);
                  setSelectedType([]);
                  setSelectedCondition([]);
                  setPriceRange([0, 50000000]);
                }}
              >
                <Icon name="RotateCcw" size={18} className="mr-2" />
                Сбросить фильтры
              </Button>
            </aside>

            <div className="flex-1">
              {/* Mobile Filter Button & Controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 sm:pb-6 border-b border-border">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="lg:hidden border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                        <Icon name="Filter" size={18} className="mr-2" />
                        Фильтры
                        {(selectedRegion.length + selectedType.length + selectedCondition.length) > 0 && (
                          <Badge className="ml-2 h-5 min-w-5 bg-accent text-accent-foreground px-1.5">
                            {selectedRegion.length + selectedType.length + selectedCondition.length}
                          </Badge>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80 overflow-y-auto">
                      <SheetHeader>
                        <SheetTitle>Фильтры</SheetTitle>
                      </SheetHeader>
                      <div className="space-y-2 mt-6">
                        <FilterSection
                          icon="Search"
                          title="Поиск"
                          isOpen={openFilters.search}
                          onToggle={() => toggleFilterSection('search')}
                        >
                          <Input
                            type="text"
                            placeholder="Марка автомобиля"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="h-9 text-sm bg-secondary/50 border-border"
                          />
                        </FilterSection>

                        <FilterSection
                          icon="MapPin"
                          title="Регион"
                          isOpen={openFilters.region}
                          onToggle={() => toggleFilterSection('region')}
                        >
                          <div className="space-y-2">
                            {regions.map(region => (
                              <button
                                key={region}
                                onClick={() => toggleFilter(region, 'region')}
                                className={`w-full px-3 py-2 rounded-md text-sm text-left transition-all ${
                                  selectedRegion.includes(region)
                                    ? 'bg-accent text-accent-foreground font-medium'
                                    : 'bg-secondary/50 hover:bg-secondary text-foreground'
                                }`}
                              >
                                {region}
                              </button>
                            ))}
                          </div>
                        </FilterSection>

                        <FilterSection
                          icon="Car"
                          title="Тип кузова"
                          isOpen={openFilters.type}
                          onToggle={() => toggleFilterSection('type')}
                        >
                          <div className="space-y-2">
                            {types.map(type => (
                              <label
                                key={type}
                                className="flex items-center gap-2 cursor-pointer group"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedType.includes(type)}
                                  onChange={() => toggleFilter(type, 'type')}
                                  className="w-4 h-4 rounded border-2 border-border checked:bg-accent checked:border-accent"
                                />
                                <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                                  {type}
                                </span>
                              </label>
                            ))}
                          </div>
                        </FilterSection>

                        <FilterSection
                          icon="Badge"
                          title="Состояние"
                          isOpen={openFilters.condition}
                          onToggle={() => toggleFilterSection('condition')}
                        >
                          <div className="space-y-2">
                            {["Новый", "Б/У"].map(condition => (
                              <label
                                key={condition}
                                className="flex items-center gap-2 cursor-pointer group"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedCondition.includes(condition)}
                                  onChange={() => toggleFilter(condition, 'condition')}
                                  className="w-4 h-4 rounded border-2 border-border checked:bg-accent checked:border-accent"
                                />
                                <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                                  {condition}
                                </span>
                              </label>
                            ))}
                          </div>
                        </FilterSection>

                        <FilterSection
                          icon="DollarSign"
                          title="Цена"
                          isOpen={openFilters.price}
                          onToggle={() => toggleFilterSection('price')}
                        >
                          <div className="flex gap-2">
                            <Input
                              type="text"
                              value={`${(priceRange[0] / 1000000).toFixed(1)} млн`}
                              readOnly
                              className="bg-secondary/50 border-border text-center text-xs h-9"
                            />
                            <Input
                              type="text"
                              value={`${(priceRange[1] / 1000000).toFixed(1)} млн`}
                              readOnly
                              className="bg-secondary/50 border-border text-center text-xs h-9"
                            />
                          </div>
                        </FilterSection>

                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-accent text-accent hover:bg-button-primary hover:text-accent-foreground text-xs"
                          onClick={() => {
                            setSearchQuery('');
                            setSelectedRegion([]);
                            setSelectedType([]);
                            setSelectedCondition([]);
                            setPriceRange([0, 50000000]);
                          }}
                        >
                          <Icon name="RotateCcw" size={18} className="mr-2" />
                          Сбросить фильтры
                        </Button>
                      </div>
                    </SheetContent>
                  </Sheet>
                  
                  <div className="text-sm sm:text-base lg:text-lg">
                    Найдено: <span className="font-bold text-accent">{filteredVehicles.length}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-secondary/50">
                    <Icon name="ArrowUpDown" size={16} className="text-muted-foreground hidden sm:block" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-transparent border-none outline-none text-xs sm:text-sm font-medium cursor-pointer text-foreground"
                    >
                      <option value="popular" className="bg-background text-foreground">Популярные</option>
                      <option value="price_asc" className="bg-background text-foreground">Цена ↑</option>
                      <option value="price_desc" className="bg-background text-foreground">Цена ↓</option>
                      <option value="new" className="bg-background text-foreground">Новинки</option>
                    </select>
                  </div>
                  <div className="hidden sm:flex gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors ${
                        viewMode === 'grid' ? 'bg-accent text-accent-foreground' : 'bg-secondary/50 hover:bg-secondary'
                      }`}
                    >
                      <Icon name="Grid3x3" size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors ${
                        viewMode === 'list' ? 'bg-accent text-accent-foreground' : 'bg-secondary/50 hover:bg-secondary'
                      }`}
                    >
                      <Icon name="List" size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" 
                : "space-y-4 md:space-y-6"
              }>
                {filteredVehicles.map((vehicle) => (
                  <VehicleCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    viewMode={viewMode}
                    onClick={() => openVehicleModal(vehicle)}
                  />
                ))}
              </div>

              {filteredVehicles.length === 0 && (
                <EmptyState
                  icon="SearchX"
                  title="Автомобили не найдены"
                  description="Попробуйте изменить параметры фильтрации"
                  buttonText="Сбросить фильтры"
                  onButtonClick={() => {
                    setSelectedRegion([]);
                    setSelectedType([]);
                    setPriceRange([0, 50000000]);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <VehicleModal 
        vehicle={selectedVehicle}
        open={isModalOpen}
        onClose={closeVehicleModal}
      />
    </div>
  );
};

export default Catalog;