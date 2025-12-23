import { useState, useEffect, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import VehicleCard from "@/components/VehicleCard";
import { useVehicleModal } from "@/hooks/useVehicleModal";
import { BackgroundBlur } from "@/components/ui/decorative-background";
import SectionHeader from "@/components/SectionHeader";
import FilterSection from "@/components/FilterSection";
import EmptyState from "@/components/EmptyState";
import { vehiclesChina, vehiclesEurope, vehiclesAmerican, vehiclesJapan, vehiclesKorea } from "@/data/vehicles";

const Footer = lazy(() => import("@/components/Footer"));

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
    price: true
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
        return parseInt(b.year || '0') - parseInt(a.year || '0');
      case 'year-asc':
        return parseInt(a.year || '0') - parseInt(b.year || '0');
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

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('ru-RU').format(value);
  };

  const handleMinPriceChange = (value: string) => {
    setMinPriceInput(value);
    const numValue = parseInt(value.replace(/\s/g, '')) || 0;
    setPriceRange([numValue, priceRange[1]]);
  };

  const handleMaxPriceChange = (value: string) => {
    setMaxPriceInput(value);
    const numValue = parseInt(value.replace(/\s/g, '')) || 50000000;
    setPriceRange([priceRange[0], numValue]);
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
                title="Страна производитель"
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
                icon="Clock"
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
                title="Цена (BYN)"
                isOpen={openFilters.price}
                onToggle={() => toggleFilterSection('price')}
              >
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="От"
                      value={minPriceInput}
                      onChange={(e) => handleMinPriceChange(e.target.value)}
                      className="h-9 text-sm bg-secondary/50 border-border"
                    />
                    <Input
                      type="text"
                      placeholder="До"
                      value={maxPriceInput}
                      onChange={(e) => handleMaxPriceChange(e.target.value)}
                      className="h-9 text-sm bg-secondary/50 border-border"
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])} BYN
                  </div>
                </div>
              </FilterSection>

              <FilterSection
                icon="Shield"
                title="Дополнительно"
                isOpen={true}
                onToggle={() => {}}
              >
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={showRfPassable}
                    onChange={(e) => setShowRfPassable(e.target.checked)}
                    className="w-4 h-4 rounded border-2 border-border checked:bg-accent checked:border-accent"
                  />
                  <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                    Проходные в РФ (до 160 л.с.)
                  </span>
                </label>
              </FilterSection>

              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="w-full mt-4 px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Icon name="X" size={16} />
                  Очистить все ({activeFiltersCount})
                </button>
              )}
            </aside>

            <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
              <SheetContent side="left" className="w-full sm:w-96 overflow-y-auto">
                <SheetHeader className="mb-6">
                  <SheetTitle className="flex items-center gap-2">
                    <Icon name="Filter" size={20} className="text-accent" />
                    Фильтры
                    {activeFiltersCount > 0 && (
                      <Badge variant="secondary" className="ml-2">
                        {activeFiltersCount}
                      </Badge>
                    )}
                  </SheetTitle>
                </SheetHeader>
                <div className="space-y-2">
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
                    title="Страна производитель"
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
                    icon="Clock"
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
                    title="Цена (BYN)"
                    isOpen={openFilters.price}
                    onToggle={() => toggleFilterSection('price')}
                  >
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          placeholder="От"
                          value={minPriceInput}
                          onChange={(e) => handleMinPriceChange(e.target.value)}
                          className="h-9 text-sm bg-secondary/50 border-border"
                        />
                        <Input
                          type="text"
                          placeholder="До"
                          value={maxPriceInput}
                          onChange={(e) => handleMaxPriceChange(e.target.value)}
                          className="h-9 text-sm bg-secondary/50 border-border"
                        />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])} BYN
                      </div>
                    </div>
                  </FilterSection>

                  <FilterSection
                    icon="Shield"
                    title="Дополнительно"
                    isOpen={true}
                    onToggle={() => {}}
                  >
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={showRfPassable}
                        onChange={(e) => setShowRfPassable(e.target.checked)}
                        className="w-4 h-4 rounded border-2 border-border checked:bg-accent checked:border-accent"
                      />
                      <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                        Проходные в РФ (до 160 л.с.)
                      </span>
                    </label>
                  </FilterSection>

                  {activeFiltersCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="w-full mt-4 px-4 py-2 bg-secondary hover:bg-secondary/80 text-foreground rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Icon name="X" size={16} />
                      Очистить все ({activeFiltersCount})
                    </button>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Найдено: <span className="font-semibold text-foreground">{filteredVehicles.length}</span> из {allVehicles.length}
                  </p>
                  {activeFiltersCount > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearFilters}
                      className="h-8 text-xs gap-1.5 animate-in fade-in slide-in-from-left-2 duration-200"
                    >
                      <Icon name="X" size={14} />
                      Сбросить фильтры ({activeFiltersCount})
                    </Button>
                  )}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="flex items-center gap-2 flex-1 sm:flex-initial">
                    <span className="text-sm text-muted-foreground whitespace-nowrap hidden sm:inline">Сортировка:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="flex-1 sm:flex-initial h-9 px-3 rounded-md bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="popular">По популярности</option>
                      <option value="price-asc">Цена: по возрастанию</option>
                      <option value="price-desc">Цена: по убыванию</option>
                      <option value="year-desc">Год: новые</option>
                      <option value="year-asc">Год: старые</option>
                    </select>
                  </div>

                  <div className="flex gap-1 bg-secondary rounded-md p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-1.5 rounded transition-colors ${
                        viewMode === 'grid'
                          ? 'bg-accent text-accent-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                      aria-label="Сетка"
                    >
                      <Icon name="Grid" size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-1.5 rounded transition-colors ${
                        viewMode === 'list'
                          ? 'bg-accent text-accent-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                      aria-label="Список"
                    >
                      <Icon name="List" size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {sortedVehicles.length === 0 ? (
                <div className="py-20">
                  <EmptyState
                    icon="Search"
                    title="Ничего не найдено"
                    description="Попробуйте изменить параметры фильтрации"
                  />
                </div>
              ) : (
                <div 
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6'
                      : 'flex flex-col gap-4'
                  }
                >
                  {sortedVehicles.map((vehicle) => (
                    <VehicleCard
                      key={vehicle.id}
                      vehicle={vehicle}
                      onClick={() => openVehicleModal(vehicle)}
                      viewMode={viewMode}
                    />
                  ))}
                </div>
              )}
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
