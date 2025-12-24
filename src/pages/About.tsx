import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import { BackgroundBlur } from "@/components/ui/decorative-background";
import Footer from "@/components/Footer";

const About = () => {
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
      name: "Вадим Александрович",
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
      <Header onVehicleRegionChange={() => {}} onSearch={() => {}} />

      <main>
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
          <BackgroundBlur variant="hero" />
          <div className="w-full px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="max-w-6xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-sm tracking-[0.3em] uppercase text-accent">
                  О компании
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl">
                AVM Motors — ваш надёжный партнёр в мире автомобилей
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
                С 2012 года помогаем клиентам приобретать автомобили мечты с
                максимальной выгодой и гарантией качества
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16">
              {stats.map((stat, idx) => (
                <Card
                  key={idx}
                  className="p-6 md:p-8 text-center bg-card border-border hover:border-accent transition-all"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name={stat.icon} size={24} className="text-accent" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
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
                <Card
                  key={idx}
                  className="p-8 bg-card border-border hover:border-accent transition-all"
                >
                  <div
                    className={`w-16 h-16 mb-6 rounded-2xl bg-${value.color}/10 flex items-center justify-center`}
                  >
                    <Icon
                      name={value.icon}
                      size={32}
                      className={`text-${value.color}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.desc}
                  </p>
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
                <Card
                  key={idx}
                  className="p-8 bg-card border-border hover:border-accent transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={member.icon}
                        size={36}
                        className="text-accent"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <div className="text-sm text-accent mb-3">
                        {member.role}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {member.desc}
                      </p>
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
                  width="1200"
                  height="900"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Главный офис
                  </h3>
                  <p className="text-white/90">
                    Современное здание с удобной парковкой
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
                <img
                  src="https://cdn.poehali.dev/files/photo_2025-10-09_06-19-52.jpg"
                  alt="Офис AVM Motors изнутри"
                  width="1200"
                  height="900"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Рабочее пространство
                  </h3>
                  <p className="text-white/90">
                    Комфортная зона для консультаций клиентов
                  </p>
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
                        <h3 className="text-xl font-bold mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {achievement.desc}
                        </p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Готовы начать?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Свяжитесь с нами и получите бесплатную консультацию по подбору
                  автомобиля
                </p>
                <Button
                  size="lg"
                  className="bg-button-primary hover:bg-button-primary/90 text-button-primary-foreground h-12 sm:h-14 px-6 sm:px-10 text-base sm:text-lg w-full sm:w-auto"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Получить консультацию
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default About;
