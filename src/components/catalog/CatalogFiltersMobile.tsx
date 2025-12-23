import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import FilterSection from "@/components/FilterSection";

interface CatalogFiltersMobileProps {
  isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: (value: boolean) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedRegion: string[];
  selectedType: string[];
  selectedCondition: string[];
  priceRange: [number, number];
  regions: string[];
  types: string[];
  toggleFilter: (filter: string, type: 'region' | 'type' | 'condition') => void;
  openFilters: {[key: string]: boolean};
  toggleFilterSection: (section: string) => void;
  onResetFilters: () => void;
}

const CatalogFiltersMobile = ({
  isMobileFilterOpen,
  setIsMobileFilterOpen,
  searchQuery,
  setSearchQuery,
  selectedRegion,
  selectedType,
  selectedCondition,
  priceRange,
  regions,
  types,
  toggleFilter,
  openFilters,
  toggleFilterSection,
  onResetFilters
}: CatalogFiltersMobileProps) => {
  return (
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
            onClick={onResetFilters}
          >
            <Icon name="RotateCcw" size={18} className="mr-2" />
            Сбросить фильтры
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CatalogFiltersMobile;
