import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import FilterSection from "@/components/FilterSection";

interface CatalogFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedRegion: string[];
  selectedType: string[];
  selectedCondition: string[];
  toggleFilter: (filter: string, type: 'region' | 'type' | 'condition') => void;
  minPriceInput: string;
  maxPriceInput: string;
  setMinPriceInput: (value: string) => void;
  setMaxPriceInput: (value: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  showRfPassable: boolean;
  setShowRfPassable: (value: boolean) => void;
  clearFilters: () => void;
  regions: string[];
  types: string[];
  conditions: string[];
  isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: (value: boolean) => void;
  openFilters: {[key: string]: boolean};
  toggleFilterSection: (section: string) => void;
}

const CatalogFilters = ({
  searchQuery,
  setSearchQuery,
  selectedRegion,
  selectedType,
  selectedCondition,
  toggleFilter,
  minPriceInput,
  maxPriceInput,
  setMinPriceInput,
  setMaxPriceInput,
  priceRange,
  setPriceRange,
  showRfPassable,
  setShowRfPassable,
  clearFilters,
  regions,
  types,
  conditions,
  isMobileFilterOpen,
  setIsMobileFilterOpen,
  openFilters,
  toggleFilterSection
}: CatalogFiltersProps) => {
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

  const FilterContent = () => (
    <>
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
          {conditions.map(condition => (
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
        isOpen={openFilters.additional}
        onToggle={() => toggleFilterSection('additional')}
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
    </>
  );

  return (
    <>
      {/* Desktop Filters */}
      <aside className="hidden lg:block w-64 flex-shrink-0 space-y-2 sticky top-32 max-h-[calc(100vh-9rem)] overflow-y-auto scrollbar-hide">
        <FilterContent />
      </aside>

      {/* Mobile Filter Sheet */}
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
            <FilterContent />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CatalogFilters;
