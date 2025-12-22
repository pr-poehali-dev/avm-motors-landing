import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";
import { useVehicles } from "@/hooks/useVehicles";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import {
  quizBudgetOptions,
  quizTaskOptions,
  quizBrandOptions,
} from "@/data/content";

const Footer = lazy(() => import("@/components/Footer"));
const ReviewsSection = lazy(() => import("@/components/sections/ReviewsSection"));
const ServicesSection = lazy(() => import("@/components/sections/ServicesSection"));
const AdvantagesSection = lazy(() => import("@/components/sections/AdvantagesSection"));
const WorkflowSection = lazy(() => import("@/components/sections/WorkflowSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

const PhoneInput = lazy(() =>
  import('react-international-phone').then(module => ({
    default: module.PhoneInput
  }))
);

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [vehicleCategory, setVehicleCategory] = useState('Авто');
  const [vehicleRegion, setVehicleRegion] = useState('Топ продаж');
  const [motoType, setMotoType] = useState('Все');

  const [quizStep, setQuizStep] = useState(1);
  const [quizData, setQuizData] = useState({
    budget: '',
    tasks: [] as string[],
    chineseBrands: '',
    name: '',
    phone: '',
  });
  const [showAllVehicles, setShowAllVehicles] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);

  const { displayedVehicles } = useVehicles(vehicleCategory, vehicleRegion, motoType, showAllVehicles);

  const handleQuizSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Мы подберём для вас идеальный автомобиль и свяжемся в течение часа",
    });
    setQuizStep(1);
    setQuizData({ budget: '', tasks: [], chineseBrands: '', name: '', phone: '' });
  }, [toast]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Наш специалист свяжется с вами в ближайшее время",
    });
    setFormData({ name: "", phone: "", message: "" });
  }, [toast]);

  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;

    const updateScrollY = () => {
      lastScrollY = window.scrollY;
      ticking = false;
    };

    const handleScroll = (e: WheelEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollY);
        ticking = true;
      }

      if (lastScrollY < 50) {
        if (e.deltaY > 0 && heroSlide === 0) {
          e.preventDefault();
          setHeroSlide(1);
        } else if (e.deltaY < 0 && heroSlide === 1) {
          e.preventDefault();
          setHeroSlide(0);
        }
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [heroSlide]);

  const renderTabButtons = (tabs: string[], activeTab: string, setActiveTab: (tab: string) => void) => (
    <div className="flex gap-2 md:gap-4 border-b border-border overflow-x-auto scrollbar-hide pb-0 -mb-px">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-3 md:pb-4 px-3 md:px-6 text-sm md:text-base lg:text-lg font-medium transition-all relative whitespace-nowrap flex-shrink-0 ${
            activeTab === tab
              ? 'text-accent'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {tab}
          {activeTab === tab && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
          )}
        </button>
      ))}
    </div>
  );

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; hover: string }> = {
      'accent': { bg: 'bg-accent/10', text: 'text-accent', hover: 'group-hover:bg-accent/20' },
      'blue-accent': { bg: 'bg-blue-accent/10', text: 'text-blue-accent', hover: 'group-hover:bg-blue-accent/20' },
      'green-accent': { bg: 'bg-green-accent/10', text: 'text-green-accent', hover: 'group-hover:bg-green-accent/20' },
      'orange-accent': { bg: 'bg-orange-accent/10', text: 'text-orange-accent', hover: 'group-hover:bg-orange-accent/20' },
    };
    return colorMap[color] || colorMap['accent'];
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onVehicleRegionChange={setVehicleRegion} />

      <HeroSection heroSlide={heroSlide} />

      <section id="vehicles" className="py-16 md:py-24 relative">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="mb-12 md:mb-20">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="h-px w-8 md:w-12 bg-accent"></div>
              <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-accent">Каталог</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Примеры доступные для заказа</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mb-6 md:mb-8">
              Подбираем транспорт под Ваш бюджет с расчетом полной стоимости до покупки
            </p>

            <div className="flex gap-0 mb-8 md:mb-12 p-1 md:p-1.5 bg-secondary/50 backdrop-blur-sm rounded-lg border border-border/50 w-fit">
              {[
                { name: 'Авто', icon: 'Car' },
                { name: 'Мото', icon: 'Bike' }
              ].map((category) => (
                <button
                  key={category.name}
                  onClick={() => {
                    setVehicleCategory(category.name);
                    setVehicleRegion('Топ продаж');
                    setMotoType('Все');
                    setShowAllVehicles(false);
                  }}
                  className={`relative flex items-center gap-2 md:gap-3 px-6 md:px-10 py-2.5 md:py-3.5 font-bold text-sm md:text-lg transition-all duration-300 ${
                    vehicleCategory === category.name
                      ? 'bg-accent text-accent-foreground rounded-md shadow-lg'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={category.icon} size={20} className="md:w-6 md:h-6" />
                  <span className="tracking-wide uppercase">{category.name}</span>
                </button>
              ))}
            </div>

            {vehicleCategory === 'Авто' && (
              <div className="relative">
                {renderTabButtons(
                  ['Топ продаж', 'Китайские', 'Европейские', 'Американские', 'Японские', 'Корейские'],
                  vehicleRegion,
                  setVehicleRegion
                )}
              </div>
            )}

            {vehicleCategory === 'Мото' && (
              <div className="relative">
                {renderTabButtons(
                  ['Все', 'Спортбайки', 'Круизеры', 'Туреры', 'Нейкеды', 'Эндуро'],
                  motoType,
                  setMotoType
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {displayedVehicles.map((vehicle, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-card border-border hover:border-accent transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    loading="lazy"
                    decoding="async"
                    width="294"
                    height="240"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <Badge className="absolute top-4 right-4 z-20 bg-accent/90 backdrop-blur-sm text-accent-foreground border-0 px-3 py-1 text-xs">
                    {vehicle.type}
                  </Badge>
                  <button className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors">
                    <Icon name="Heart" size={18} className="text-foreground" />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-3 line-clamp-1">{vehicle.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4 text-xs text-muted-foreground">
                    {vehicle.specs.map((spec, idx) => (
                      <span key={idx} className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-accent rounded-full"></div>
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Стоимость</div>
                      <div className="text-xl font-bold">{vehicle.price}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-button-primary hover:bg-button-primary/90 text-button-primary-foreground px-10 h-14 text-lg"
              onClick={() => navigate('/catalog')}
            >
              Перейти в каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="py-16 md:py-24 min-h-[400px]" />}>
        <ReviewsSection />
      </Suspense>

      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="h-px w-8 md:w-12 bg-accent"></div>
                <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-accent">Подбор авто</span>
                <div className="h-px w-8 md:w-12 bg-accent"></div>
              </div>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-4">
                Не нашли подходящий вариант?
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground px-4">
                Ответьте на 3 простых вопроса - эксперт AVM предложит оптимальные варианты в Ваш бюджет
              </p>
            </div>

            <Card className="bg-background border-border shadow-2xl">
              <div className="p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="flex justify-center mb-6 md:mb-8">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm transition-all ${
                        quizStep === step
                          ? 'bg-accent text-accent-foreground scale-110'
                          : quizStep > step
                          ? 'bg-accent/20 text-accent'
                          : 'bg-secondary text-muted-foreground'
                      }`}>
                        {quizStep > step ? <Icon name="Check" size={20} /> : step}
                      </div>
                      {step < 4 && (
                        <div className={`w-8 sm:w-12 md:w-20 h-0.5 mx-1 sm:mx-2 transition-colors ${
                          quizStep > step ? 'bg-accent' : 'bg-secondary'
                        }`}></div>
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleQuizSubmit}>
                  {quizStep === 1 && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-muted-foreground">
                          Шаг 1 из 3
                        </label>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">В каком бюджете подбираем автомобиль?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {quizBudgetOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => setQuizData({ ...quizData, budget: option.value })}
                              className={`p-4 rounded-lg border-2 font-medium transition-all ${
                                quizData.budget === option.value
                                  ? 'border-accent bg-accent/10 text-accent'
                                  : 'border-border bg-secondary/50 hover:border-accent/50 text-foreground'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <Button
                        type="button"
                        onClick={() => setQuizStep(2)}
                        className="w-full h-14 bg-button-primary hover:bg-button-primary/90 text-lg"
                        disabled={!quizData.budget}
                      >
                        Далее
                        <Icon name="ArrowRight" size={20} className="ml-2" />
                      </Button>
                    </div>
                  )}

                  {quizStep === 2 && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-muted-foreground">
                          Шаг 2 из 3
                        </label>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">Для каких задач Вам нужен автомобиль?</h3>
                        <p className="text-sm text-muted-foreground mb-4">Можно выбрать несколько вариантов</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {quizTaskOptions.map((option) => {
                            const isSelected = quizData.tasks.includes(option.value);
                            return (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                  const newTasks = isSelected
                                    ? quizData.tasks.filter(t => t !== option.value)
                                    : [...quizData.tasks, option.value];
                                  setQuizData({ ...quizData, tasks: newTasks });
                                }}
                                className={`p-4 rounded-lg border-2 font-medium transition-all text-left ${
                                  isSelected
                                    ? 'border-accent bg-accent/10 text-accent'
                                    : 'border-border bg-secondary/50 hover:border-accent/50 text-foreground'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span>{option.label}</span>
                                  {isSelected && <Icon name="Check" size={20} className="ml-2" />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          type="button"
                          onClick={() => setQuizStep(1)}
                          variant="outline"
                          className="flex-1 h-14 text-lg border-border hover:border-accent"
                        >
                          <Icon name="ArrowLeft" size={20} className="mr-2" />
                          Назад
                        </Button>
                        <Button
                          type="button"
                          onClick={() => setQuizStep(3)}
                          className="flex-1 h-14 bg-button-primary hover:bg-button-primary/90 text-lg"
                          disabled={quizData.tasks.length === 0}
                        >
                          Далее
                          <Icon name="ArrowRight" size={20} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {quizStep === 3 && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-muted-foreground">
                          Шаг 3 из 3
                        </label>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6">Как Вы относитесь к китайским маркам?</h3>
                        <div className="grid grid-cols-1 gap-3">
                          {quizBrandOptions.map((option) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => setQuizData({ ...quizData, chineseBrands: option.value })}
                              className={`p-4 rounded-lg border-2 font-medium transition-all text-left ${
                                quizData.chineseBrands === option.value
                                  ? 'border-accent bg-accent/10 text-accent'
                                  : 'border-border bg-secondary/50 hover:border-accent/50 text-foreground'
                              }`}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          type="button"
                          onClick={() => setQuizStep(2)}
                          variant="outline"
                          className="flex-1 h-14 text-lg border-border hover:border-accent"
                        >
                          <Icon name="ArrowLeft" size={20} className="mr-2" />
                          Назад
                        </Button>
                        <Button
                          type="button"
                          onClick={() => setQuizStep(4)}
                          className="flex-1 h-14 bg-button-primary hover:bg-button-primary/90 text-lg"
                          disabled={!quizData.chineseBrands}
                        >
                          Далее
                          <Icon name="ArrowRight" size={20} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {quizStep === 4 && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-muted-foreground">
                          Последний шаг
                        </label>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3">Мы подготовим для Вас индивидуальную подборку автомобилей</h3>
                        <p className="text-base text-muted-foreground mb-6">
                          С учетом бюджета, задач и расчетом полной стоимости до покупки - без сюрпризов
                        </p>
                        <div className="space-y-4">
                          <Input
                            type="text"
                            placeholder="Имя"
                            value={quizData.name}
                            onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                            className="h-12 sm:h-14 text-sm sm:text-base md:text-lg bg-secondary/50 border-border focus:border-accent"
                            required
                          />
                          <Suspense fallback={<Input type="tel" placeholder="+7" className="h-12 sm:h-14" />}>
                            <PhoneInput
                              defaultCountry="ru"
                              value={quizData.phone}
                              onChange={(phone) => setQuizData({ ...quizData, phone })}
                              inputClassName="h-12 sm:h-14 text-sm sm:text-base md:text-lg bg-secondary/50 border-border focus:border-accent"
                              className="phone-input-custom"
                            />
                          </Suspense>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          type="button"
                          onClick={() => setQuizStep(3)}
                          variant="outline"
                          className="w-full sm:flex-1 h-14 text-lg border-border hover:border-accent"
                        >
                          <Icon name="ArrowLeft" size={20} className="mr-2" />
                          Назад
                        </Button>
                        <Button
                          type="submit"
                          className="w-full sm:flex-1 h-14 bg-button-primary hover:bg-button-primary/90 text-sm sm:text-base"
                          disabled={!quizData.name.trim() || !quizData.phone.trim()}
                        >
                          <span className="hidden sm:inline">Получить подбор от эксперта AVM</span>
                          <span className="sm:hidden">Получить подбор</span>
                          <Icon name="Check" size={20} className="ml-2" />
                        </Button>
                      </div>
                      <p className="text-sm text-center text-muted-foreground">
                        Контакты нужны, чтобы связаться и отправить варианты и расчет. Спама не будет
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="py-16 md:py-24 min-h-[400px]" />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<div className="py-16 md:py-24 min-h-[400px]" />}>
        <AdvantagesSection />
      </Suspense>

      <Suspense fallback={<div className="py-16 md:py-24 min-h-[400px]" />}>
        <WorkflowSection />
      </Suspense>

      <Suspense fallback={<div className="py-16 md:py-24 min-h-[400px]" />}>
        <ContactSection />
      </Suspense>

      <Suspense fallback={<div className="py-16 min-h-[200px]" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;