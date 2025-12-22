import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/30 border-t border-border py-20">
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full"></div>
      <div className="w-full px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <img 
              src="https://cdn.poehali.dev/files/motors (370 x 370 пикс.)-Photoroom.png" 
              alt="AVM Motors" 
              className="h-16 mb-6"
            />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Официальный импорт автомобилей из Китая и Европы с полным юридическим сопровождением
            </p>
            <div className="flex gap-4">
              <a href="https://t.me/+_ZSslTyv3xg3MDky" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group">
                <Icon name="Send" size={22} className="text-accent" />
              </a>
              <a href="https://www.tiktok.com/@avmmotors1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-accent">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
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
              <a href="tel:+375296397378" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon name="Phone" size={18} className="text-accent" />
                </div>
                <span className="text-lg">+375 29 639 73 78</span>
              </a>
              <a href="mailto:avmmotorsby@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon name="Mail" size={18} className="text-accent" />
                </div>
                <span className="text-lg">avmmotorsby@gmail.com</span>
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
                <span>Гомель, ул. Советская 127а</span>
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