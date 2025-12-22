import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  heroSlide: number;
}

const HeroSection = ({ heroSlide }: HeroSectionProps) => {
  const navigate = useNavigate();

  const heroStats = [
    { value: "30%", label: "Экономия", color: "accent" },
    { value: "30", label: "Дней доставка", color: "blue-accent" },
    { value: "24/7", label: "Поддержка", color: "green-accent" },
    { value: "14", label: "Лет на рынке", color: "orange-accent" },
  ];

  const heroImages = [
    {
      src: "https://cdn.poehali.dev/files/Group_117.png",
      alt: "Premium Car",
      width: "1400",
      height: "904",
    },
    {
      src: "https://cdn.poehali.dev/files/1679234788_hdpic-club-p-mototsikl-dlya-fotoshopa-18.png",
      alt: "Premium Motorcycle",
      width: "1398",
      height: "1025",
    },
  ];

  const heroTitles = [
    { line1: "АВТОМОБИЛИ", line2: "из Китая", line3: "ПОД КЛЮЧ" },
    { line1: "МОТОТЕХНИКА", line2: "из Китая", line3: "ПОД КЛЮЧ" },
  ];

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-accent/5 dark:bg-accent/5 blur-[180px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-accent/10 dark:bg-accent/10 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/3 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-blue-accent/5 dark:bg-accent/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="hidden md:block absolute top-1/3 right-1/4 w-2 h-96 bg-gradient-to-b from-blue-accent/40 dark:from-accent/40 to-transparent rotate-12"></div>
      <div className="hidden md:block absolute top-1/2 right-[30%] w-1 h-64 bg-gradient-to-b from-blue-accent/60 dark:from-accent/60 to-transparent -rotate-6"></div>
      <div className="hidden md:block absolute top-1/4 right-[20%] w-32 h-32 border border-blue-accent/20 dark:border-accent/20 rotate-45"></div>
      <div className="hidden md:block absolute top-[60%] right-[35%] w-24 h-24 border border-blue-accent/30 dark:border-accent/30 rotate-12"></div>

      <div className="hidden md:block absolute top-1/4 left-[10%] w-1 h-48 bg-gradient-to-b from-transparent via-blue-accent/30 dark:via-accent/30 to-transparent rotate-[-15deg]"></div>
      <div className="hidden md:block absolute bottom-1/4 left-[15%] w-20 h-20 border border-blue-accent/15 dark:border-accent/15 rotate-[-30deg]"></div>

      <div className="hidden md:block absolute top-0 -right-40 lg:-right-60 w-[900px] lg:w-[1400px] h-full pointer-events-none z-10 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out h-full"
          style={{ transform: `translateX(-${heroSlide * 100}%)` }}
        >
          {heroImages.map((image, index) => (
            <div key={index} className="min-w-full h-full relative">
              <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-px h-48 bg-gradient-to-b from-transparent via-blue-accent/60 dark:via-accent/60 to-transparent"></div>
                <div className="absolute top-1/3 right-1/3 w-px h-64 bg-gradient-to-b from-transparent via-blue-accent/40 dark:via-accent/40 to-transparent"></div>
                <div className="absolute top-1/2 right-[40%] w-16 h-px bg-gradient-to-r from-transparent via-blue-accent/50 dark:via-accent/50 to-transparent"></div>
              </div>
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                width={image.width}
                height={image.height}
                className="w-full h-full object-contain drop-shadow-[0_30px_100px_rgba(0,149,218,0.3)] dark:drop-shadow-[0_30px_100px_rgba(229,87,68,0.4)]"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-accent/5 dark:via-accent/5 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-12 relative py-8 md:py-16 z-20">
        <div className="relative">
          <div className="mb-6 md:mb-8 flex items-center gap-2 md:gap-3 relative">
            <div className="h-px w-8 md:w-12 bg-accent"></div>
            <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-accent">
              Эксклюзивный импорт
            </span>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${heroSlide * 100}%)` }}
            >
              {heroTitles.map((title, index) => (
                <div key={index} className="min-w-full">
                  <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-6 md:mb-8 leading-[0.95] tracking-tight relative max-w-4xl">
                    {title.line1}
                    <br />
                    <span className="accent-title text-accent">{title.line2}</span>
                    <br />
                    {title.line3}
                  </h1>
                </div>
              ))}
            </div>
          </div>

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
          <div className="mt-12 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-3xl relative z-30">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;