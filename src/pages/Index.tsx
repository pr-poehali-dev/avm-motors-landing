import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Наш менеджер свяжется с вами в ближайшее время",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const vehicles = [
    {
      name: "Enduro X-500",
      type: "Эндуро",
      price: "от 450 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/422b718d-0e06-4591-9b81-c98893202986.jpg",
      features: ["500cc", "Новый", "В наличии"],
    },
    {
      name: "Sport Touring ST-650",
      type: "Туризм",
      price: "от 580 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/422b718d-0e06-4591-9b81-c98893202986.jpg",
      features: ["650cc", "Новый", "Под заказ"],
    },
    {
      name: "Urban SUV X7",
      type: "Кроссовер",
      price: "от 2 850 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/155572cd-4de4-4478-b50e-f695becf8e34.jpg",
      features: ["1.5T", "Новый", "В наличии"],
    },
    {
      name: "Electric EV-Pro",
      type: "Электромобиль",
      price: "от 3 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/155572cd-4de4-4478-b50e-f695becf8e34.jpg",
      features: ["Electric", "Новый", "Под заказ"],
    },
  ];

  const benefits = [
    {
      icon: "Shield",
      title: "Официальная гарантия",
      description: "До 3 лет или 100 000 км на все автомобили",
    },
    {
      icon: "CreditCard",
      title: "Кредит и рассрочка",
      description: "От 0% годовых, одобрение за 15 минут",
    },
    {
      icon: "Truck",
      title: "Доставка из КНР",
      description: "Срок поставки 30-45 дней, полное сопровождение",
    },
    {
      icon: "Wrench",
      title: "Сервисное обслуживание",
      description: "Собственный СТО с оригинальными запчастями",
    },
  ];

  const deliverySteps = [
    {
      step: "1",
      title: "Заявка и подбор",
      description: "Вы оставляете заявку, мы подбираем модель под ваши требования",
      days: "1 день",
    },
    {
      step: "2",
      title: "Оформление документов",
      description: "Заключаем договор, оформляем кредит при необходимости",
      days: "2-3 дня",
    },
    {
      step: "3",
      title: "Заказ и отправка",
      description: "Заказываем технику у производителя, организуем доставку",
      days: "7-10 дней",
    },
    {
      step: "4",
      title: "Доставка в РФ",
      description: "Транспортировка морем/ЖД, таможенное оформление",
      days: "20-30 дней",
    },
    {
      step: "5",
      title: "Получение",
      description: "Вы получаете технику с полным пакетом документов",
      days: "1 день",
    },
  ];

  const trustFactors = [
    { icon: "Building2", value: "2000+ м²", label: "Собственный склад" },
    { icon: "Users", value: "5 лет", label: "На рынке" },
    { icon: "Car", value: "500+", label: "Довольных клиентов" },
    { icon: "Award", value: "100%", label: "Легальный ввоз" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Car" size={32} className="text-accent" />
            <div>
              <h1 className="text-2xl font-bold">AVM Motors</h1>
              <p className="text-xs text-primary-foreground/80">Авто и мото из КНР</p>
            </div>
          </div>
          <Button
            variant="secondary"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Icon name="Phone" size={18} className="mr-2" />
            Оставить заявку
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNi0yLjY4NiA2LTYtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYtMi42ODYgNi02IDYiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground text-sm px-4 py-2">
              Официальный импорт из Китая
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Авто и мото из КНР
              <br />
              <span className="text-accent">под ключ</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Новые и б/у автомобили, эндуро и туристические мотоциклы
              <br />с гарантией, кредитом и доставкой
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
                onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Icon name="Search" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent">30-45</div>
                <div className="text-sm text-primary-foreground/80">дней доставка</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">от 0%</div>
                <div className="text-sm text-primary-foreground/80">кредит</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">3 года</div>
                <div className="text-sm text-primary-foreground/80">гарантия</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-primary-foreground/80">легально</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные модели</h2>
            <p className="text-muted-foreground text-lg">
              Более 40 моделей автомобилей и мотоциклов в наличии и под заказ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {vehicle.type}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{vehicle.name}</h3>
                  <p className="text-2xl font-bold text-accent mb-4">{vehicle.price}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Grid" size={20} className="mr-2" />
              Смотреть весь каталог
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-muted-foreground text-lg">Почему выбирают AVM Motors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow border-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Icon name={benefit.icon} size={32} className="text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как происходит доставка</h2>
            <p className="text-muted-foreground text-lg">
              Полная прозрачность процесса от заявки до получения техники
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-accent/30 -translate-x-1/2"></div>
              {deliverySteps.map((step, index) => (
                <div key={index} className="relative mb-8 md:mb-12 last:mb-0">
                  <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                    <div className="flex-1"></div>
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-2xl z-10 shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    <Card className="flex-1 p-6 hover:shadow-xl transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-xl">{step.title}</h3>
                        <Badge variant="secondary" className="bg-accent/10 text-accent">
                          {step.days}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img
                  src="https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/04e59c94-5da9-4269-abac-bc95ac9576a5.jpg"
                  alt="Доставка техники"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Надёжная логистика</h3>
                  <p className="text-white/90">
                    Работаем с проверенными транспортными компаниями, полное страхование груза
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Условия покупки</h2>
            <p className="text-primary-foreground/90 text-lg">Гибкие варианты оплаты под любой бюджет</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card text-card-foreground p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="Banknote" size={24} className="text-accent" />
                </div>
                <h3 className="font-bold text-xl">Наличие</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Скидка до 5%</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Быстрое оформление</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Полный пакет документов</span>
                </li>
              </ul>
            </Card>
            <Card className="bg-card text-card-foreground p-8 border-4 border-accent relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                Популярно
              </Badge>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="CreditCard" size={24} className="text-accent" />
                </div>
                <h3 className="font-bold text-xl">Кредит</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>От 0% годовых</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Одобрение за 15 минут</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Первый взнос от 10%</span>
                </li>
              </ul>
            </Card>
            <Card className="bg-card text-card-foreground p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="Receipt" size={24} className="text-accent" />
                </div>
                <h3 className="font-bold text-xl">Лизинг</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Для юридических лиц</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Выгодные условия</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>Налоговые преимущества</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Нам доверяют</h2>
            <p className="text-muted-foreground text-lg">Цифры, которые говорят сами за себя</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {trustFactors.map((factor, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-4">
                  <Icon name={factor.icon} size={36} className="text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{factor.value}</div>
                <div className="text-muted-foreground">{factor.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Оставьте заявку</h2>
                <p className="text-muted-foreground text-lg">
                  Наш менеджер свяжется с вами в течение 15 минут и ответит на все вопросы
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Иван Иванов"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Номер телефона *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Какая модель вас интересует? Расскажите о ваших пожеланиях..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Car" size={32} className="text-accent" />
                <div>
                  <h3 className="text-xl font-bold">AVM Motors</h3>
                  <p className="text-xs text-primary-foreground/80">Авто и мото из КНР</p>
                </div>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Официальный импорт автомобилей и мотоциклов из Китая с гарантией и полным сопровождением
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} className="text-accent" />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} className="text-accent" />
                  <span>info@avmmotors.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} className="text-accent" />
                  <span>г. Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <div className="space-y-2 text-sm">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
                <div className="flex gap-3 mt-4">
                  <Button size="icon" variant="outline" className="border-primary-foreground/30 hover:bg-accent hover:border-accent">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="border-primary-foreground/30 hover:bg-accent hover:border-accent">
                    <Icon name="Phone" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
            <p>© 2024 AVM Motors. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
