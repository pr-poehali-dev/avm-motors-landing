import Icon from "@/components/ui/icon";
import CatalogFiltersMobile from "./CatalogFiltersMobile";

interface CatalogControlsProps {
  isMobileFilterOpen: boolean;
  setIsMobileFilterOpen: (value: boolean) => void;
  filteredVehiclesCount: number;
  sortBy: string;
  setSortBy: (value: string) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (value: 'grid' | 'list') => void;
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

const CatalogControls = ({
  isMobileFilterOpen,
  setIsMobileFilterOpen,
  filteredVehiclesCount,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
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
}: CatalogControlsProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 sm:pb-6 border-b border-border">
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <CatalogFiltersMobile
          isMobileFilterOpen={isMobileFilterOpen}
          setIsMobileFilterOpen={setIsMobileFilterOpen}
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
          onResetFilters={onResetFilters}
        />
        
        <div className="text-sm sm:text-base lg:text-lg">
          Найдено: <span className="font-bold text-accent">{filteredVehiclesCount}</span>
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
  );
};

export default CatalogControls;
