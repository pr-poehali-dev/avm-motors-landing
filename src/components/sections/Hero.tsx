import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { BackgroundBlur, DecorativeShapes } from "@/components/ui/decorative-background";

const Hero = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState<'auto' | 'moto'>('auto');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => prev === 'auto' ? 'moto' : 'auto');
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const heroStats = [
    { value: "30%", label: "Экономия", color: "accent" },
    { value: "30", label: "Дней доставка", color: "blue-accent" },
    { value: "24/7", label: "Поддержка", color: "green-accent" },
    { value: "14", label: "Лет на рынке", color: "orange-accent" },
  ];

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
      <BackgroundBlur variant="hero" />
      <DecorativeShapes />
      
      <div className="hidden md:block absolute top-0 -right-40 lg:-right-60 w-[900px] lg:w-[1400px] h-full pointer-events-none z-10">
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            activeSlide === 'auto' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-px h-48 bg-gradient-to-b from-transparent via-blue-accent/60 dark:via-accent/60 to-transparent"></div>
            <div className="absolute top-1/3 right-1/3 w-px h-64 bg-gradient-to-b from-transparent via-blue-accent/40 dark:via-accent/40 to-transparent"></div>
            <div className="absolute top-1/2 right-[40%] w-16 h-px bg-gradient-to-r from-transparent via-blue-accent/50 dark:via-accent/50 to-transparent"></div>
          </div>
          <img 
            src="https://cdn.poehali.dev/files/Group_117.png"
            alt="Premium Car"
            loading="eager"
            fetchPriority="high"
            width="1400"
            height="904"
            className="w-full h-full object-contain drop-shadow-[0_30px_100px_rgba(0,149,218,0.3)] dark:drop-shadow-[0_30px_100px_rgba(229,87,68,0.4)]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-accent/5 dark:via-accent/5 to-transparent"></div>
        </div>

        <div
          className={`absolute inset-0 transition-all duration-700 ${
            activeSlide === 'moto' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
        >
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-px h-48 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent"></div>
            <div className="absolute top-1/3 right-1/3 w-px h-64 bg-gradient-to-b from-transparent via-orange-500/40 to-transparent"></div>
            <div className="absolute top-1/2 right-[40%] w-16 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
          </div>
          <Icon 
            name="Bike"
            size={800}
            className="w-full h-full object-contain text-orange-500/30 drop-shadow-[0_30px_100px_rgba(249,115,22,0.4)]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-orange-500/5 to-transparent"></div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 relative py-8 md:py-16 z-20">
        <div className="relative">
          <div className="mb-6 flex gap-3">
            <button
              onClick={() => setActiveSlide('auto')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                activeSlide === 'auto'
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'bg-card/50 border border-border hover:border-accent/50'
              }`}
            >
              <Icon name="Car" size={18} />
              Авто
            </button>
            <button
              onClick={() => setActiveSlide('moto')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                activeSlide === 'moto'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-card/50 border border-border hover:border-orange-500/50'
              }`}
            >
              <Icon name="Bike" size={18} />
              Мото
            </button>
          </div>

          <div className="relative">
            <div
              className={`transition-all duration-500 ${
                activeSlide === 'auto' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="mb-6 md:mb-8 flex items-center gap-2 md:gap-3 relative">
                <div className="h-px w-8 md:w-12 bg-accent"></div>
                <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-accent">Эксклюзивный импорт</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-6 md:mb-8 leading-[0.95] tracking-tight relative max-w-4xl">
                АВТОМОБИЛИ<br />
                <span className="accent-title text-accent">из Китая</span><br />
                ПОД КЛЮЧ
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-2xl leading-relaxed relative">
                Подбор, проверка и доставка авто под Ваши критерии и бюджет. Без скрытых платежей с фиксированной ценой по договору
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 relative z-30">
                <Button 
                  size="lg" 
                  className="bg-button-primary hover:bg-button-primary/90 text-base md:text-lg px-8 md:px-10 h-12 md:h-14 w-full sm:w-auto"
                  onClick={() => navigate('/catalog')}
                >
                  Перейти в каталог
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 text-base md:text-lg px-8 md:px-10 h-12 md:h-14 hover:bg-button-primary hover:border-button-primary hover:text-button-primary-foreground w-full sm:w-auto"
                >
                  Консультация эксперта
                </Button>
              </div>
            </div>

            <div
              className={`transition-all duration-500 ${
                activeSlide === 'moto' ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="mb-6 md:mb-8 flex items-center gap-2 md:gap-3 relative">
                <div className="h-px w-8 md:w-12 bg-orange-500"></div>
                <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-orange-500">Быстрые и мощные</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-6 md:mb-8 leading-[0.95] tracking-tight relative max-w-4xl">
                МОТОТЕХНИКА<br />
                <span className="accent-title text-orange-500">из Китая</span><br />
                ПОД КЛЮЧ
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-2xl leading-relaxed relative">
                Мотоциклы, скутеры и квадроциклы. Полное юридическое сопровождение и доставка до вашего города
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 relative z-30">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white text-base md:text-lg px-8 md:px-10 h-12 md:h-14 w-full sm:w-auto"
                  onClick={() => navigate('/catalog')}
                >
                  Смотреть мото
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-orange-500 text-orange-500 text-base md:text-lg px-8 md:px-10 h-12 md:h-14 hover:bg-orange-500 hover:text-white w-full sm:w-auto"
                >
                  Консультация эксперта
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-20 relative z-30">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-3xl">
              {heroStats.map((stat, index) => (
                <div key={index} className={`border-l-2 border-${stat.color} pl-3 md:pl-6`}>
                  <div className={`text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 mt-8">
              <button
                onClick={() => setActiveSlide('auto')}
                className={`h-1.5 rounded-full transition-all ${
                  activeSlide === 'auto' ? 'bg-accent w-8' : 'bg-border w-1.5 hover:bg-accent/50'
                }`}
                aria-label="Показать автомобили"
              />
              <button
                onClick={() => setActiveSlide('moto')}
                className={`h-1.5 rounded-full transition-all ${
                  activeSlide === 'moto' ? 'bg-orange-500 w-8' : 'bg-border w-1.5 hover:bg-orange-500/50'
                }`}
                aria-label="Показать мототехнику"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;