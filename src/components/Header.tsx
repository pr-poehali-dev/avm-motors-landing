import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import ThemeToggle from "@/components/ThemeToggle";

interface HeaderProps {
  onVehicleRegionChange: (region: string) => void;
}

const Header = ({ onVehicleRegionChange }: HeaderProps) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between gap-6 h-20">
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/')}>
              <img 
                src="https://cdn.poehali.dev/files/AVM_logo_horizontal_mono.png" 
                alt="AVM Motors" 
                className="h-8 flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
            >
              <Icon name="Menu" size={20} className="text-accent" />
              <span className="text-sm font-medium">Меню</span>
            </button>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Icon name="Car" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Марка или параметры"
                className="h-11 pl-12 pr-12 bg-background border-border focus:border-accent rounded-lg"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors">
                <Icon name="Search" size={18} className="text-accent" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
            >
              <Icon name="Search" size={18} className="text-accent" />
            </button>
            
            <div className="hidden lg:flex flex-col items-center text-xs text-muted-foreground hover:text-accent transition-colors cursor-pointer">
              <Icon name="MapPin" size={20} className="mb-1" />
              <span>Быстрый подбор</span>
            </div>
            
            <div className="hidden lg:flex flex-col items-center text-xs text-muted-foreground hover:text-accent transition-colors cursor-pointer">
              <Icon name="Package" size={20} className="mb-1" />
              <span>Доставка в РФ</span>
            </div>
            
            <div className="hidden lg:flex flex-col items-center text-xs text-muted-foreground hover:text-accent transition-colors cursor-pointer">
              <Icon name="Heart" size={20} className="mb-1" />
              <span>Избранное</span>
            </div>
            
            <ThemeToggle />
            
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 h-11 rounded-full font-medium"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Связаться
            </Button>
          </div>
        </div>
        
        {searchOpen && (
          <div className="py-4 border-t border-border/50 animate-in slide-in-from-top-2 duration-200 md:hidden">
            <div className="relative">
              <Icon name="Car" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Марка или параметры"
                className="h-12 pl-12 pr-4 bg-background border-border focus:border-accent"
              />
            </div>
          </div>
        )}
      </div>
      
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 border-t border-border/50 bg-background shadow-2xl animate-in slide-in-from-top-4 duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="w-full px-6 lg:px-12 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl">
              <div>
                <h3 className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-4">Каталог</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      navigate('/catalog');
                      setMobileMenuOpen(false);
                    }} 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group w-full"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-2xl">🇨🇳</span>
                      <span className="text-sm font-medium">Китай - новые авто</span>
                    </div>
                    <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                  </button>
                  <button
                    onClick={() => {
                      navigate('/catalog');
                      setMobileMenuOpen(false);
                    }} 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group w-full"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-2xl">🇪🇺</span>
                      <span className="text-sm font-medium">Европа - авто с пробегом</span>
                    </div>
                    <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                  </button>
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-secondary/30 border border-border">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-3">Доставка</h4>
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 rounded-md text-sm font-medium bg-accent text-accent-foreground">
                      в РБ
                    </button>
                    <button className="flex-1 px-4 py-2 rounded-md text-sm font-medium bg-background hover:bg-accent/10 transition-colors">
                      в РФ
                    </button>
                  </div>
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-secondary/30 border border-border">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-3">Цены</h4>
                  <div className="flex gap-2">
                    <button className="flex-1 px-3 py-2 rounded-md text-sm font-medium bg-accent text-accent-foreground">
                      USD
                    </button>
                    <button className="flex-1 px-3 py-2 rounded-md text-sm font-medium bg-background hover:bg-accent/10 transition-colors">
                      RUB
                    </button>
                    <button className="flex-1 px-3 py-2 rounded-md text-sm font-medium bg-background hover:bg-accent/10 transition-colors">
                      BYN
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-4">Информация</h3>
                <div className="space-y-2">
                  <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                    <div className="flex items-center gap-3">
                      <Icon name="DollarSign" size={20} className="text-accent" />
                      <span className="text-sm font-medium">Тарифы и цены</span>
                    </div>
                    <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                    <div className="flex items-center gap-3">
                      <Icon name="FileText" size={20} className="text-accent" />
                      <span className="text-sm font-medium">Блог</span>
                    </div>
                    <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                    <div className="flex items-center gap-3">
                      <Icon name="Star" size={20} className="text-accent" />
                      <span className="text-sm font-medium">Отзывы</span>
                    </div>
                    <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                    <div className="flex items-center gap-3">
                      <Icon name="Calculator" size={20} className="text-accent" />
                      <span className="text-sm font-medium">Калькулятор</span>
                    </div>
                    <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-4">Компания</h3>
                <div className="space-y-2">
                  <a href="#services" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                    <div className="flex items-center gap-3">
                      <Icon name="Info" size={20} className="text-accent" />
                      <span className="text-sm font-medium">О нас</span>
                    </div>
                    <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                    <div className="flex items-center gap-3">
                      <Icon name="Play" size={20} className="text-accent" />
                      <span className="text-sm font-medium">Обзоры</span>
                    </div>
                    <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                  </a>
                  <a 
                    href="#contact" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" size={20} className="text-accent" />
                      <span className="text-sm font-medium">Позвонить нам</span>
                    </div>
                    <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" size={20} className="text-accent" />
                      <span className="text-sm font-medium">Адреса и офисы</span>
                    </div>
                    <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                  </a>
                </div>
                
                <div className="mt-6 relative overflow-hidden rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 h-[200px]">
                  <img 
                    src="https://cdn.poehali.dev/files/Group_117.png"
                    alt="Premium Car"
                    className="absolute inset-0 w-full h-full object-cover opacity-10"
                  />
                  <div className="p-6 relative z-10">
                    <h4 className="text-lg font-bold mb-2">Подберем 10 свежих предложений бесплатно</h4>
                    <Button 
                      size="sm"
                      className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Получить подборку
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;