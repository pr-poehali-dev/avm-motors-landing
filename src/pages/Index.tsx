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

  const categories = [
    { title: "Китай - новые авто", count: "40+ моделей" },
    { title: "Китай - авто с пробегом", count: "100+ вариантов" },
    { title: "Мотоциклы", count: "30+ моделей" },
  ];

  const vehicles = [
    {
      name: "Enduro X-500",
      type: "Эндуро",
      price: "от 450 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/422b718d-0e06-4591-9b81-c98893202986.jpg",
      features: ["500cc", "Новый", "В наличии"],
      year: "2024",
      mileage: "0 км",
    },
    {
      name: "Sport Touring ST-650",
      type: "Туризм",
      price: "от 580 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/422b718d-0e06-4591-9b81-c98893202986.jpg",
      features: ["650cc", "Новый", "Под заказ"],
      year: "2024",
      mileage: "0 км",
    },
    {
      name: "Urban SUV X7",
      type: "Кроссовер",
      price: "от 2 850 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/155572cd-4de4-4478-b50e-f695becf8e34.jpg",
      features: ["1.5T", "Новый", "В наличии"],
      year: "2024",
      mileage: "0 км",
    },
    {
      name: "Electric EV-Pro",
      type: "Электромобиль",
      price: "от 3 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/155572cd-4de4-4478-b50e-f695becf8e34.jpg",
      features: ["Electric", "Новый", "Под заказ"],
      year: "2024",
      mileage: "0 км",
    },
  ];

  const services = [
    {
      icon: "Car",
      title: "Подбор авто",
      description: "Поможем выбрать идеальный автомобиль под ваши требования и бюджет",
    },
    {
      icon: "FileCheck",
      title: "Проверка перед покупкой",
      description: "Полная диагностика технического состояния перед отправкой",
    },
    {
      icon: "Ship",
      title: "Доставка",
      description: "Организуем доставку морем или ЖД с полным страхованием груза",
    },
    {
      icon: "Shield",
      title: "Таможенное оформление",
      description: "Берем на себя все вопросы растаможки и документов",
    },
  ];

  const advantages = [
    { icon: "Percent", title: "Экономия до 30%", description: "По сравнению с покупкой в РФ" },
    { icon: "Clock", title: "Сроки 30-45 дней", description: "От заказа до получения" },
    { icon: "BadgeCheck", title: "100% легально", description: "Официальный ввоз с документами" },
    { icon: "Headphones", title: "Поддержка 24/7", description: "На всех этапах сделки" },
  ];

  const reviews = [
    {
      name: "Алексей М.",
      rating: 5,
      text: "Заказывал кроссовер из Китая. Все прошло отлично, сэкономил около 800 тысяч. Менеджеры постоянно на связи.",
      date: "15.11.2024",
    },
    {
      name: "Ирина К.",
      rating: 5,
      text: "Купила эндуро через AVM Motors. Привезли точно в срок, мотоцикл в идеальном состоянии!",
      date: "28.10.2024",
    },
    {
      name: "Дмитрий П.",
      rating: 5,
      text: "Профессиональный подход, прозрачные условия. Рекомендую всем, кто хочет качественную технику по адекватной цене.",
      date: "05.10.2024",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <img 
                  src="https://cdn.poehali.dev/files/motors (370 x 370 пикс.).png" 
                  alt="AVM Motors" 
                  className="h-10"
                />
                <nav className="hidden md:flex gap-6">
                  <a href="#catalog" className="text-sm hover:text-accent transition-colors">Каталог</a>
                  <a href="#services" className="text-sm hover:text-accent transition-colors">Услуги</a>
                  <a href="#about" className="text-sm hover:text-accent transition-colors">О нас</a>
                  <a href="#reviews" className="text-sm hover:text-accent transition-colors">Отзывы</a>
                  <a href="#contacts" className="text-sm hover:text-accent transition-colors">Контакты</a>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden lg:flex flex-col items-end">
                  <a href="tel:+79991234567" className="text-sm font-semibold hover:text-accent">+7 (999) 123-45-67</a>
                  <span className="text-xs text-muted-foreground">Ежедневно с 9:00 до 21:00</span>
                </div>
                <Button 
                  className="bg-accent hover:bg-accent/90"
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Оставить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-accent text-accent-foreground">Официальный импорт из Китая</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Автомобили и мотоциклы<br />из КНР под заказ
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Экономия до 30% • Гарантия • Полное сопровождение
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}>
                <Icon name="Search" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((cat, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{cat.title}</h3>
                  <p className="text-muted-foreground text-sm">{cat.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные модели</h2>
              <p className="text-muted-foreground text-lg">Актуальный каталог автомобилей и мотоциклов</p>
            </div>
            <Button variant="outline" size="lg">
              Весь каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-56 overflow-hidden">
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
                  <h3 className="accent-title text-lg mb-3">{vehicle.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex justify-between">
                      <span>Год:</span>
                      <span className="font-semibold text-foreground">{vehicle.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Пробег:</span>
                      <span className="font-semibold text-foreground">{vehicle.mileage}</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-accent mb-4">{vehicle.price}</p>
                  <Button className="w-full" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">Полный цикл от подбора до получения техники</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Icon name={service.icon} size={32} className="text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {advantages.map((adv, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-4">
                  <Icon name={adv.icon} size={36} className="text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-2">{adv.title}</h3>
                <p className="text-muted-foreground">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Как мы работаем</h2>
            <p className="text-center text-primary-foreground/90 mb-12 text-lg">
              Простой и прозрачный процесс покупки
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { num: "01", title: "Заявка", desc: "Оставляете заявку на сайте" },
                { num: "02", title: "Подбор", desc: "Подбираем варианты под ваш запрос" },
                { num: "03", title: "Договор", desc: "Заключаем договор и вносите аванс" },
                { num: "04", title: "Доставка", desc: "Организуем доставку и растаможку" },
                { num: "05", title: "Получение", desc: "Получаете авто с документами" },
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold">
                    {step.num}
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-primary-foreground/80">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground text-lg">Нам доверяют сотни довольных клиентов</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{review.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Оставьте заявку</h2>
                <p className="text-muted-foreground text-lg">
                  Ответим на все вопросы и поможем с подбором техники
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
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

      <footer id="contacts" className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/motors (370 x 370 пикс.).png" 
                alt="AVM Motors" 
                className="h-12 mb-4 brightness-0 invert"
              />
              <p className="text-sm text-primary-foreground/80">
                Официальный импорт автомобилей и мотоциклов из Китая
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">Новые авто</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Авто с пробегом</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Мотоциклы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} className="text-accent" />
                  <a href="tel:+79991234567" className="hover:text-accent transition-colors">+7 (999) 123-45-67</a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} className="text-accent" />
                  <a href="mailto:info@avmmotors.ru" className="hover:text-accent transition-colors">info@avmmotors.ru</a>
                </div>
                <p className="text-primary-foreground/80">Пн-Вс: 9:00 - 21:00</p>
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
