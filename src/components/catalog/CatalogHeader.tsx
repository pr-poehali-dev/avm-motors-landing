import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CatalogHeaderProps {
  filteredCount: number;
  totalCount: number;
  sortBy: string;
  setSortBy: (value: string) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (value: 'grid' | 'list') => void;
  clearFilters: () => void;
  activeFiltersCount: number;
}

const CatalogHeader = ({
  filteredCount,
  totalCount,
  sortBy,
  setSortBy,
  viewMode,
  setViewMode,
  clearFilters,
  activeFiltersCount
}: CatalogHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <p className="text-sm sm:text-base text-muted-foreground">
          Найдено: <span className="font-semibold text-foreground">{filteredCount}</span> из {totalCount}
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
  );
};

export default CatalogHeader;
