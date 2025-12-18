import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/30 border-t border-border py-20">
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full"></div>
      <div className="w-full px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <img 
              src="https://cdn.poehali.dev/files/AVM_logo_horizontal_mono.png" 
              alt="AVM Motors" 
              className="h-12 mb-6"
            />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Эксклюзивный импорт премиальных автомобилей из Китая и Европы
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group">
                <Icon name="Instagram" size={22} className="text-accent" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group">
                <Icon name="MessageCircle" size={22} className="text-accent" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group">
                <Icon name="Phone" size={22} className="text-accent" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold mb-6 tracking-[0.2em] uppercase">Каталог</h4>
            <ul className="space-y-4">
              <li><a href="#vehicles" className="text-muted-foreground hover:text-accent transition-colors">Топ продаж</a></li>
              <li><a href="#vehicles" className="text-muted-foreground hover:text-accent transition-colors">Китай</a></li>
              <li><a href="#vehicles" className="text-muted-foreground hover:text-accent transition-colors">Европа</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold mb-6 tracking-[0.2em] uppercase">Компания</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-muted-foreground hover:text-accent transition-colors">Услуги</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">О нас</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Блог</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold mb-6 tracking-[0.2em] uppercase">Контакты</h4>
            <div className="space-y-4">
              <a href="tel:+79991234567" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon name="Phone" size={18} className="text-accent" />
                </div>
                <span className="text-lg">+7 999 123 45 67</span>
              </a>
              <a href="mailto:info@avmmotors.ru" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon name="Mail" size={18} className="text-accent" />
                </div>
                <span className="text-lg">info@avmmotors.ru</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Clock" size={18} className="text-accent" />
                </div>
                <span>Пн-Вс: 10:00 - 22:00</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">© 2025 AVM Motors. Все права защищены.</p>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-accent transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
