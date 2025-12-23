import { useState, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { BackgroundBlur, DecorativeShapes } from "@/components/ui/decorative-background";

const ConsultationModal = lazy(() => import("@/components/ConsultationModal"));

const slideConfig = {
  auto: {
    label: "Эксклюзивный импорт",
    title: ["АВТОМОБИЛИ", "из Китая", "ПОД КЛЮЧ"],
    description: "Подбор, проверка и доставка авто под Ваши критерии и бюджет. Без скрытых платежей с фиксированной ценой по договору",
    image: "https://cdn.poehali.dev/files/Group_117.png",
    imageAlt: "Premium Car",
    accentColor: "accent",
    buttonClass: "bg-button-primary hover:bg-button-primary/90",
    gradientColors: "blue-accent/60 dark:via-accent/60",
  },
  moto: {
    label: "Быстрые и мощные",
    title: ["МОТОТЕХНИКА", "из Китая", "ПОД КЛЮЧ"],
    description: "Мотоциклы, скутеры и квадроциклы. Полное юридическое сопровождение и доставка до вашего города",
    image: "https://cdn.poehali.dev/files/1679234788_hdpic-club-p-mototsikl-dlya-fotoshopa-18.png",
    imageAlt: "Premium Motorcycle",
    accentColor: "orange-500",
    buttonClass: "bg-orange-500 hover:bg-orange-600 text-white",
    gradientColors: "orange-500/60",
  }
};

const Hero = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState<'auto' | 'moto'>('auto');
  const [consultationOpen, setConsultationOpen] = useState(false);

  const heroStats = [
    { value: "30%", label: "Экономия", color: "accent" },
    { value: "30", label: "Дней доставка", color: "blue-accent" },
    { value: "24/7", label: "Поддержка", color: "green-accent" },
    { value: "14", label: "Лет на рынке", color: "orange-accent" },
  ];

  const config = slideConfig[activeSlide];
  const isAuto = activeSlide === 'auto';

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
      <BackgroundBlur variant="hero" />
      <DecorativeShapes />
      
      {/* Images */}
      <div className="hidden md:block absolute top-0 right-0 w-[50%] md:w-[50%] lg:w-[55%] xl:w-[60%] h-full pointer-events-none z-0">
        {(['auto', 'moto'] as const).map((type) => {
          const cfg = slideConfig[type];
          const isActive = activeSlide === type;
          return (
            <div
              key={type}
              className={`absolute inset-0 transition-all duration-700 ${
                isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
            >
              <div className="absolute inset-0">
                <div className={`absolute top-1/4 right-1/4 w-px h-48 bg-gradient-to-b from-transparent via-${cfg.gradientColors} to-transparent`}></div>
                <div className={`absolute top-1/3 right-1/3 w-px h-64 bg-gradient-to-b from-transparent via-${cfg.accentColor}/40 to-transparent`}></div>
                <div className={`absolute top-1/2 right-[40%] w-16 h-px bg-gradient-to-r from-transparent via-${cfg.accentColor}/50 to-transparent`}></div>
              </div>
              <img 
                src={cfg.image}
                alt={cfg.imageAlt}
                loading={type === 'auto' ? 'eager' : 'lazy'}
                fetchPriority={type === 'auto' ? 'high' : undefined}
                width="1400"
                height="904"
                className={`w-full h-full object-contain ${
                  type === 'auto' 
                    ? 'drop-shadow-[0_30px_100px_rgba(0,149,218,0.3)] dark:drop-shadow-[0_30px_100px_rgba(229,87,68,0.4)]'
                    : 'drop-shadow-[0_30px_100px_rgba(249,115,22,0.4)]'
                }`}
              />
              <div className={`absolute inset-0 bg-gradient-to-l from-transparent via-${cfg.accentColor}/5 to-transparent`}></div>
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="w-full px-4 sm:px-6 lg:px-12 relative py-8 md:py-16 z-[100]">
        <div className="relative">
          {/* Tabs */}
          <div className="mb-8 flex gap-3 sm:gap-4">
            <button
              onClick={() => setActiveSlide('auto')}
              className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                isAuto
                  ? 'bg-accent text-accent-foreground shadow-2xl scale-105 ring-2 ring-accent ring-offset-2 ring-offset-background'
                  : 'bg-card/80 border-2 border-border hover:border-accent/70 hover:scale-102 hover:shadow-lg'
              }`}
            >
              <Icon name="Car" className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" />
              <span>Автомобили</span>
            </button>
            <button
              onClick={() => setActiveSlide('moto')}
              className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                !isAuto
                  ? 'bg-orange-500 text-white shadow-2xl scale-105 ring-2 ring-orange-500 ring-offset-2 ring-offset-background'
                  : 'bg-card/80 border-2 border-border hover:border-orange-500/70 hover:scale-102 hover:shadow-lg'
              }`}
            >
              <Icon name="Bike" className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" />
              <span>Мототехника</span>
            </button>
          </div>

          {/* Slide Content */}
          <div className={`transition-all duration-500 ${isAuto ? 'block' : 'hidden'}`}>
            <div className="mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
              <div className={`h-px w-8 md:w-12 bg-${config.accentColor}`}></div>
              <span className={`text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-${config.accentColor}`}>{config.label}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-[0.95]">
              {config.title[0]}<br />
              <span className={`accent-title text-${config.accentColor}`}>{config.title[1]}</span><br />
              {config.title[2]}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-md lg:max-w-xl leading-relaxed">
              {config.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className={`${config.buttonClass} text-base md:text-lg px-8 md:px-10 h-12 md:h-14 w-full sm:w-auto`}
                onClick={() => navigate('/catalog')}
              >
                Перейти в каталог
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className={`border-2 ${
                  isAuto 
                    ? 'text-base md:text-lg px-8 md:px-10 h-12 md:h-14 w-full sm:w-auto hover:bg-button-primary hover:border-button-primary hover:text-button-primary-foreground'
                    : 'border-orange-500 text-orange-500 text-base md:text-lg px-8 md:px-10 h-12 md:h-14 w-full sm:w-auto hover:bg-orange-500 hover:text-white'
                }`}
                onClick={() => setConsultationOpen(true)}
              >
                Консультация эксперта
              </Button>
            </div>
          </div>

          <div className={`transition-all duration-500 ${!isAuto ? 'block' : 'hidden'}`}>
            <div className="mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
              <div className={`h-px w-8 md:w-12 bg-${config.accentColor}`}></div>
              <span className={`text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-${config.accentColor}`}>{config.label}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-[0.95]">
              {config.title[0]}<br />
              <span className={`accent-title text-${config.accentColor}`}>{config.title[1]}</span><br />
              {config.title[2]}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-md lg:max-w-xl leading-relaxed">
              {config.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className={`${config.buttonClass} text-base md:text-lg px-8 md:px-10 h-12 md:h-14 w-full sm:w-auto`}
                onClick={() => navigate('/catalog')}
              >
                Перейти в каталог
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className={`border-2 ${
                  isAuto 
                    ? 'text-base md:text-lg px-8 md:px-10 h-12 md:h-14 w-full sm:w-auto hover:bg-button-primary hover:border-button-primary hover:text-button-primary-foreground'
                    : 'border-orange-500 text-orange-500 text-base md:text-lg px-8 md:px-10 h-12 md:h-14 w-full sm:w-auto hover:bg-orange-500 hover:text-white'
                }`}
                onClick={() => setConsultationOpen(true)}
              >
                Консультация эксперта
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 md:mt-20 relative z-30">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-3xl">
              {heroStats.map((stat, index) => (
                <div key={index} className={`border-l-2 border-${stat.color} pl-3 md:pl-6`}>
                  <div className={`text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        <ConsultationModal 
          open={consultationOpen} 
          onOpenChange={setConsultationOpen}
        />
      </Suspense>
    </section>
  );
};

export default Hero;