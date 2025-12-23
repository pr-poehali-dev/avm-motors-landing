import Icon from "@/components/ui/icon";
import { BackgroundBlur } from "@/components/ui/decorative-background";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/30 border-t border-border py-12 lg:py-20">
      <BackgroundBlur variant="footer" />
      <div className="w-full px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8 lg:mb-16">
          <div className="lg:col-span-5">
            <img 
              src="https://cdn.poehali.dev/files/Group 287-Photoroom.png" 
              alt="AVM Motors"
              width="180"
              height="64"
              className="h-12 lg:h-16 mb-4 lg:mb-6 dark:brightness-0 dark:invert"
            />
            <p className="hidden lg:block text-lg text-muted-foreground leading-relaxed mb-8">
              Официальный импорт автомобилей из Китая и Европы с полным юридическим сопровождением
            </p>
            <div className="flex gap-3 lg:gap-4 mt-4 lg:mt-0">
              <a href="https://t.me/+_ZSslTyv3xg3MDky" target="_blank" rel="noopener noreferrer" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group">
                <Icon name="Send" size={20} className="text-accent lg:w-[22px] lg:h-[22px]" />
              </a>
              <a href="https://www.tiktok.com/@avmmotors1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-accent lg:w-[22px] lg:h-[22px]">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-xs lg:text-sm font-bold mb-4 lg:mb-6 tracking-[0.2em] uppercase text-muted-foreground">Навигация</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 lg:gap-y-3 lg:flex lg:flex-col lg:space-y-4 text-sm lg:text-base">
              <li><a href="#vehicles" className="text-muted-foreground hover:text-accent transition-colors">Каталог</a></li>
              <li><a href="#quiz" className="text-muted-foreground hover:text-accent transition-colors">Подбор авто</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-accent transition-colors">Услуги</a></li>
              <li><a href="#workflow" className="text-muted-foreground hover:text-accent transition-colors">Как работаем</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-4">
            <h4 className="text-xs lg:text-sm font-bold mb-4 lg:mb-6 tracking-[0.2em] uppercase text-muted-foreground">Связь</h4>
            <div className="space-y-3 lg:space-y-4">
              <a href="tel:+375296397378" className="flex items-center gap-2 lg:gap-3 text-muted-foreground hover:text-accent transition-colors group">
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Icon name="Phone" size={16} className="text-accent lg:w-[18px] lg:h-[18px]" />
                </div>
                <span className="text-base lg:text-lg">+375 29 639 73 78</span>
              </a>
              <a href="mailto:avmmotorsby@gmail.com" className="flex items-center gap-2 lg:gap-3 text-muted-foreground hover:text-accent transition-colors group">
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                  <Icon name="Mail" size={16} className="text-accent lg:w-[18px] lg:h-[18px]" />
                </div>
                <span className="text-sm lg:text-lg break-all">avmmotorsby@gmail.com</span>
              </a>
              <div className="hidden lg:flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name="Clock" size={18} className="text-accent" />
                </div>
                <span>Ежедневно: 9:00 - 21:00</span>
              </div>
              <div className="hidden lg:flex items-start gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={18} className="text-accent" />
                </div>
                <span>Гомель, ул. Советская 127а</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-6">
            <div className="flex flex-col items-center md:items-start gap-3 lg:gap-4 text-xs lg:text-sm text-muted-foreground">
              <p className="text-center md:text-left">© 2025 AVM Моторс</p>
              <a href="/privacy" className="hover:text-accent transition-colors text-center md:text-left">Политика конфиденциальности</a>
            </div>
            <a 
              href="https://albeweb.ru/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs lg:text-sm text-muted-foreground hover:opacity-80 transition-opacity"
            >
              <span>Разработано в</span>
              <img 
                src="https://cdn.poehali.dev/files/albe.png" 
                alt="AlbeWeb"
                width="60"
                height="18"
                className="h-3 lg:h-4 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;