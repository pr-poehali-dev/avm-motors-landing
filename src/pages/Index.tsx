import { useState, useEffect, useMemo, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import VehiclesCatalog from "@/components/sections/VehiclesCatalog";
import Footer from "@/components/Footer";
import { useContactForm } from "@/hooks/useContactForm";
import { Vehicle } from "@/data/vehicles";

const QuizSection = lazy(() => import("@/components/sections/QuizSection"));
const ReviewsSection = lazy(() => import("@/components/sections/ReviewsSection"));
const InfoSections = lazy(() => import("@/components/sections/InfoSections"));

interface VehiclesData {
  vehiclesChina: Vehicle[];
  vehiclesEurope: Vehicle[];
  vehiclesAmerican: Vehicle[];
  vehiclesJapan: Vehicle[];
  vehiclesKorea: Vehicle[];
}

const MOTO_TYPE_MAP: Record<string, string> = {
  'Спортбайки': 'Спортбайк',
  'Круизеры': 'Круизер',
  'Туреры': 'Турер',
  'Нейкеды': 'Нейкед',
  'Эндуро': 'Эндуро',
};

const REGION_MAP: Record<string, keyof VehiclesData> = {
  'Китайские': 'vehiclesChina',
  'Европейские': 'vehiclesEurope',
  'Американские': 'vehiclesAmerican',
  'Японские': 'vehiclesJapan',
  'Корейские': 'vehiclesKorea',
};

const LoadingSpinner = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  const navigate = useNavigate();
  const { formData, setFormData, handleSubmit } = useContactForm();
  const [vehicleCategory, setVehicleCategory] = useState('Авто');
  const [vehicleRegion, setVehicleRegion] = useState('Топ продаж');
  const [motoType, setMotoType] = useState('Все');
  const [showAllVehicles, setShowAllVehicles] = useState(false);
  const [vehiclesData, setVehiclesData] = useState<VehiclesData | null>(null);

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

  const getFilteredMotorcycles = useMemo(() => {
    if (motoType === 'Все') return motorcycles;
    const targetType = MOTO_TYPE_MAP[motoType];
    return motorcycles.filter(m => m.type === targetType);
  }, [motoType, motorcycles]);

  const allVehicles = useMemo(() => {
    if (!vehiclesData) return [];
    
    if (vehicleCategory === 'Мото') {
      return getFilteredMotorcycles;
    }
    
    const regionKey = REGION_MAP[vehicleRegion];
    return regionKey ? vehiclesData[regionKey] : vehiclesTop;
  }, [vehiclesData, vehicleCategory, vehicleRegion, getFilteredMotorcycles, vehiclesTop]);

  const vehicles = useMemo(() => 
    showAllVehicles ? allVehicles : allVehicles.slice(0, 8),
    [showAllVehicles, allVehicles]
  );

  const handleSearch = () => navigate('/catalog');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header 
        onVehicleRegionChange={setVehicleRegion}
        onSearch={handleSearch}
      />

      <main>
        <Hero />

        {vehiclesData ? (
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
        ) : (
          <LoadingSpinner />
        )}

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
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;
