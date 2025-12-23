import { useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
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

const Footer = lazy(() => import("@/components/Footer"));
const VehiclesCatalog = lazy(() => import("@/components/sections/VehiclesCatalog"));
const QuizSection = lazy(() => import("@/components/sections/QuizSection"));
const ReviewsSection = lazy(() => import("@/components/sections/ReviewsSection"));
const InfoSections = lazy(() => import("@/components/sections/InfoSections"));

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

      <Suspense fallback={<div className="py-16 text-center"><div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div></div>}>
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
      </Suspense>
      
      {VehicleModalComponent}
    </div>
  );
};

export default Index;