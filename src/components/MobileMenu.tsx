import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-full left-0 right-0 border-t border-border/50 bg-background shadow-2xl animate-in slide-in-from-top-4 duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto scrollbar-hide">
      <div className="w-full px-3 sm:px-6 lg:px-12 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl">
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-4">Каталог</h3>
            <div className="space-y-2">
              <button
                onClick={() => {
                  navigate('/catalog');
                  onClose();
                }} 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-header-accent/10 transition-colors group w-full"
              >
                <div className="flex items-center gap-3 flex-1">
                  <Icon name="Car" size={20} className="text-header-accent" />
                  <span className="text-sm font-medium">Авто</span>
                </div>
                <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-header-accent" />
              </button>
              <button
                onClick={() => {
                  navigate('/catalog');
                  onClose();
                }} 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-header-accent/10 transition-colors group w-full"
              >
                <div className="flex items-center gap-3 flex-1">
                  <Icon name="Bike" size={20} className="text-header-accent" />
                  <span className="text-sm font-medium">Мото</span>
                </div>
                <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-header-accent" />
              </button>
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-secondary/30 border border-border">
              <h4 className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-3">Доставка</h4>
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 rounded-md text-sm font-medium bg-button-primary text-button-primary-foreground">
                  в РБ
                </button>
                <button className="flex-1 px-4 py-2 rounded-md text-sm font-medium bg-background hover:bg-header-accent/10 transition-colors">
                  в РФ
                </button>
              </div>
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-secondary/30 border border-border">
              <h4 className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-3">Цены</h4>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 rounded-md text-sm font-medium bg-button-primary text-button-primary-foreground">
                  USD
                </button>
                <button className="flex-1 px-3 py-2 rounded-md text-sm font-medium bg-background hover:bg-header-accent/10 transition-colors">
                  RUB
                </button>
                <button className="flex-1 px-3 py-2 rounded-md text-sm font-medium bg-background hover:bg-header-accent/10 transition-colors">
                  BYN
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-4">Информация</h3>
            <div className="space-y-2">
              <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-header-accent/10 transition-colors group">
                <div className="flex items-center gap-3">
                  <Icon name="DollarSign" size={20} className="text-header-accent" />
                  <span className="text-sm font-medium">Тарифы и цены</span>
                </div>
                <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-header-accent" />
              </a>
              <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-header-accent/10 transition-colors group">
                <div className="flex items-center gap-3">
                  <Icon name="FileText" size={20} className="text-header-accent" />
                  <span className="text-sm font-medium">Блог</span>
                </div>
                <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-header-accent" />
              </a>
              <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-header-accent/10 transition-colors group">
                <div className="flex items-center gap-3">
                  <Icon name="Star" size={20} className="text-header-accent" />
                  <span className="text-sm font-medium">Отзывы</span>
                </div>
                <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-header-accent" />
              </a>
              <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-header-accent/10 transition-colors group">
                <div className="flex items-center gap-3">
                  <Icon name="Calculator" size={20} className="text-header-accent" />
                  <span className="text-sm font-medium">Калькулятор</span>
                </div>
                <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-header-accent" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-4">Компания</h3>
            <div className="space-y-2">
              <button
                onClick={() => {
                  navigate('/about');
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-header-accent/10 transition-colors group w-full"
              >
                <div className="flex items-center gap-3">
                  <Icon name="Info" size={20} className="text-header-accent" />
                  <span className="text-sm font-medium">О нас</span>
                </div>
                <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-header-accent" />
              </button>
              <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-header-accent/10 transition-colors group">
                <div className="flex items-center gap-3">
                  <Icon name="Play" size={20} className="text-header-accent" />
                  <span className="text-sm font-medium">Обзоры</span>
                </div>
                <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-header-accent" />
              </a>
              <a 
                href="#contact" 
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-header-accent/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-header-accent" />
                  <span className="text-sm font-medium">Позвонить нам</span>
                </div>
                <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-header-accent" />
              </a>
              <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-header-accent/10 transition-colors group">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-header-accent" />
                  <span className="text-sm font-medium">Адреса и офисы</span>
                </div>
                <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-header-accent" />
              </a>
            </div>
            
            <div className="mt-6 relative overflow-hidden rounded-lg bg-gradient-to-br from-header-accent/20 to-header-accent/5 border border-header-accent/20 h-[200px]">
              <img 
                src="https://cdn.poehali.dev/files/Group_117.webp"
                alt="Premium Car"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
              />
              <div className="p-6 relative z-10">
                <h4 className="text-lg font-bold mb-2">Подберем 10 свежих предложений бесплатно</h4>
                <Button 
                  size="sm"
                  className="mt-4 bg-header-accent hover:bg-header-accent/90 text-white"
                  onClick={() => {
                    onClose();
                    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
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
  );
};

export default MobileMenu;