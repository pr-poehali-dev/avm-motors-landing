import { useState, memo, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import ThemeToggle from "@/components/ThemeToggle";

const MobileMenu = lazy(() => import("@/components/MobileMenu"));

interface HeaderProps {
  onVehicleRegionChange: (region: string) => void;
  showFilterButton?: boolean;
  onFilterClick?: () => void;
  filterCount?: number;
  onSearch?: (query: string) => void;
  searchValue?: string;
}

const Header = memo(({ onVehicleRegionChange, showFilterButton = false, onFilterClick, filterCount = 0, onSearch, searchValue = '' }: HeaderProps) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = (value: string) => {
    if (onSearch) {
      onSearch(value);
    }
    if (value.length > 0) {
      navigate('/catalog');
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background border-b border-border/50">
      <div className="w-full px-3 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-6 h-16 sm:h-20">
          <div className="flex items-center gap-2 md:gap-6">
            <button onClick={() => navigate('/')} className="flex-shrink-0" aria-label="Перейти на главную страницу">
              <img 
                src="https://cdn.poehali.dev/files/Group 287-Photoroom.png" 
                alt="AVM Motors"
                width="180"
                height="44"
                className="h-8 sm:h-10 md:h-11 w-auto cursor-pointer hover:opacity-80 transition-opacity dark:brightness-0 dark:invert"
              />
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-header-accent/10 hover:bg-header-accent/20 transition-colors"
              aria-label="Открыть меню"
            >
              <Icon name="Menu" size={18} className="text-header-accent sm:w-5 sm:h-5" />
              <span className="hidden sm:inline text-xs sm:text-sm font-medium">Меню</span>
            </button>
            
            {showFilterButton && (
              <button
                onClick={onFilterClick}
                className="lg:hidden md:flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-all animate-in fade-in slide-in-from-left-3 duration-300"
                aria-label="Открыть фильтры"
              >
                <Icon name="Filter" size={18} className="text-accent sm:w-5 sm:h-5" />
                <span className="hidden sm:inline text-xs sm:text-sm font-medium">Фильтры</span>
                {filterCount > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                    {filterCount}
                  </span>
                )}
              </button>
            )}
          </div>
          
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Icon name="Car" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Марка или параметры"
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
                className="h-11 pl-12 pr-12 bg-background border-border focus:border-header-accent rounded-lg"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md bg-header-accent/10 hover:bg-header-accent/20 flex items-center justify-center transition-colors" aria-label="Поиск">
                <Icon name="Search" size={18} className="text-header-accent" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 sm:gap-3">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-header-accent/10 flex items-center justify-center hover:bg-header-accent/20 transition-colors"
              aria-label="Открыть поиск"
            >
              <Icon name="Search" size={16} className="text-header-accent sm:w-[18px] sm:h-[18px]" />
            </button>
            
            <div className="hidden lg:flex flex-col items-center text-xs text-muted-foreground hover:text-header-accent transition-colors cursor-pointer">
              <Icon name="MapPin" size={20} className="mb-1 text-header-accent" />
              <span>Быстрый подбор</span>
            </div>
            
            <div className="hidden lg:flex flex-col items-center text-xs text-muted-foreground hover:text-header-accent transition-colors cursor-pointer">
              <Icon name="Package" size={20} className="mb-1 text-header-accent" />
              <span>Доставка в РБ</span>
            </div>
            
            <div className="hidden lg:flex flex-col items-center text-xs text-muted-foreground hover:text-header-accent transition-colors cursor-pointer">
              <Icon name="Heart" size={20} className="mb-1 text-header-accent" />
              <span>Избранное</span>
            </div>
            
            <ThemeToggle />
            
            <a 
              href="tel:+375296397378"
              className="hidden lg:flex items-center gap-2 px-6 h-11 rounded-full font-medium text-base bg-button-primary hover:bg-button-primary/90 text-button-primary-foreground transition-colors"
            >
              <Icon name="Phone" size={18} />
              <span>+375 29 639 73 78</span>
            </a>

            <a
              href="tel:+375296397378"
              className="lg:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-button-primary hover:bg-button-primary/90 text-button-primary-foreground transition-colors"
              aria-label="Позвонить +375 29 639 73 78"
            >
              <Icon name="Phone" size={18} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
        
        {searchOpen && (
          <div className="py-4 border-t border-border/50 animate-in slide-in-from-top-2 duration-200 md:hidden">
            <div className="relative">
              <Icon name="Car" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Марка или параметры"
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
                className="h-12 pl-12 pr-4 bg-background border-border focus:border-header-accent"
              />
            </div>
          </div>
        )}
      </div>
      
      {mobileMenuOpen && (
        <Suspense fallback={null}>
          <MobileMenu onClose={() => setMobileMenuOpen(false)} />
        </Suspense>
      )}
    </header>
  );
});

Header.displayName = 'Header';

export default Header;