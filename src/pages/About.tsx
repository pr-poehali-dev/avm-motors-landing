import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { BackgroundBlur } from "@/components/ui/decorative-background";

const About = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState<'auto' | 'moto'>('auto');

  const stats = [
    { value: "13+", label: "лет на рынке", icon: "Calendar" },
    { value: "5+", label: "лет работы с Китаем", icon: "Globe" },
    { value: "2000+", label: "довольных клиентов", icon: "Users" },
    { value: "100%", label: "юридическая защита", icon: "Shield" },
  ];

  const values = [
    {
      icon: "Target",
      title: "Прозрачность",
      desc: "Рассчитываем полную стоимость до покупки. Никаких скрытых платежей и сюрпризов после сделки",
      color: "accent" as const,
    },
    {
      icon: "Award",
      title: "Экспертиза",
      desc: "Более 13 лет опыта в автомобильном бизнесе. Знаем все тонкости импорта и растаможки",
      color: "blue-accent" as const,
    },
    {
      icon: "Shield",
      title: "Надёжность",
      desc: "Официальные договоры, юридическое сопровождение на всех этапах, страхование груза",
      color: "green-accent" as const,
    },
    {
      icon: "Heart",
      title: "Забота о клиентах",
      desc: "Индивидуальный подход к каждому. Сопровождаем от подбора до постановки на учёт",
      color: "orange-accent" as const,
    },
  ];

  const team = [
    {
      name: "Александр Викторович",
      role: "Основатель и CEO",
      desc: "Эксперт по автомобильному импорту с 13-летним стажем. Лично контролирует каждую сделку",
      icon: "User",
    },
    {
      name: "Отдел закупок в Китае",
      role: "Представительство в КНР",
      desc: "Наши специалисты в Китае проверяют каждый автомобиль перед выкупом",
      icon: "Users",
    },
    {
      name: "Юридический отдел",
      role: "Правовая поддержка",
      desc: "Обеспечиваем полное юридическое сопровождение сделки и защиту ваших интересов",
      icon: "Scale",
    },
    {
      name: "Логистический отдел",
      role: "Доставка и таможня",
      desc: "Контролируем весь путь автомобиля от Китая до вашего города",
      icon: "Truck",
    },
  ];

  const achievements = [
    {
      year: "2012",
      title: "Основание компании",
      desc: "Начало пути на рынке автомобилей в Беларуси",
    },
    {
      year: "2019",
      title: "Запуск направления импорта из Китая",
      desc: "Открытие представительства в КНР и первые поставки",
    },
    {
      year: "2022",
      title: "Расширение географии",
      desc: "Начало поставок автомобилей в Россию",
    },
    {
      year: "2025",
      title: "Бренд года",
      desc: "Получение престижной награды AVM - бренд года 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        onVehicleRegionChange={() => {}}
        onSearch={() => {}}
      />

      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        <BackgroundBlur variant="hero" />
        <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-sm tracking-[0.3em] uppercase text-accent">
                Каталог
              </span>
            </div>

            <div className="flex gap-3 mb-8">
              <button
                onClick={() => setActiveSlide('auto')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-base transition-all ${
                  activeSlide === 'auto'
                    ? 'bg-accent text-accent-foreground shadow-lg scale-105'
                    : 'bg-card/50 border border-border hover:border-accent/50 hover:bg-card'
                }`}
              >
                <Icon name="Car" size={20} />
                Автомобили
              </button>
              <button
                onClick={() => setActiveSlide('moto')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-base transition-all ${
                  activeSlide === 'moto'
                    ? 'bg-orange-500 text-white shadow-lg scale-105'
                    : 'bg-card/50 border border-border hover:border-orange-500/50 hover:bg-card'
                }`}
              >
                <Icon name="Bike" size={20} />
                Мототехника
              </button>
            </div>

            <div className="relative">
              <div
                className={`transition-all duration-500 ${
                  activeSlide === 'auto' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8 absolute inset-0 pointer-events-none'
                }`}
              >
                <Card className="overflow-hidden bg-gradient-to-br from-yellow-400/20 via-orange-400/10 to-accent/20 border-accent/30">
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-bold mb-6">
                        <Icon name="Zap" size={16} />
                        100 000+ вариантов
                      </div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Актуальный каталог с пробегом из Китая!
                      </h2>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Больше 100 000 вариантов до 5 лет. Ежедневные обновления! Бесплатный подбор и расчет доставки.
                      </p>
                      <Button
                        size="lg"
                        onClick={() => navigate('/catalog')}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-8 text-base font-semibold"
                      >
                        Смотреть авто
                        <Icon name="ArrowRight" size={20} className="ml-2" />
                      </Button>
                    </div>
                    <div className="relative h-[280px] md:h-[320px]">
                      <img
                        src="https://cdn.poehali.dev/files/photo_2025-12-23_10-44-12.jpg"
                        alt="Автомобили из Китая"
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </Card>
              </div>

              <div
                className={`transition-all duration-500 ${
                  activeSlide === 'moto' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 absolute inset-0 pointer-events-none'
                }`}
              >
                <Card className="overflow-hidden bg-gradient-to-br from-orange-500/20 via-red-500/10 to-yellow-500/20 border-orange-500/30">
                  <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-500 text-sm font-bold mb-6">
                        <Icon name="Sparkles" size={16} />
                        Эксклюзивные модели
                      </div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Мототехника из Китая с доставкой
                      </h2>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Широкий выбор мотоциклов, скутеров и квадроциклов. Официальная гарантия и полное юридическое сопровождение.
                      </p>
                      <Button
                        size="lg"
                        onClick={() => navigate('/catalog')}
                        className="bg-orange-500 hover:bg-orange-600 text-white h-14 px-8 text-base font-semibold"
                      >
                        Смотреть мото
                        <Icon name="ArrowRight" size={20} className="ml-2" />
                      </Button>
                    </div>
                    <div className="relative h-[280px] md:h-[320px] flex items-center justify-center">
                      <Icon name="Bike" size={160} className="text-orange-500/20" />
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={() => setActiveSlide('auto')}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === 'auto' ? 'bg-accent w-8' : 'bg-border w-2 hover:bg-accent/50'
                }`}
                aria-label="Показать автомобили"
              />
              <button
                onClick={() => setActiveSlide('moto')}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === 'moto' ? 'bg-orange-500 w-8' : 'bg-border w-2 hover:bg-orange-500/50'
                }`}
                aria-label="Показать мототехнику"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16">
            {stats.map((stat, idx) => (
              <Card key={idx} className="p-6 md:p-8 text-center bg-card border-border hover:border-accent transition-all">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Icon name={stat.icon} size={24} className="text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <SectionHeader
            label="Наша миссия"
            title="Делаем покупку автомобиля простой и выгодной"
            description="Мы верим, что каждый заслуживает автомобиль мечты по справедливой цене. Поэтому мы создали сервис полного цикла, где вы получаете прозрачность на каждом этапе и экономите до 35% от рыночной цены"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
            {values.map((value, idx) => (
              <Card key={idx} className="p-8 bg-card border-border hover:border-accent transition-all">
                <div className={`w-16 h-16 mb-6 rounded-2xl bg-${value.color}/10 flex items-center justify-center`}>
                  <Icon name={value.icon} size={32} className={`text-${value.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="w-full px-4 sm:px-6 lg:px-12 relative">
          <SectionHeader
            label="Наша команда"
            title="Профессионалы своего дела"
            description="Команда экспертов с многолетним опытом работы на автомобильном рынке"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
            {team.map((member, idx) => (
              <Card key={idx} className="p-8 bg-card border-border hover:border-accent transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={member.icon} size={36} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <div className="text-sm text-accent mb-3">{member.role}</div>
                    <p className="text-muted-foreground leading-relaxed">{member.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <SectionHeader
            label="Наш офис"
            title="Приглашаем в гости"
            description="Современное пространство, где создаётся ваш идеальный автомобиль"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
              <img 
                src="https://cdn.poehali.dev/files/photo_2025-10-08_18-25-35.jpg"
                alt="Офис AVM Motors снаружи"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Главный офис</h3>
                <p className="text-white/90">Современное здание с удобной парковкой</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
              <img 
                src="https://cdn.poehali.dev/files/photo_2025-10-09_06-19-52.jpg"
                alt="Офис AVM Motors изнутри"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Рабочее пространство</h3>
                <p className="text-white/90">Комфортная зона для консультаций клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <SectionHeader
            label="История"
            title="Наш путь к успеху"
            description="От небольшой компании до лидера рынка автомобильного импорта"
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/20"></div>
              
              <div className="space-y-12">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="relative pl-20">
                    <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                      {achievement.year}
                    </div>
                    <Card className="p-6 bg-card border-border hover:border-accent transition-all">
                      <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.desc}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="w-full px-4 sm:px-6 lg:px-12 relative">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Свяжитесь с нами и получите бесплатную консультацию по подбору автомобиля
              </p>
              <Button 
                size="lg"
                className="bg-button-primary hover:bg-button-primary/90 text-button-primary-foreground h-14 px-10 text-lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Получить консультацию
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;