import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { lazy, Suspense } from "react";
import SectionHeader from "@/components/SectionHeader";
import { Vehicle } from "@/data/vehicles";

const VehicleCard = lazy(() => import("@/components/VehicleCard"));

interface VehiclesCatalogProps {
  vehicleCategory: string;
  setVehicleCategory: (category: string) => void;
  vehicleRegion: string;
  setVehicleRegion: (region: string) => void;
  motoType: string;
  setMotoType: (type: string) => void;
  setShowAllVehicles: (show: boolean) => void;
  vehicles: Vehicle[];
}

const VehiclesCatalog = ({
  vehicleCategory,
  setVehicleCategory,
  vehicleRegion,
  setVehicleRegion,
  motoType,
  setMotoType,
  setShowAllVehicles,
  vehicles,
}: VehiclesCatalogProps) => {
  const navigate = useNavigate();

  return (
    <section id="vehicles" className="py-12 md:py-16 relative">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="mb-12 md:mb-20">
          <SectionHeader 
            label="Каталог"
            title="Примеры доступные для заказа"
            description="Подбираем транспорт под Ваш бюджет с расчетом полной стоимости до покупки"
          />
          
          <div className="flex gap-0 mb-8 md:mb-12 p-1 md:p-1.5 bg-secondary/50 backdrop-blur-sm rounded-lg border border-border/50 w-fit">
            {[
              { name: 'Авто', icon: 'Car' },
              { name: 'Мото', icon: 'Bike' }
            ].map((category) => (
              <button
                key={category.name}
                onClick={() => {
                  setVehicleCategory(category.name);
                  setVehicleRegion('Топ продаж');
                  setMotoType('Все');
                  setShowAllVehicles(false);
                }}
                className={`relative flex items-center gap-2 md:gap-3 px-6 md:px-10 py-2.5 md:py-3.5 font-bold text-sm md:text-lg transition-all duration-300 ${
                  vehicleCategory === category.name
                    ? 'bg-accent text-accent-foreground rounded-md shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={category.icon} size={20} className="md:w-6 md:h-6" />
                <span className="tracking-wide uppercase">{category.name}</span>
              </button>
            ))}
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

          {vehicleCategory === 'Мото' && (
            <div className="relative">
              <div className="flex gap-2 md:gap-4 border-b border-border overflow-x-auto scrollbar-hide pb-0 -mb-px">
                {['Все', 'Спортбайки', 'Круизеры', 'Туреры', 'Нейкеды', 'Эндуро'].map((type) => (
                <button
                  key={type}
                  onClick={() => setMotoType(type)}
                  className={`pb-3 md:pb-4 px-3 md:px-6 text-sm md:text-base lg:text-lg font-medium transition-all relative whitespace-nowrap flex-shrink-0 ${
                    motoType === type 
                      ? 'text-accent' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {type}
                  {motoType === type && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          <Suspense fallback={
            <div className="col-span-full flex justify-center py-8">
              <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            {vehicles.map((vehicle, index) => (
              <VehicleCard
                key={index}
                vehicle={vehicle}
                onClick={() => navigate(`/catalog/${vehicle.id || index + 1}`)}
                showButton={false}
              />
            ))}
          </Suspense>
        </div>
        
        <div className="flex justify-center">
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
  );
};

export default VehiclesCatalog;