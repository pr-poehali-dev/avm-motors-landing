import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import VehiclesCatalog from "@/components/sections/VehiclesCatalog";
import QuizSection from "@/components/sections/QuizSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import InfoSections from "@/components/sections/InfoSections";
import { useVehicleModal } from "@/hooks/useVehicleModal";
import { useContactForm } from "@/hooks/useContactForm";
import { 
  Vehicle, 
  vehiclesChina, 
  vehiclesEurope, 
  vehiclesKorea, 
  vehiclesAmerican,
  vehiclesJapan
} from "@/data/vehicles";
import 'react-international-phone/style.css';

const Index = () => {
  const navigate = useNavigate();
  const { openVehicleModal, VehicleModalComponent } = useVehicleModal();
  const { formData, setFormData, handleSubmit } = useContactForm();
  const [vehicleCategory, setVehicleCategory] = useState('Авто');
  const [vehicleRegion, setVehicleRegion] = useState('Топ продаж');
  const [motoType, setMotoType] = useState('Все');
  const [showAllVehicles, setShowAllVehicles] = useState(false);

  const vehiclesTop = [
    ...vehiclesChina.slice(0, 3),
    ...vehiclesAmerican.slice(0, 2),
    ...vehiclesJapan.slice(0, 3),
  ];

  const motorcycles: Vehicle[] = [];

  let allVehicles;
  
  if (vehicleCategory === 'Мото') {
    if (motoType === 'Все') {
      allVehicles = motorcycles;
    } else if (motoType === 'Спортбайки') {
      allVehicles = motorcycles.filter(m => m.type === 'Спортбайк');
    } else if (motoType === 'Круизеры') {
      allVehicles = motorcycles.filter(m => m.type === 'Круизер');
    } else if (motoType === 'Туреры') {
      allVehicles = motorcycles.filter(m => m.type === 'Турер');
    } else if (motoType === 'Нейкеды') {
      allVehicles = motorcycles.filter(m => m.type === 'Нейкед');
    } else if (motoType === 'Эндуро') {
      allVehicles = motorcycles.filter(m => m.type === 'Эндуро');
    } else {
      allVehicles = motorcycles;
    }
  } else {
    allVehicles = 
      vehicleRegion === 'Китайские' ? vehiclesChina : 
      vehicleRegion === 'Европейские' ? vehiclesEurope :
      vehicleRegion === 'Американские' ? vehiclesAmerican :
      vehicleRegion === 'Японские' ? vehiclesJapan :
      vehicleRegion === 'Корейские' ? vehiclesKorea :
      vehiclesTop;
  }

  const vehicles = showAllVehicles ? allVehicles : allVehicles.slice(0, 8);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        onVehicleRegionChange={setVehicleRegion}
        onSearch={(query) => {
          navigate('/catalog');
        }}
      />

      <Hero />

      <VehiclesCatalog
        vehicleCategory={vehicleCategory}
        setVehicleCategory={setVehicleCategory}
        vehicleRegion={vehicleRegion}
        setVehicleRegion={setVehicleRegion}
        motoType={motoType}
        setMotoType={setMotoType}
        setShowAllVehicles={setShowAllVehicles}
        vehicles={vehicles}
        openVehicleModal={openVehicleModal}
      />

      <QuizSection />

      <ReviewsSection />

      <InfoSections
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />

      <Footer />
      
      {VehicleModalComponent}
    </div>
  );
};

export default Index;
