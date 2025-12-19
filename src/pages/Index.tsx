import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('Видеообзоры');
  const [vehicleRegion, setVehicleRegion] = useState('Топ продаж');
  const [workflowTab, setWorkflowTab] = useState('Этапы работ');
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [quizStep, setQuizStep] = useState(1);
  const [quizData, setQuizData] = useState({
    carModel: '',
    budget: '',
    name: '',
    phone: '',
  });

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Мы подберём для вас идеальный автомобиль и свяжемся в течение часа",
    });
    setQuizStep(1);
    setQuizData({ carModel: '', budget: '', name: '', phone: '' });
  };

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
    {
      name: "Li Auto L7",
      type: "Премиум SUV",
      price: "от 5 900 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["449 л.с.", "EREV", "5 мест"],
    },
    {
      name: "Zeekr 009",
      type: "Минивэн",
      price: "от 6 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["544 л.с.", "Electric", "7 мест"],
    },
    {
      name: "Xpeng G9",
      type: "SUV",
      price: "от 4 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["551 л.с.", "702 км запас", "AWD"],
    },
    {
      name: "Geely Monjaro",
      type: "Кроссовер",
      price: "от 3 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["238 л.с.", "2.0T", "AWD"],
    },
    {
      name: "Changan UNI-K",
      type: "SUV",
      price: "от 2 900 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["233 л.с.", "2.0T", "4WD"],
    },
    {
      name: "Tank 500",
      type: "Внедорожник",
      price: "от 5 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["354 л.с.", "3.0T", "Рама"],
    },
    {
      name: "Avatr 11",
      type: "SUV Coupe",
      price: "от 4 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["578 л.с.", "Electric", "AWD"],
    },
    {
      name: "IM Motors LS7",
      type: "Седан",
      price: "от 5 100 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["578 л.с.", "Electric", "RWD"],
    },
    {
      name: "Voyah Free",
      type: "SUV",
      price: "от 4 300 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["510 л.с.", "PHEV", "AWD"],
    },
    {
      name: "Haval Dargo X",
      type: "Кроссовер",
      price: "от 2 700 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["211 л.с.", "2.0T", "4WD"],
    },
    {
      name: "GAC Trumpchi GS8",
      type: "SUV",
      price: "от 3 400 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["252 л.с.", "2.0T", "7 мест"],
    },
    {
      name: "Dongfeng Mengshi M-Hero 917",
      type: "Внедорожник",
      price: "от 8 900 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["816 л.с.", "PHEV", "Рама"],
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
    {
      name: "Audi Q7",
      type: "SUV",
      price: "от 7 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["340 л.с.", "3.0 TFSI", "Quattro"],
    },
    {
      name: "Porsche Cayenne",
      type: "SUV",
      price: "от 9 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["340 л.с.", "3.0 V6", "AWD"],
    },
    {
      name: "Range Rover Sport",
      type: "Внедорожник",
      price: "от 10 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["400 л.с.", "3.0 MHEV", "AWD"],
    },
    {
      name: "Volvo XC90",
      type: "SUV",
      price: "от 6 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["250 л.с.", "PHEV", "7 мест"],
    },
    {
      name: "BMW 7 Series",
      type: "Седан",
      price: "от 9 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["380 л.с.", "3.0 Hybrid", "AWD"],
    },
    {
      name: "Mercedes-Benz GLE",
      type: "SUV",
      price: "от 8 900 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["367 л.с.", "3.0 Turbo", "4MATIC"],
    },
    {
      name: "Audi e-tron GT",
      type: "Седан",
      price: "от 11 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["476 л.с.", "Electric", "Quattro"],
    },
    {
      name: "Porsche Panamera",
      type: "Седан",
      price: "от 10 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["330 л.с.", "2.9 V6", "AWD"],
    },
    {
      name: "Jaguar F-PACE",
      type: "SUV",
      price: "от 7 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["300 л.с.", "3.0 Diesel", "AWD"],
    },
    {
      name: "Land Rover Defender",
      type: "Внедорожник",
      price: "от 9 100 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["400 л.с.", "3.0 MHEV", "AWD"],
    },
    {
      name: "Maserati Levante",
      type: "SUV",
      price: "от 10 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["350 л.с.", "3.0 V6", "AWD"],
    },
    {
      name: "Alfa Romeo Stelvio",
      type: "SUV",
      price: "от 6 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["280 л.с.", "2.0 Turbo", "AWD"],
    },
    {
      name: "Bentley Bentayga",
      type: "SUV",
      price: "от 18 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["550 л.с.", "4.0 V8", "AWD"],
    },
    {
      name: "Genesis GV80",
      type: "SUV",
      price: "от 6 900 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["304 л.с.", "2.5 Turbo", "AWD"],
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
    {
      name: "BMW X5 M50i",
      type: "SUV",
      price: "от 8 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["530 л.с.", "0-100 за 4.3с", "AWD"],
    },
    {
      name: "NIO ET7",
      type: "Седан",
      price: "от 4 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["480 л.с.", "1000 км запас", "AWD"],
    },
    {
      name: "Porsche Cayenne",
      type: "SUV",
      price: "от 9 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["340 л.с.", "3.0 V6", "AWD"],
    },
    {
      name: "Xpeng G9",
      type: "SUV",
      price: "от 4 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["551 л.с.", "702 км запас", "AWD"],
    },
    {
      name: "Mercedes-Benz S-Class",
      type: "Седан",
      price: "от 9 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["367 л.с.", "Hybrid", "4MATIC"],
    },
    {
      name: "Range Rover Sport",
      type: "SUV",
      price: "от 10 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["400 л.с.", "3.0 MHEV", "AWD"],
    },
    {
      name: "Tank 500",
      type: "Внедорожник",
      price: "от 5 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["354 л.с.", "3.0T", "Рама"],
    },
    {
      name: "Avatr 11",
      type: "SUV Coupe",
      price: "от 4 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["578 л.с.", "Electric", "AWD"],
    },
    {
      name: "Volvo XC90",
      type: "SUV",
      price: "от 6 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["250 л.с.", "PHEV", "7 мест"],
    },
    {
      name: "Geely Monjaro",
      type: "Кроссовер",
      price: "от 3 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["238 л.с.", "2.0T", "AWD"],
    },
    {
      name: "BMW 7 Series",
      type: "Седан",
      price: "от 9 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["380 л.с.", "3.0 Hybrid", "AWD"],
    },
    {
      name: "Hongqi E-HS9",
      type: "SUV",
      price: "от 6 850 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["600 л.с.", "Electric", "AWD"],
    },
  ];

  const vehicles = 
    vehicleRegion === 'Китай' ? vehiclesChina : 
    vehicleRegion === 'Европа' ? vehiclesEurope : 
    vehiclesTop;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onVehicleRegionChange={setVehicleRegion} />

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
                onClick={() => navigate('/catalog')}
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
              onClick={() => navigate('/catalog')}
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

      <section className="py-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-sm tracking-[0.3em] uppercase text-accent">Подбор авто</span>
                <div className="h-px w-12 bg-accent"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Подобрать авто из Китая в 3 шага
              </h2>
              <p className="text-lg text-muted-foreground">
                Ответьте на 3 вопроса — мы найдём идеальный вариант
              </p>
            </div>

            <Card className="bg-background border-border shadow-2xl">
              <div className="p-8 md:p-12">
                <div className="flex justify-between mb-8">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                        quizStep === step 
                          ? 'bg-accent text-accent-foreground scale-110' 
                          : quizStep > step 
                          ? 'bg-accent/20 text-accent' 
                          : 'bg-secondary text-muted-foreground'
                      }`}>
                        {quizStep > step ? <Icon name="Check" size={20} /> : step}
                      </div>
                      {step < 3 && (
                        <div className={`w-16 md:w-24 h-0.5 mx-2 transition-colors ${
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
                        <h3 className="text-2xl font-bold mb-4">Какой марки/модели хотите авто?</h3>
                        <Input
                          type="text"
                          placeholder="Например: BYD Han, Zeekr 001, NIO ET7"
                          value={quizData.carModel}
                          onChange={(e) => setQuizData({ ...quizData, carModel: e.target.value })}
                          className="h-14 text-lg bg-secondary/50 border-border focus:border-accent"
                          required
                        />
                      </div>
                      <Button
                        type="button"
                        onClick={() => setQuizStep(2)}
                        className="w-full h-14 bg-accent hover:bg-accent/90 text-lg"
                        disabled={!quizData.carModel.trim()}
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
                        <h3 className="text-2xl font-bold mb-6">Автомобиль в каком бюджете рассматриваете?</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { label: 'До 15 млн ₽', value: 'до 15 млн' },
                            { label: '15-20 млн ₽', value: '15-20 млн' },
                            { label: '20-30 млн ₽', value: '20-30 млн' },
                            { label: '30-40 млн ₽', value: '30-40 млн' },
                            { label: '40+ млн ₽', value: '40+ млн' },
                            { label: 'Не определился', value: 'не определился' },
                          ].map((option) => (
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
                          className="flex-1 h-14 bg-accent hover:bg-accent/90 text-lg"
                          disabled={!quizData.budget}
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
                        <h3 className="text-2xl font-bold mb-6">Куда отправить подборку?</h3>
                        <div className="space-y-4">
                          <Input
                            type="text"
                            placeholder="Ваше имя"
                            value={quizData.name}
                            onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                            className="h-14 text-lg bg-secondary/50 border-border focus:border-accent"
                            required
                          />
                          <Input
                            type="tel"
                            placeholder="+7 (___) ___-__-__"
                            value={quizData.phone}
                            onChange={(e) => setQuizData({ ...quizData, phone: e.target.value })}
                            className="h-14 text-lg bg-secondary/50 border-border focus:border-accent"
                            required
                          />
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
                          type="submit"
                          className="flex-1 h-14 bg-accent hover:bg-accent/90 text-lg"
                          disabled={!quizData.name.trim() || !quizData.phone.trim()}
                        >
                          Получить подборку
                          <Icon name="Check" size={20} className="ml-2" />
                        </Button>
                      </div>
                      <p className="text-xs text-center text-muted-foreground">
                        Конфиденциальность гарантируется
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </Card>
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

      <Footer />
    </div>
  );
};

export default Index;