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
  const [activeTab, setActiveTab] = useState('Видеообзоры');
  const [vehicleRegion, setVehicleRegion] = useState('Топ продаж');
  const [workflowTab, setWorkflowTab] = useState('Этапы работ');
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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

  const vehiclesChina = [
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

  const vehiclesEurope = [
    {
      name: "BMW X5 M50i",
      type: "Премиум SUV",
      price: "от 8 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["530 л.с.", "0-100 за 4.3с", "AWD"],
    },
    {
      name: "Mercedes-Benz S-Class",
      type: "Седан Люкс",
      price: "от 9 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["367 л.с.", "Hybrid", "4MATIC"],
    },
  ];

  const vehiclesTop = [
    {
      name: "Zeekr 001",
      type: "Хэтчбек",
      price: "от 5 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["544 л.с.", "0-100 за 3.8с", "Electric"],
    },
    {
      name: "BYD Han",
      type: "Седан",
      price: "от 3 900 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["517 л.с.", "605 км запас", "AWD"],
    },
    {
      name: "Li Auto L9",
      type: "SUV",
      price: "от 6 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["449 л.с.", "EREV", "7 мест"],
    },
    {
      name: "Audi Q7",
      type: "SUV",
      price: "от 7 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["340 л.с.", "3.0 TFSI", "Quattro"],
    },
  ];

  const vehicles = 
    vehicleRegion === 'Китай' ? vehiclesChina : 
    vehicleRegion === 'Европа' ? vehiclesEurope : 
    vehiclesTop;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between gap-6 h-20">
            <div className="flex items-center gap-6">
              <img 
                src="https://cdn.poehali.dev/files/AVM_logo_horizontal_mono.png" 
                alt="AVM Motors" 
                className="h-8 flex-shrink-0"
              />
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
              >
                <Icon name="Menu" size={20} className="text-accent" />
                <span className="text-sm font-medium">Меню</span>
              </button>
            </div>
            
            <div className="hidden md:flex flex-1 max-w-xl">
              <div className="relative w-full">
                <Icon name="Car" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Марка или параметры"
                  className="h-11 pl-12 pr-12 bg-background border-border focus:border-accent rounded-lg"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-md bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors">
                  <Icon name="Search" size={18} className="text-accent" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className="md:hidden w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Icon name="Search" size={18} className="text-accent" />
              </button>
              
              <div className="hidden lg:flex flex-col items-center text-xs text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                <Icon name="MapPin" size={20} className="mb-1" />
                <span>Быстрый подбор</span>
              </div>
              
              <div className="hidden lg:flex flex-col items-center text-xs text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                <Icon name="Package" size={20} className="mb-1" />
                <span>Доставка в РФ</span>
              </div>
              
              <div className="hidden lg:flex flex-col items-center text-xs text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                <Icon name="Heart" size={20} className="mb-1" />
                <span>Избранное</span>
              </div>
              
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 h-11 rounded-full font-medium"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Связаться
              </Button>
            </div>
          </div>
          
          {searchOpen && (
            <div className="py-4 border-t border-border/50 animate-in slide-in-from-top-2 duration-200 md:hidden">
              <div className="relative">
                <Icon name="Car" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Марка или параметры"
                  className="h-12 pl-12 pr-4 bg-background border-border focus:border-accent"
                />
              </div>
            </div>
          )}
        </div>
        
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 border-t border-border/50 bg-background shadow-2xl animate-in slide-in-from-top-4 duration-300 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="w-full px-6 lg:px-12 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl">
                <div>
                  <h3 className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-4">Каталог</h3>
                  <div className="space-y-2">
                    <a href="#vehicles" onClick={() => setVehicleRegion('Китай')} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="text-2xl">🇨🇳</span>
                        <span className="text-sm font-medium">Китай - новые авто</span>
                      </div>
                      <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                    </a>
                    <a href="#vehicles" onClick={() => setVehicleRegion('Европа')} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                      <div className="flex items-center gap-3 flex-1">
                        <span className="text-2xl">🇪🇺</span>
                        <span className="text-sm font-medium">Европа - авто с пробегом</span>
                      </div>
                      <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                    </a>
                  </div>
                  
                  <div className="mt-6 p-4 rounded-lg bg-secondary/30 border border-border">
                    <h4 className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-3">Доставка</h4>
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 rounded-md text-sm font-medium bg-accent text-accent-foreground">
                        в РБ
                      </button>
                      <button className="flex-1 px-4 py-2 rounded-md text-sm font-medium bg-background hover:bg-accent/10 transition-colors">
                        в РФ
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 rounded-lg bg-secondary/30 border border-border">
                    <h4 className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-3">Цены</h4>
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 rounded-md text-sm font-medium bg-accent text-accent-foreground">
                        USD
                      </button>
                      <button className="flex-1 px-3 py-2 rounded-md text-sm font-medium bg-background hover:bg-accent/10 transition-colors">
                        RUB
                      </button>
                      <button className="flex-1 px-3 py-2 rounded-md text-sm font-medium bg-background hover:bg-accent/10 transition-colors">
                        BYN
                      </button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-4">Информация</h3>
                  <div className="space-y-2">
                    <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                      <div className="flex items-center gap-3">
                        <Icon name="DollarSign" size={20} className="text-accent" />
                        <span className="text-sm font-medium">Тарифы и цены</span>
                      </div>
                      <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                    </a>
                    <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                      <div className="flex items-center gap-3">
                        <Icon name="FileText" size={20} className="text-accent" />
                        <span className="text-sm font-medium">Блог</span>
                      </div>
                      <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                    </a>
                    <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                      <div className="flex items-center gap-3">
                        <Icon name="Star" size={20} className="text-accent" />
                        <span className="text-sm font-medium">Отзывы</span>
                      </div>
                      <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                    </a>
                    <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                      <div className="flex items-center gap-3">
                        <Icon name="Calculator" size={20} className="text-accent" />
                        <span className="text-sm font-medium">Калькулятор</span>
                      </div>
                      <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-4">Компания</h3>
                  <div className="space-y-2">
                    <a href="#services" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                      <div className="flex items-center gap-3">
                        <Icon name="Info" size={20} className="text-accent" />
                        <span className="text-sm font-medium">О нас</span>
                      </div>
                      <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                    </a>
                    <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                      <div className="flex items-center gap-3">
                        <Icon name="Play" size={20} className="text-accent" />
                        <span className="text-sm font-medium">Обзоры</span>
                      </div>
                      <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                    </a>
                    <a href="#contact" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                      <div className="flex items-center gap-3">
                        <Icon name="Phone" size={20} className="text-accent" />
                        <span className="text-sm font-medium">Позвонить нам</span>
                      </div>
                      <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                    </a>
                    <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-colors group">
                      <div className="flex items-center gap-3">
                        <Icon name="MapPin" size={20} className="text-accent" />
                        <span className="text-sm font-medium">Адреса и офисы</span>
                      </div>
                      <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-accent" />
                    </a>
                  </div>
                  
                  <div className="mt-6 relative overflow-hidden rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20">
                    <div className="p-6 relative z-10">
                      <h4 className="text-lg font-bold mb-2">Подберем 10 свежих предложений бесплатно</h4>
                      <Button 
                        size="sm"
                        className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Получить подборку
                      </Button>
                    </div>
                    <div className="absolute -right-4 -bottom-4 text-8xl opacity-20">🚗</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-96 bg-gradient-to-b from-accent/40 to-transparent rotate-12"></div>
        <div className="absolute top-1/2 right-[30%] w-1 h-64 bg-gradient-to-b from-accent/60 to-transparent -rotate-6"></div>
        <div className="absolute top-1/4 right-[20%] w-32 h-32 border border-accent/20 rotate-45"></div>
        <div className="absolute top-[60%] right-[35%] w-24 h-24 border border-accent/30 rotate-12"></div>
        
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
            
            <div className="absolute top-0 -right-20 lg:-right-40 w-[900px] lg:w-[1400px] h-full pointer-events-none z-20">
              <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-px h-48 bg-gradient-to-b from-transparent via-accent/60 to-transparent"></div>
                <div className="absolute top-1/3 right-1/3 w-px h-64 bg-gradient-to-b from-transparent via-accent/40 to-transparent"></div>
                <div className="absolute top-1/2 right-[40%] w-16 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
              </div>
              <img 
                src="https://cdn.poehali.dev/files/Group_117.png"
                alt="Premium Car"
                className="w-full h-full object-contain drop-shadow-[0_30px_100px_rgba(229,87,68,0.4)] animate-in slide-in-from-right-full duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-accent/5 to-transparent"></div>
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
              <span className="text-sm tracking-[0.3em] uppercase text-accent">Каталог</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Наша коллекция</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Автомобили разных классов и марок из Китая и Европы
            </p>
            
            <div className="flex gap-4 border-b border-border">
              {['Топ продаж', 'Китай', 'Европа'].map((region) => (
                <button
                  key={region}
                  onClick={() => setVehicleRegion(region)}
                  className={`pb-4 px-8 text-lg font-medium transition-all relative ${
                    vehicleRegion === region 
                      ? 'text-accent' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {region}
                  {vehicleRegion === region && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden bg-card border-border hover:border-accent transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-[240px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <Badge className="absolute top-4 right-4 z-20 bg-accent/90 backdrop-blur-sm text-accent-foreground border-0 px-3 py-1 text-xs">
                    {vehicle.type}
                  </Badge>
                  <button className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
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
          
          <div className="mt-12 text-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 h-14 text-lg"
              onClick={() => window.location.href = '#vehicles'}
            >
              Перейти в каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full"></div>
        <div className="w-full px-6 lg:px-12">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-sm tracking-[0.3em] uppercase text-accent">Экспертиза</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">Обзоры</h2>
          </div>

          <div className="flex flex-wrap gap-4 mb-12 border-b border-border">
            {['Видеообзоры', 'Отзывы клиентов', 'Блог'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-6 text-lg font-medium transition-all relative ${
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

          {activeTab === 'Видеообзоры' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Обзор Zeekr 001', time: '12:45', views: '24K' },
                { title: 'Тест-драйв BYD Han', time: '15:20', views: '31K' },
                { title: 'NIO ES6 в России', time: '10:15', views: '18K' },
              ].map((video, idx) => (
                <Card key={idx} className="group overflow-hidden bg-card border-border hover:border-accent transition-all cursor-pointer">
                  <div className="relative h-[240px] bg-secondary/50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                    <div className="w-16 h-16 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform z-20">
                      <Icon name="Play" size={28} className="text-accent-foreground ml-1" />
                    </div>
                    <Badge className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-sm text-foreground border-0">
                      {video.time}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{video.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Icon name="Eye" size={16} />
                        {video.views}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'Отзывы клиентов' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Александр М.', car: 'Zeekr 001', text: 'Невероятный сервис! Получил автомобиль мечты за 42 дня. Всё прозрачно и профессионально.', rating: 5 },
                { name: 'Елена К.', car: 'BYD Han', text: 'Команда AVM Motors сопровождала на каждом этапе. Экономия составила более 2 млн рублей!', rating: 5 },
                { name: 'Дмитрий Р.', car: 'NIO ES6', text: 'Индивидуальный подход и внимание к деталям. Рекомендую всем, кто ценит качество.', rating: 5 },
              ].map((review, idx) => (
                <Card key={idx} className="p-8 bg-card border-border hover:border-accent transition-all">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 leading-relaxed text-muted-foreground">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="User" size={24} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-bold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.car}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'Блог' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Как выбрать электромобиль из Китая', date: '15 дек 2024', category: 'Гид покупателя', excerpt: 'Подробное руководство по выбору идеального электромобиля с учётом технических характеристик и личных предпочтений.' },
                { title: 'Топ-5 премиум моделей 2024', date: '10 дек 2024', category: 'Обзоры', excerpt: 'Эксклюзивная подборка самых востребованных премиальных автомобилей китайского производства в этом году.' },
                { title: 'Юридические аспекты импорта', date: '5 дек 2024', category: 'Юридическая база', excerpt: 'Всё о легальном ввозе автомобилей из Китая: документы, сертификация и регистрация в России.' },
              ].map((post, idx) => (
                <Card key={idx} className="group overflow-hidden bg-card border-border hover:border-accent transition-all cursor-pointer">
                  <div className="relative h-[280px] bg-gradient-to-br from-accent/20 to-secondary/50"></div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-accent/10 text-accent border-0 hover:bg-accent/20">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
                    <Button variant="ghost" className="text-accent hover:text-accent hover:bg-accent/10 p-0">
                      Читать далее
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
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

      <section className="py-32 bg-secondary/30">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-sm tracking-[0.3em] uppercase text-accent">Процесс</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">Как мы работаем</h2>
            </div>

            <div className="flex gap-4 mb-12 border-b border-border">
              {['Этапы работ', 'Вопрос-ответ'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setWorkflowTab(tab)}
                  className={`pb-4 px-8 text-lg font-medium transition-all relative ${
                    workflowTab === tab 
                      ? 'text-accent' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                  {workflowTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
                  )}
                </button>
              ))}
            </div>

            {workflowTab === 'Этапы работ' && (
              <div className="space-y-4">
                {[
                  { icon: 'FileText', title: 'Договор на услуги', desc: 'Заключаем официальный договор с прозрачными условиями и фиксированной стоимостью услуг' },
                  { icon: 'Search', title: 'Подбор автомобиля', desc: 'Наш эксперт подбирает идеальный вариант согласно вашим требованиям и бюджету' },
                  { icon: 'CreditCard', title: 'Подбор кредита / лизинга (опция)', desc: 'Помогаем с оформлением выгодного финансирования через проверенные банки' },
                  { icon: 'Banknote', title: 'Покупка и оплата', desc: 'Безопасная сделка с полным юридическим сопровождением и гарантией' },
                  { icon: 'Truck', title: 'Доставка автомобиля', desc: 'Логистика и таможенное оформление под ключ за 30-60 дней' },
                  { icon: 'ClipboardCheck', title: 'Растаможка и учет', desc: 'Полное оформление документов, сертификация и постановка на учёт в ГИБДД' },
                  { icon: 'Wrench', title: 'Помощь в ремонте (опция)', desc: 'Сервисное обслуживание и поддержка после покупки' },
                ].map((step, idx) => (
                  <Card 
                    key={idx} 
                    className="bg-background border-border hover:border-accent transition-all cursor-pointer group"
                    onClick={() => setOpenStep(openStep === idx ? null : idx)}
                  >
                    <div className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                          <Icon name={step.icon} size={28} className="text-accent" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Шаг {idx + 1}.</div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                      </div>
                      <Icon 
                        name="ChevronDown" 
                        size={24} 
                        className={`text-accent transition-transform flex-shrink-0 ${openStep === idx ? 'rotate-180' : ''}`}
                      />
                    </div>
                    {openStep === idx && (
                      <div className="px-6 pb-6">
                        <p className="text-lg text-muted-foreground leading-relaxed ml-[88px]">
                          {step.desc}
                        </p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            )}

            {workflowTab === 'Вопрос-ответ' && (
              <div className="space-y-4">
                {[
                  { q: 'Сколько времени занимает доставка?', a: 'В среднем 30-60 дней от момента заказа до получения автомобиля в России с полным пакетом документов.' },
                  { q: 'Какие гарантии вы предоставляете?', a: 'Официальный договор, юридическое сопровождение на всех этапах, страхование при доставке и гарантия производителя.' },
                  { q: 'Можно ли получить кредит на автомобиль?', a: 'Да, мы работаем с ведущими банками и поможем подобрать оптимальные условия кредитования или лизинга.' },
                  { q: 'Нужно ли мне самому заниматься растаможкой?', a: 'Нет, мы берём на себя все вопросы таможенного оформления, сертификации и постановки на учёт.' },
                  { q: 'Какая экономия по сравнению с покупкой в России?', a: 'В среднем экономия составляет 25-35% от рыночной цены аналогичного автомобиля в РФ.' },
                ].map((item, idx) => (
                  <Card 
                    key={idx} 
                    className="bg-background border-border hover:border-accent transition-all cursor-pointer"
                    onClick={() => setOpenStep(openStep === idx ? null : idx)}
                  >
                    <div className="p-6 flex items-center justify-between">
                      <h3 className="text-xl font-bold pr-4">{item.q}</h3>
                      <Icon 
                        name="ChevronDown" 
                        size={24} 
                        className={`text-accent transition-transform flex-shrink-0 ${openStep === idx ? 'rotate-180' : ''}`}
                      />
                    </div>
                    {openStep === idx && (
                      <div className="px-6 pb-6">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            )}
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

      <footer className="relative bg-gradient-to-b from-background to-secondary/30 border-t border-border py-20">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full"></div>
        <div className="w-full px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-4">
              <img 
                src="https://cdn.poehali.dev/files/AVM_logo_horizontal_mono.png" 
                alt="AVM Motors" 
                className="h-12 mb-6"
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Эксклюзивный импорт премиальных автомобилей из Китая и Европы
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group">
                  <Icon name="Instagram" size={22} className="text-accent" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group">
                  <Icon name="MessageCircle" size={22} className="text-accent" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors group">
                  <Icon name="Phone" size={22} className="text-accent" />
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold mb-6 tracking-[0.2em] uppercase">Каталог</h4>
              <ul className="space-y-4">
                <li><a href="#vehicles" className="text-muted-foreground hover:text-accent transition-colors">Топ продаж</a></li>
                <li><a href="#vehicles" className="text-muted-foreground hover:text-accent transition-colors">Китай</a></li>
                <li><a href="#vehicles" className="text-muted-foreground hover:text-accent transition-colors">Европа</a></li>
              </ul>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold mb-6 tracking-[0.2em] uppercase">Компания</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-muted-foreground hover:text-accent transition-colors">Услуги</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Блог</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div className="lg:col-span-4">
              <h4 className="text-sm font-bold mb-6 tracking-[0.2em] uppercase">Контакты</h4>
              <div className="space-y-4">
                <a href="tel:+79991234567" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon name="Phone" size={18} className="text-accent" />
                  </div>
                  <span className="text-lg">+7 999 123 45 67</span>
                </a>
                <a href="mailto:info@avmmotors.ru" className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon name="Mail" size={18} className="text-accent" />
                  </div>
                  <span className="text-lg">info@avmmotors.ru</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="Clock" size={18} className="text-accent" />
                  </div>
                  <span>Пн-Вс: 10:00 - 22:00</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-muted-foreground">© 2024 AVM Motors. Все права защищены.</p>
              <div className="flex gap-8 text-sm text-muted-foreground">
                <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-accent transition-colors">Условия использования</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;