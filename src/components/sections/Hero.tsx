import { useState, lazy, Suspense, memo } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const ConsultationModal = lazy(() => import("@/components/ConsultationModal"));
const BackgroundBlur = lazy(() => import("@/components/ui/decorative-background").then(m => ({ default: m.BackgroundBlur })));
const DecorativeShapes = lazy(() => import("@/components/ui/decorative-background").then(m => ({ default: m.DecorativeShapes })));

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

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
      <Suspense fallback={null}>
        <BackgroundBlur variant="hero" />
        <DecorativeShapes />
      </Suspense>
      
      <div className="hidden md:block absolute top-0 right-0 w-[50%] md:w-[50%] lg:w-[55%] xl:w-[60%] h-full pointer-events-none z-0">
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
            fetchpriority="high"
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
          <img 
            src="https://cdn.poehali.dev/files/1679234788_hdpic-club-p-mototsikl-dlya-fotoshopa-18.png"
            alt="Premium Motorcycle"
            loading="lazy"
            width="1400"
            height="904"
            className="w-full h-full object-contain drop-shadow-[0_30px_100px_rgba(249,115,22,0.4)]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-orange-500/5 to-transparent"></div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 relative py-8 md:py-16 z-30 md:max-w-[50%] lg:max-w-[50%] xl:max-w-[48%]">
        <div className="relative">
          <div className="mb-8 flex gap-3 sm:gap-4">
            <button
              onClick={() => setActiveSlide('auto')}
              className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                activeSlide === 'auto'
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
                activeSlide === 'moto'
                  ? 'bg-orange-500 text-white shadow-2xl scale-105 ring-2 ring-orange-500 ring-offset-2 ring-offset-background'
                  : 'bg-card/80 border-2 border-border hover:border-orange-500/70 hover:scale-102 hover:shadow-lg'
              }`}
            >
              <Icon name="Bike" className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" />
              <span>Мототехника</span>
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-[0.95] tracking-tight relative">
                АВТОМОБИЛИ<br />
                <span className="accent-title text-accent">из Китая</span><br />
                ПОД КЛЮЧ
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-md lg:max-w-xl leading-relaxed relative">
                Подбор, проверка и доставка авто под Ваши критерии и бюджет. Без скрытых платежей с фиксированной ценой по договору
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-30">
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
                  className="border-2 text-base md:text-lg px-8 md:px-10 h-12 md:h-14 w-full sm:w-auto hover:bg-button-primary hover:border-button-primary hover:text-button-primary-foreground"
                  onClick={() => setConsultationOpen(true)}
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-[0.95] tracking-tight relative">
                МОТОТЕХНИКА<br />
                <span className="accent-title text-orange-500">из Китая</span><br />
                ПОД КЛЮЧ
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-md lg:max-w-xl leading-relaxed relative">
                Мотоциклы, скутеры и квадроциклы. Полное юридическое сопровождение и доставка до вашего города
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-30">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white text-base md:text-lg px-8 md:px-10 h-12 md:h-14 w-full sm:w-auto"
                  onClick={() => navigate('/catalog')}
                >
                  Перейти в каталог
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-orange-500 text-orange-500 text-base md:text-lg px-8 md:px-10 h-12 md:h-14 w-full sm:w-auto hover:bg-orange-500 hover:text-white"
                  onClick={() => setConsultationOpen(true)}
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

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setActiveSlide('auto')}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === 'auto' ? 'bg-accent w-12 shadow-lg' : 'bg-border/50 w-2 hover:bg-accent/50 hover:w-6'
                }`}
                aria-label="Показать автомобили"
              />
              <button
                onClick={() => setActiveSlide('moto')}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === 'moto' ? 'bg-orange-500 w-12 shadow-lg' : 'bg-border/50 w-2 hover:bg-orange-500/50 hover:w-6'
                }`}
                aria-label="Показать мототехнику"
              />
            </div>
          </div>
        </div>
      </div>

      {consultationOpen && (
        <Suspense fallback={null}>
          <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
        </Suspense>
      )}
    </section>
  );
};

export default memo(Hero);