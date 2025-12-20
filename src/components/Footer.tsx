import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/30 border-t border-border py-20">
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full"></div>
      <div className="w-full px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="text-3xl font-bold mb-6">AVM Моторс</div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Официальный импорт автомобилей из Китая и Европы с полным юридическим сопровождением
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group">
                <Icon name="Instagram" size={22} className="text-accent" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group">
                <Icon name="Send" size={22} className="text-accent" />
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group">
                <Icon name="MessageCircle" size={22} className="text-accent" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold mb-6 tracking-[0.2em] uppercase">Навигация</h4>
            <ul className="space-y-4">
              <li><a href="#vehicles" className="text-muted-foreground hover:text-accent transition-colors">Каталог</a></li>
              <li><a href="#quiz" className="text-muted-foreground hover:text-accent transition-colors">Подбор авто</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-accent transition-colors">Услуги</a></li>
              <li><a href="#workflow" className="text-muted-foreground hover:text-accent transition-colors">Как работаем</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold mb-6 tracking-[0.2em] uppercase">Связь</h4>
            <div className="space-y-4">
              <a href="tel:+375291234567" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon name="Phone" size={18} className="text-accent" />
                </div>
                <span className="text-lg">+375 29 123 45 67</span>
              </a>
              <a href="mailto:info@avm.by" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon name="Mail" size={18} className="text-accent" />
                </div>
                <span className="text-lg">info@avm.by</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Clock" size={18} className="text-accent" />
                </div>
                <span>Ежедневно: 9:00 - 21:00</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={18} className="text-accent" />
                </div>
                <span>Минск, ул. Примерная, 1</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">© 2025 AVM Моторс. Все права защищены.</p>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-accent transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;