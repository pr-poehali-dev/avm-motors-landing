import { useState, useEffect, useMemo, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import VehiclesCatalog from "@/components/sections/VehiclesCatalog";
import { useContactForm } from "@/hooks/useContactForm";
import { Vehicle } from "@/data/vehicles";

const QuizSection = lazy(() => import("@/components/sections/QuizSection"));
const ReviewsSection = lazy(() => import("@/components/sections/ReviewsSection"));
const InfoSections = lazy(() => import("@/components/sections/InfoSections"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const navigate = useNavigate();
  const { formData, setFormData, handleSubmit } = useContactForm();
  const [vehicleCategory, setVehicleCategory] = useState('Авто');
  const [vehicleRegion, setVehicleRegion] = useState('Топ продаж');
  const [motoType, setMotoType] = useState('Все');
  const [showAllVehicles, setShowAllVehicles] = useState(false);
  const [vehiclesData, setVehiclesData] = useState<any>(null);

  useEffect(() => {
    import("@/data/vehicles").then(module => {
      setVehiclesData({
        vehiclesChina: module.vehiclesChina,
        vehiclesEurope: module.vehiclesEurope,
        vehiclesAmerican: module.vehiclesAmerican,
        vehiclesJapan: module.vehiclesJapan,
        vehiclesKorea: module.vehiclesKorea
      });
    });
  }, []);

  const vehiclesTop = useMemo(() => {
    if (!vehiclesData) return [];
    return [
      ...vehiclesData.vehiclesChina.slice(0, 3),
      ...vehiclesData.vehiclesAmerican.slice(0, 2),
      ...vehiclesData.vehiclesJapan.slice(0, 3),
    ];
  }, [vehiclesData]);

  const motorcycles: Vehicle[] = [];

  const allVehicles = useMemo(() => {
    if (!vehiclesData) return [];
    
    if (vehicleCategory === 'Мото') {
      if (motoType === 'Все') return motorcycles;
      return motorcycles.filter(m => {
        if (motoType === 'Спортбайки') return m.type === 'Спортбайк';
        if (motoType === 'Круизеры') return m.type === 'Круизер';
        if (motoType === 'Туреры') return m.type === 'Турер';
        if (motoType === 'Нейкеды') return m.type === 'Нейкед';
        if (motoType === 'Эндуро') return m.type === 'Эндуро';
        return true;
      });
    }
    
    if (vehicleRegion === 'Китайские') return vehiclesData.vehiclesChina;
    if (vehicleRegion === 'Европейские') return vehiclesData.vehiclesEurope;
    if (vehicleRegion === 'Американские') return vehiclesData.vehiclesAmerican;
    if (vehicleRegion === 'Японские') return vehiclesData.vehiclesJapan;
    if (vehicleRegion === 'Корейские') return vehiclesData.vehiclesKorea;
    return vehiclesTop;
  }, [vehiclesData, vehicleCategory, vehicleRegion, motoType, motorcycles, vehiclesTop]);

  const vehicles = useMemo(() => 
    showAllVehicles ? allVehicles : allVehicles.slice(0, 8),
    [showAllVehicles, allVehicles]
  );

  if (!vehiclesData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

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
      />

      <Suspense fallback={<div className="py-16 bg-secondary" />}>
        <QuizSection />
      </Suspense>

      <Suspense fallback={<div className="py-16" />}>
        <ReviewsSection />
      </Suspense>

      <Suspense fallback={<div className="py-16 bg-secondary" />}>
        <InfoSections
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </Suspense>
      
      <Suspense fallback={<div className="py-8 bg-card" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;