import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import VehiclesCatalog from "@/components/sections/VehiclesCatalog";
import Footer from "@/components/Footer";
import { useContactForm } from "@/hooks/useContactForm";
import { useVehicleFilters } from "@/hooks/useVehicleFilters";

const QuizSection = lazy(() => import("@/components/sections/QuizSection"));
const ReviewsSection = lazy(() => import("@/components/sections/ReviewsSection"));
const InfoSections = lazy(() => import("@/components/sections/InfoSections"));

const LoadingSpinner = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  const navigate = useNavigate();
  const { formData, setFormData, handleSubmit } = useContactForm();
  const {
    vehicleCategory,
    setVehicleCategory,
    vehicleRegion,
    setVehicleRegion,
    motoType,
    setMotoType,
    showAllVehicles,
    setShowAllVehicles,
    vehiclesData,
    vehicles,
  } = useVehicleFilters();

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