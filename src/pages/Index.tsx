import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
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
      title: "Заявка отправлена",
      description: "Наш специалист свяжется с вами в ближайшее время",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const vehicles = [
    {
      name: "HONGQI E-HS9",
      type: "Премиум SUV",
      price: "от 6 850 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["600 л.с.", "0-100 за 4.9с", "Electric"],
    },
    {
      name: "NIO ET7",
      type: "Седан Executive",
      price: "от 4 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["480 л.с.", "1000 км запас хода", "AWD"],
    },
    {
      name: "CF MOTO 800MT",
      type: "Adventure Touring",
      price: "от 890 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/49624ed1-78a6-4a4a-ae22-579718390d6a.jpg",
      specs: ["95 л.с.", "799cc", "21L бак"],
    },
    {
      name: "QJMOTOR SRV 800",
      type: "Sport Touring",
      price: "от 1 150 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/49624ed1-78a6-4a4a-ae22-579718390d6a.jpg",
      specs: ["76 л.с.", "754cc", "KYB подвеска"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-16">
              <img 
                src="https://cdn.poehali.dev/files/motors (370 x 370 пикс.).png" 
                alt="AVM Motors" 
                className="h-8 brightness-0 invert"
              />
              <nav className="hidden lg:flex items-center gap-10">
                <a href="#vehicles" className="text-sm tracking-wider uppercase text-muted-foreground hover:text-accent transition-colors">Коллекция</a>
                <a href="#services" className="text-sm tracking-wider uppercase text-muted-foreground hover:text-accent transition-colors">Услуги</a>
                <a href="#concierge" className="text-sm tracking-wider uppercase text-muted-foreground hover:text-accent transition-colors">Консьерж</a>
              </nav>
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:+79991234567" className="hidden md:block text-sm tracking-wider hover:text-accent transition-colors">
                +7 999 123 45 67
              </a>
              <Button 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="w-full px-6 lg:px-12 relative py-32">
          <div className="relative">
            <div className="mb-8 flex items-center gap-3 relative z-30">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-sm tracking-[0.3em] uppercase text-accent">Эксклюзивный импорт</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.95] tracking-tight relative z-30 max-w-4xl">
              АВТОМОБИЛИ<br />
              <span className="accent-title text-accent">премиум-класса</span><br />
              ИЗ КИТАЯ
            </h1>
            
            <div className="absolute top-0 right-0 lg:-right-32 w-[800px] lg:w-[1200px] h-full pointer-events-none z-20">
              <img 
                src="https://cdn.poehali.dev/files/Group_117.png"
                alt="Premium Car"
                className="w-full h-full object-contain drop-shadow-[0_20px_80px_rgba(229,87,68,0.3)]"
              />
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed relative z-30">
              Авто из Китая легально под ключ. 30-60 дней без переплат. Ваша мечта — наша экспертиза.
            </p>
            <div className="flex flex-wrap gap-6 relative z-30">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-lg px-10 h-14"
                onClick={() => document.getElementById("vehicles")?.scrollIntoView({ behavior: "smooth" })}
              >
                Смотреть коллекцию
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 text-lg px-10 h-14 hover:bg-accent hover:border-accent hover:text-accent-foreground"
              >
                Консультация эксперта
              </Button>
            </div>
            <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl relative z-30">
              <div className="border-l-2 border-accent pl-6">
                <div className="text-4xl font-bold mb-2">30%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Экономия</div>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <div className="text-4xl font-bold mb-2">45</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Дней доставка</div>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vehicles" className="py-32 relative">
        <div className="w-full px-6 lg:px-12">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-sm tracking-[0.3em] uppercase text-accent">Избранное</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Премиальная коллекция</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Эксклюзивные модели с индивидуальными характеристиками
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden bg-card border-border hover:border-accent transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-[400px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <Badge className="absolute top-6 right-6 z-20 bg-accent/90 backdrop-blur-sm text-accent-foreground border-0 px-4 py-2">
                    {vehicle.type}
                  </Badge>
                </div>
                <div className="p-8">
                  <h3 className="accent-title text-2xl mb-4">{vehicle.name}</h3>
                  <div className="flex gap-6 mb-6 text-sm text-muted-foreground">
                    {vehicle.specs.map((spec, idx) => (
                      <span key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full"></div>
                        {spec}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Стоимость</div>
                      <div className="text-3xl font-bold">{vehicle.price}</div>
                    </div>
                    <Button variant="ghost" className="text-accent hover:text-accent hover:bg-accent/10">
                      Подробнее
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-32 bg-secondary/30">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-sm tracking-[0.3em] uppercase text-accent">Сервис</span>
              <div className="h-px w-12 bg-accent"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Полный цикл обслуживания</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Search", title: "Индивидуальный подбор", desc: "Эксперт найдёт идеальный вариант под ваши критерии" },
              { icon: "Shield", title: "Юридическая защита", desc: "Полная проверка документов и юридическая чистота" },
              { icon: "Truck", title: "VIP доставка", desc: "Безопасная транспортировка с полным страхованием" },
              { icon: "Wrench", title: "Постпродажный сервис", desc: "Техническая поддержка и обслуживание" },
            ].map((service, idx) => (
              <Card key={idx} className="p-8 bg-card border-border hover:border-accent transition-all group">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon name={service.icon} size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-sm tracking-[0.3em] uppercase text-accent">Преимущества</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">Почему AVM Motors</h2>
              <div className="space-y-8">
                {[
                  { title: "Прямые поставки", desc: "Работаем напрямую с производителями, без посредников" },
                  { title: "Гарантия лучшей цены", desc: "Экономия до 30% по сравнению с рынком РФ" },
                  { title: "Полная прозрачность", desc: "Отслеживайте каждый этап сделки в реальном времени" },
                  { title: "Эксклюзивный сервис", desc: "Персональный менеджер на всех этапах" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon name="Check" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
              <img 
                src="https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg"
                alt="Premium service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-secondary/30">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <Card className="p-12 bg-card border-accent/20">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="h-px w-12 bg-accent"></div>
                  <span className="text-sm tracking-[0.3em] uppercase text-accent">Контакт</span>
                  <div className="h-px w-12 bg-accent"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Оставьте заявку</h2>
                <p className="text-lg text-muted-foreground">
                  Эксперт свяжется с вами для персональной консультации
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-14 bg-background border-border focus:border-accent"
                />
                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-14 bg-background border-border focus:border-accent"
                />
                <Textarea
                  placeholder="Расскажите о ваших предпочтениях..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border focus:border-accent resize-none"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 h-14 text-lg"
                >
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Конфиденциальность гарантируется
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-16">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1">
              <img 
                src="https://cdn.poehali.dev/files/motors (370 x 370 пикс.).png" 
                alt="AVM Motors" 
                className="h-10 mb-6 brightness-0 invert"
              />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Эксклюзивный импорт премиальной автотехники из Китая
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 tracking-wider uppercase text-sm">Коллекция</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Автомобили</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Мотоциклы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Эксклюзив</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 tracking-wider uppercase text-sm">Компания</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Услуги</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 tracking-wider uppercase text-sm">Контакты</h4>
              <div className="space-y-3 text-sm">
                <a href="tel:+79991234567" className="block text-muted-foreground hover:text-accent transition-colors">
                  +7 999 123 45 67
                </a>
                <a href="mailto:info@avmmotors.ru" className="block text-muted-foreground hover:text-accent transition-colors">
                  info@avmmotors.ru
                </a>
                <p className="text-muted-foreground">Пн-Вс: 10:00 - 22:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2024 AVM Motors. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;