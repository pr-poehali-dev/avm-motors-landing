import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import FilterSection from "@/components/FilterSection";

interface CatalogFiltersDesktopProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedRegion: string[];
  selectedType: string[];
  selectedCondition: string[];
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
  minPriceInput: string;
  setMinPriceInput: (value: string) => void;
  maxPriceInput: string;
  setMaxPriceInput: (value: string) => void;
  showRfPassable: boolean;
  setShowRfPassable: (value: boolean) => void;
  regions: string[];
  types: string[];
  toggleFilter: (filter: string, type: 'region' | 'type' | 'condition') => void;
  openFilters: {[key: string]: boolean};
  toggleFilterSection: (section: string) => void;
  onResetFilters: () => void;
}

const CatalogFiltersDesktop = ({
  searchQuery,
  setSearchQuery,
  selectedRegion,
  selectedType,
  selectedCondition,
  priceRange,
  setPriceRange,
  minPriceInput,
  setMinPriceInput,
  maxPriceInput,
  setMaxPriceInput,
  showRfPassable,
  setShowRfPassable,
  regions,
  types,
  toggleFilter,
  openFilters,
  toggleFilterSection,
  onResetFilters
}: CatalogFiltersDesktopProps) => {
  return (
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
        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              type="number"
              placeholder="От"
              value={minPriceInput}
              onChange={(e) => {
                setMinPriceInput(e.target.value);
                const val = parseFloat(e.target.value) || 0;
                setPriceRange([val * 1000, priceRange[1]]);
              }}
              className="bg-secondary/50 border-border text-xs h-9"
            />
            <Input
              type="number"
              placeholder="До"
              value={maxPriceInput}
              onChange={(e) => {
                setMaxPriceInput(e.target.value);
                const val = parseFloat(e.target.value) || 50000;
                setPriceRange([priceRange[0], val * 1000]);
              }}
              className="bg-secondary/50 border-border text-xs h-9"
            />
          </div>
          <p className="text-xs text-muted-foreground">Цена в тысячах $</p>
        </div>
      </FilterSection>

      <FilterSection
        icon="CheckCircle"
        title="Дополнительно"
        isOpen={true}
        onToggle={() => {}}
      >
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="checkbox"
            checked={showRfPassable}
            onChange={() => setShowRfPassable(!showRfPassable)}
            className="w-4 h-4 rounded border-2 border-border checked:bg-accent checked:border-accent"
          />
          <span className="text-sm text-foreground group-hover:text-accent transition-colors">
            Проходная на РФ (до 160 л.с.)
          </span>
        </label>
      </FilterSection>

      <Button
        variant="outline"
        size="sm"
        className="w-full border-accent text-accent hover:bg-button-primary hover:text-accent-foreground text-xs"
        onClick={onResetFilters}
      >
        <Icon name="RotateCcw" size={18} className="mr-2" />
        Сбросить фильтры
      </Button>
    </aside>
  );
};

export default CatalogFiltersDesktop;
