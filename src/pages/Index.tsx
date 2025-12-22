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
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('Видеообзоры');
  const [vehicleCategory, setVehicleCategory] = useState('Авто');
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
    budget: '',
    tasks: [] as string[],
    chineseBrands: '',
    name: '',
    phone: '',
  });
  const [showAllVehicles, setShowAllVehicles] = useState(false);

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка принята!",
      description: "Мы подберём для вас идеальный автомобиль и свяжемся в течение часа",
    });
    setQuizStep(1);
    setQuizData({ budget: '', tasks: [], chineseBrands: '', name: '', phone: '' });
    setQuizStep(1);
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

  const motorcycles = [
    {
      name: "Kawasaki Ninja H2",
      type: "Спортбайк",
      price: "от 2 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["231 л.с.", "998 см³", "Компрессор"],
    },
    {
      name: "BMW S 1000 RR",
      type: "Спортбайк",
      price: "от 1 950 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["207 л.с.", "999 см³", "0-100 за 3.1с"],
    },
    {
      name: "Ducati Panigale V4",
      type: "Спортбайк",
      price: "от 3 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["214 л.с.", "1103 см³", "V4"],
    },
    {
      name: "Honda Gold Wing",
      type: "Турер",
      price: "от 2 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["126 л.с.", "1833 см³", "6 цилиндров"],
    },
    {
      name: "Yamaha YZF-R1",
      type: "Спортбайк",
      price: "от 1 850 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["200 л.с.", "998 см³", "Crossplane"],
    },
    {
      name: "Harley-Davidson Road Glide",
      type: "Круизер",
      price: "от 2 100 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["87 л.с.", "1868 см³", "V-Twin"],
    },
    {
      name: "Suzuki Hayabusa",
      type: "Спортбайк",
      price: "от 1 750 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["190 л.с.", "1340 см³", "312 км/ч"],
    },
    {
      name: "KTM 1290 Super Duke R",
      type: "Нейкед",
      price: "от 1 650 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["180 л.с.", "1301 см³", "V-Twin"],
    },
    {
      name: "Triumph Rocket 3",
      type: "Круизер",
      price: "от 2 300 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["165 л.с.", "2458 см³", "3 цилиндра"],
    },
    {
      name: "Aprilia RSV4",
      type: "Спортбайк",
      price: "от 2 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["217 л.с.", "1099 см³", "V4"],
    },
    {
      name: "Indian Challenger",
      type: "Багер",
      price: "от 2 400 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["122 л.с.", "1768 см³", "V-Twin"],
    },
    {
      name: "MV Agusta F4",
      type: "Спортбайк",
      price: "от 3 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["212 л.с.", "998 см³", "299 км/ч"],
    },
  ];

  const vehiclesAmerican = [
    {
      name: "Ford F-150 Lightning",
      type: "Пикап",
      price: "от 7 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["563 л.с.", "Electric", "AWD"],
    },
    {
      name: "Chevrolet Tahoe",
      type: "SUV",
      price: "от 8 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["420 л.с.", "6.2 V8", "4WD"],
    },
    {
      name: "Cadillac Escalade",
      type: "Премиум SUV",
      price: "от 10 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["420 л.с.", "6.2 V8", "AWD"],
    },
    {
      name: "Jeep Grand Cherokee",
      type: "SUV",
      price: "от 6 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["357 л.с.", "5.7 V8", "4WD"],
    },
    {
      name: "Tesla Model S Plaid",
      type: "Седан",
      price: "от 12 000 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["1020 л.с.", "0-100 за 2.1с", "AWD"],
    },
    {
      name: "GMC Yukon Denali",
      type: "SUV",
      price: "от 9 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["420 л.с.", "6.2 V8", "AWD"],
    },
    {
      name: "Lincoln Navigator",
      type: "Премиум SUV",
      price: "от 10 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["450 л.с.", "3.5 Twin-Turbo", "4WD"],
    },
    {
      name: "Ram 1500 TRX",
      type: "Пикап",
      price: "от 11 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["702 л.с.", "6.2 Supercharged", "4WD"],
    },
  ];

  const vehiclesJapanese = [
    {
      name: "Toyota Land Cruiser 300",
      type: "Внедорожник",
      price: "от 9 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["415 л.с.", "3.5 Twin-Turbo", "4WD"],
    },
    {
      name: "Lexus LX 600",
      type: "Премиум SUV",
      price: "от 10 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["409 л.с.", "3.5 Twin-Turbo", "4WD"],
    },
    {
      name: "Mazda CX-90",
      type: "SUV",
      price: "от 5 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["340 л.с.", "PHEV", "AWD"],
    },
    {
      name: "Honda Pilot",
      type: "SUV",
      price: "от 4 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["285 л.с.", "3.5 V6", "AWD"],
    },
    {
      name: "Nissan Patrol",
      type: "Внедорожник",
      price: "от 6 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["400 л.с.", "5.6 V8", "4WD"],
    },
    {
      name: "Lexus RX 500h",
      type: "SUV",
      price: "от 7 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["366 л.с.", "Hybrid", "AWD"],
    },
    {
      name: "Toyota Alphard",
      type: "Минивэн",
      price: "от 5 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["245 л.с.", "Hybrid", "7 мест"],
    },
    {
      name: "Infiniti QX80",
      type: "SUV",
      price: "от 7 900 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["400 л.с.", "5.6 V8", "4WD"],
    },
  ];

  const vehiclesKorean = [
    {
      name: "Genesis GV80",
      type: "Премиум SUV",
      price: "от 6 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["375 л.с.", "3.5 Twin-Turbo", "AWD"],
    },
    {
      name: "Hyundai Palisade",
      type: "SUV",
      price: "от 4 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["291 л.с.", "3.8 V6", "AWD"],
    },
    {
      name: "Kia EV6 GT",
      type: "Кроссовер",
      price: "от 5 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["585 л.с.", "0-100 за 3.5с", "AWD"],
    },
    {
      name: "Genesis G90",
      type: "Седан Люкс",
      price: "от 8 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["409 л.с.", "3.5 Twin-Turbo", "AWD"],
    },
    {
      name: "Hyundai Ioniq 5 N",
      type: "Кроссовер",
      price: "от 6 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["641 л.с.", "Electric", "AWD"],
    },
    {
      name: "Kia Telluride",
      type: "SUV",
      price: "от 4 500 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["291 л.с.", "3.8 V6", "AWD"],
    },
    {
      name: "Genesis GV70",
      type: "SUV",
      price: "от 5 200 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["300 л.с.", "2.5 Turbo", "AWD"],
    },
    {
      name: "Hyundai Santa Fe",
      type: "SUV",
      price: "от 3 800 000 ₽",
      image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg",
      specs: ["277 л.с.", "2.5 Turbo", "AWD"],
    },
  ];

  const allVehicles = 
    vehicleCategory === 'Мото' ? motorcycles :
    vehicleRegion === 'Китайские' ? vehiclesChina : 
    vehicleRegion === 'Европейские' ? vehiclesEurope :
    vehicleRegion === 'Американские' ? vehiclesAmerican :
    vehicleRegion === 'Японские' ? vehiclesJapanese :
    vehicleRegion === 'Корейские' ? vehiclesKorean :
    vehiclesTop;

  const vehicles = showAllVehicles ? allVehicles : allVehicles.slice(0, 8);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onVehicleRegionChange={setVehicleRegion} />

      <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute top-1/4 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-accent/5 dark:bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="hidden md:block absolute top-1/3 right-1/4 w-2 h-96 bg-gradient-to-b from-blue-accent/40 dark:from-accent/40 to-transparent rotate-12"></div>
        <div className="hidden md:block absolute top-1/2 right-[30%] w-1 h-64 bg-gradient-to-b from-blue-accent/60 dark:from-accent/60 to-transparent -rotate-6"></div>
        <div className="hidden md:block absolute top-1/4 right-[20%] w-32 h-32 border border-blue-accent/20 dark:border-accent/20 rotate-45"></div>
        <div className="hidden md:block absolute top-[60%] right-[35%] w-24 h-24 border border-blue-accent/30 dark:border-accent/30 rotate-12"></div>
        
        <div className="w-full px-4 sm:px-6 lg:px-12 relative py-16 md:py-32">
          <div className="relative">
            <div className="mb-6 md:mb-8 flex items-center gap-2 md:gap-3 relative z-30">
              <div className="h-px w-8 md:w-12 bg-accent"></div>
              <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-accent">Эксклюзивный импорт</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-6 md:mb-8 leading-[0.95] tracking-tight relative z-30 max-w-4xl">
              АВТОМОБИЛИ<br />
              <span className="accent-title text-accent">из Китая</span><br />
              ПОД КЛЮЧ
            </h1>
            
            <div className="hidden md:block absolute top-0 -right-20 lg:-right-40 w-[900px] lg:w-[1400px] h-full pointer-events-none z-20">
              <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-px h-48 bg-gradient-to-b from-transparent via-blue-accent/60 dark:via-accent/60 to-transparent"></div>
                <div className="absolute top-1/3 right-1/3 w-px h-64 bg-gradient-to-b from-transparent via-blue-accent/40 dark:via-accent/40 to-transparent"></div>
                <div className="absolute top-1/2 right-[40%] w-16 h-px bg-gradient-to-r from-transparent via-blue-accent/50 dark:via-accent/50 to-transparent"></div>
              </div>
              <img 
                src="https://cdn.poehali.dev/files/Group_117.png"
                alt="Premium Car"
                className="w-full h-full object-contain drop-shadow-[0_30px_100px_rgba(0,149,218,0.3)] dark:drop-shadow-[0_30px_100px_rgba(229,87,68,0.4)] animate-in slide-in-from-right-full duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-accent/5 dark:via-accent/5 to-transparent"></div>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-2xl leading-relaxed relative z-30">
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
              <div className="border-l-2 border-accent pl-3 md:pl-6">
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-accent">30%</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Экономия</div>
              </div>
              <div className="border-l-2 border-blue-accent pl-3 md:pl-6">
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-blue-accent">30</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Дней доставка</div>
              </div>
              <div className="border-l-2 border-green-accent pl-3 md:pl-6">
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-green-accent">24/7</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Поддержка</div>
              </div>
              <div className="border-l-2 border-orange-accent pl-3 md:pl-6">
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-orange-accent">14</div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Лет на рынке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vehicles" className="py-16 md:py-32 relative">
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
            
            <div className="relative -mx-4 sm:-mx-6 lg:-mx-12 mb-8 md:mb-16">
              <div className="relative bg-secondary/30 backdrop-blur-sm border-y border-border/50">
                <div className="w-full px-4 sm:px-6 lg:px-12 py-1 md:py-2">
                  <div className="flex gap-0 w-fit">
                    {[
                      { name: 'Авто', icon: 'Car' },
                      { name: 'Мото', icon: 'Bike' }
                    ].map((category) => (
                      <button
                        key={category.name}
                        onClick={() => {
                          setVehicleCategory(category.name);
                          setVehicleRegion(category.name === 'Авто' ? 'Топ продаж' : 'Все мотоциклы');
                        }}
                        className={`relative flex items-center gap-2 md:gap-3 px-8 md:px-12 py-4 md:py-5 font-bold text-base md:text-xl transition-all duration-300 ${
                          vehicleCategory === category.name
                            ? 'text-accent'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <Icon name={category.icon} size={22} className="md:w-7 md:h-7" />
                        <span className="tracking-wider uppercase">{category.name}</span>
                        {vehicleCategory === category.name && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
            
            {vehicleCategory === 'Авто' && (
              <div className="relative">
                <div className="flex gap-2 md:gap-4 border-b border-border overflow-x-auto scrollbar-hide pb-0 -mb-px">
                  {['Топ продаж', 'Китайские', 'Европейские', 'Американские', 'Японские', 'Корейские'].map((region) => (
                  <button
                    key={region}
                    onClick={() => setVehicleRegion(region)}
                    className={`pb-3 md:pb-4 px-3 md:px-6 text-sm md:text-base lg:text-lg font-medium transition-all relative whitespace-nowrap flex-shrink-0 ${
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
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {vehicles.map((vehicle, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden bg-card border-border hover:border-accent transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
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
          
          <div className="flex flex-col items-center gap-4">
            {!showAllVehicles && allVehicles.length > 8 && (
              <Button 
                size="lg"
                variant="outline"
                className="border-2 px-10 h-14 text-lg hover:bg-button-primary hover:border-accent hover:text-accent-foreground"
                onClick={() => setShowAllVehicles(true)}
              >
                Показать ещё ({allVehicles.length - 8})
                <Icon name="ChevronDown" size={20} className="ml-2" />
              </Button>
            )}
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

      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-accent/5 blur-[100px] rounded-full"></div>
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="mb-8 md:mb-16">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="h-px w-8 md:w-12 bg-accent"></div>
              <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-accent">Экспертиза</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Обзоры</h2>
          </div>

          <div className="flex gap-2 md:gap-4 mb-8 md:mb-12 border-b border-border overflow-x-auto scrollbar-hide">
            {['Видеообзоры', 'Отзывы клиентов', 'Блог'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 md:pb-4 px-3 md:px-6 text-xs sm:text-sm md:text-base lg:text-lg font-medium transition-all relative whitespace-nowrap flex-shrink-0 ${
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
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

      <section className="py-16 md:py-32 bg-secondary relative overflow-hidden">
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
                <div className="flex justify-between mb-6 md:mb-8 overflow-x-auto scrollbar-hide">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center flex-shrink-0">
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
                        <div className={`w-12 md:w-20 h-0.5 mx-2 transition-colors ${
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
                          {[
                            { label: 'до 15 000$', value: 'do-15k' },
                            { label: '15 000 - 20 000$', value: '15k-20k' },
                            { label: '20 000 - 30 000$', value: '20k-30k' },
                            { label: '30 000$ и выше', value: '30k+' },
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
                          {[
                            { label: 'Семейный автомобиль', value: 'family' },
                            { label: 'Поездки по городу', value: 'city' },
                            { label: 'Путешествия / трасса', value: 'travel' },
                            { label: 'Бездорожье', value: 'offroad' },
                            { label: 'Стиль и комфорт', value: 'luxury' },
                            { label: 'Пока не определился', value: 'unsure' },
                          ].map((option) => {
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
                          {[
                            { label: 'Рассматриваю к покупке', value: 'considering' },
                            { label: 'Рассмотрю, если очень выгодно', value: 'if-profitable' },
                            { label: 'Без разницы', value: 'no-preference' },
                            { label: 'Пока не рассматриваю', value: 'not-considering' },
                          ].map((option) => (
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
                          <PhoneInput
                            defaultCountry="ru"
                            value={quizData.phone}
                            onChange={(phone) => setQuizData({ ...quizData, phone })}
                            inputClassName="h-12 sm:h-14 text-sm sm:text-base md:text-lg bg-secondary/50 border-border focus:border-accent"
                            className="phone-input-custom"
                          />
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          type="button"
                          onClick={() => setQuizStep(3)}
                          variant="outline"
                          className="flex-1 h-14 text-lg border-border hover:border-accent"
                        >
                          <Icon name="ArrowLeft" size={20} className="mr-2" />
                          Назад
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 h-14 bg-button-primary hover:bg-button-primary/90 text-lg"
                          disabled={!quizData.name.trim() || !quizData.phone.trim()}
                        >
                          Получить подбор от эксперта AVM
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

      <section id="services" className="py-16 md:py-32 bg-secondary">
        <div className="w-full px-6 lg:px-12">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-sm tracking-[0.3em] uppercase text-accent">Сервис</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6">Полный цикл обслуживания</h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl">
              Что вы получаете до, во время и после покупки с нами
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: "Search", title: "Индивидуальный подбор", desc: "Подбор авто под бюджет и задачи с полной проверкой до покупки", color: "accent" },
              { icon: "Shield", title: "Юридическое сопровождение сделки", desc: "Проверка продавца на риски, проверка документов и договора, сопровождение до выдачи", color: "blue-accent" },
              { icon: "Truck", title: "VIP доставка", desc: "Безопасная контейнерная доставка, страхование, контроль и отчет на всех этапах пути", color: "green-accent" },
              { icon: "FileCheck", title: "Таможенная очистка под ключ", desc: "Размещение на СВХ, расчёт таможенных платежей, удалённая растаможка и сопровождение до выпуска автомобиля", color: "orange-accent" },
            ].map((service, idx) => (
              <Card key={idx} className="p-8 bg-card border-border hover:border-accent transition-all group">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors ${
                  service.color === 'accent' ? 'bg-accent/10 group-hover:bg-accent/20' :
                  service.color === 'blue-accent' ? 'bg-blue-accent/10 group-hover:bg-blue-accent/20' :
                  service.color === 'green-accent' ? 'bg-green-accent/10 group-hover:bg-green-accent/20' :
                  'bg-orange-accent/10 group-hover:bg-orange-accent/20'
                }`}>
                  <Icon name={service.icon} size={32} className={`${
                    service.color === 'accent' ? 'text-accent' :
                    service.color === 'blue-accent' ? 'text-blue-accent' :
                    service.color === 'green-accent' ? 'text-green-accent' :
                    'text-orange-accent'
                  }`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="w-full px-4 sm:px-6 lg:px-12 relative">
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-sm tracking-[0.3em] uppercase text-accent">Преимущества</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6">Почему AVM Motors</h2>
            <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl">
              Опыт, надежность и прозрачность на каждом этапе
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { 
                icon: "Calculator", 
                title: "Прозрачная цена до покупки", 
                desc: "Рассчитываем полную стоимость до покупки - без скрытых платежей, доплат и \"всплывающих\" расходов после покупки",
                color: "accent"
              },
              { 
                icon: "SearchCheck", 
                title: "Проверка автомобиля до выкупа", 
                desc: "Проверяем ЛКП, следы затопления или пожара, механические повреждения, техническое состояние деталей и агрегатов. Предоставляем подробный фото и видеоотчёт до оплаты",
                color: "blue-accent"
              },
              { 
                icon: "CreditCard", 
                title: "Кредит и лизинг удаленно", 
                desc: "Подбираем оптимальные условия и сопровождаем сделку без визита в офис",
                color: "green-accent"
              },
              { 
                icon: "Package", 
                title: "Дополнительное оборудование с выгодой", 
                desc: "Помогаем заказать вместе с автомобилем резину и аксессуары дешевле рынка",
                color: "orange-accent"
              },
              { 
                icon: "ClipboardCheck", 
                title: "Сопровождение до постановки на учет", 
                desc: "Передаём автомобиль и документы, даём пошаговую памятку по регистрации в ГАИ",
                color: "accent"
              },
              { 
                icon: "Users", 
                title: "Экосистема партнеров", 
                desc: "Детейлинг, антикор, русификация, прошивки, запчасти и масла по оптовым ценам",
                color: "blue-accent"
              },
              { 
                icon: "Award", 
                title: "Опыт и доверие, подтвержденные временем", 
                desc: "На рынке с 2012 года. Более 5 лет работы с Китаем, собственная логистика, кредитный отдел, представительство в Китае. AVM - бренд года 2025",
                color: "green-accent"
              },
              { 
                icon: "Gift", 
                title: "Программа лояльности", 
                desc: "Любой наш клиент вместе с заказом автомобиля получает скидку 10% на любой товар среди ассортимента avtovelomoto.by",
                color: "orange-accent"
              },
            ].map((item, idx) => (
              <Card 
                key={idx} 
                className="p-6 bg-card border-border hover:border-accent transition-all group cursor-pointer hover:shadow-lg"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all ${
                  item.color === 'accent' ? 'bg-accent/10 group-hover:bg-accent/20' :
                  item.color === 'blue-accent' ? 'bg-blue-accent/10 group-hover:bg-blue-accent/20' :
                  item.color === 'green-accent' ? 'bg-green-accent/10 group-hover:bg-green-accent/20' :
                  'bg-orange-accent/10 group-hover:bg-orange-accent/20'
                }`}>
                  <Icon name={item.icon} size={28} className={`${
                    item.color === 'accent' ? 'text-accent' :
                    item.color === 'blue-accent' ? 'text-blue-accent' :
                    item.color === 'green-accent' ? 'text-green-accent' :
                    'text-orange-accent'
                  }`} />
                </div>
                <h3 className="text-lg font-bold mb-3 leading-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-muted">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-sm tracking-[0.3em] uppercase text-accent">Процесс</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-8">Как мы работаем</h2>
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
                  { icon: 'MessageSquare', title: 'Консультация и подбор', desc: 'Обсуждаем ваши пожелания, подбираем идеальный автомобиль и рассчитываем полную стоимость — быстро и прозрачно' },
                  { icon: 'FileText', title: 'Оформление договора', desc: 'Заключаем официальный договор с фиксированной ценой — без скрытых платежей' },
                  { icon: 'SearchCheck', title: 'Диагностика и проверка автомобиля', desc: 'Проверяем техническое состояние, ЛКП, отсутствие затоплений. Отправляем вам подробный фото-видеоотчёт' },
                  { icon: 'Banknote', title: 'Выкуп и оплата', desc: 'Покупаем автомобиль после вашего одобрения. Безопасная сделка с полным юридическим сопровождением' },
                  { icon: 'Truck', title: 'Доставка', desc: 'Быстрая логистика и таможенное оформление — 30-60 дней от заказа до вашего города' },
                  { icon: 'Key', title: 'Получение автомобиля', desc: 'Передаём вам ключи, документы и помогаем с постановкой на учёт' },
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

      <section id="contact" className="py-16 md:py-32 bg-secondary">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-sm tracking-[0.3em] uppercase text-accent">Контакт</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6">Начнём подбор автомобиля прямо сейчас</h2>
              <p className="text-sm sm:text-base md:text-xl text-muted-foreground leading-relaxed">
                Эксперт AVM свяжется с вами, уточнит детали и предложит подходящие варианты с расчетом полной стоимости до покупки
              </p>
            </div>
            <Card className="p-4 sm:p-8 md:p-12 bg-card border-accent/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 sm:h-14 text-sm sm:text-base bg-background border-border focus:border-accent"
                />
                <PhoneInput
                  defaultCountry="ru"
                  value={formData.phone}
                  onChange={(phone) => setFormData({ ...formData, phone })}
                  inputClassName="h-12 sm:h-14 text-sm sm:text-base bg-background border-border focus:border-accent"
                  className="phone-input-custom"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-button-primary hover:bg-button-primary/90 h-12 sm:h-14 text-base sm:text-lg"
                >
                  Получить консультацию
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