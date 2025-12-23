import VehicleCard from "@/components/VehicleCard";
import EmptyState from "@/components/EmptyState";
import { Vehicle } from "@/data/vehicles";

interface CatalogGridProps {
  vehicles: Vehicle[];
  viewMode: 'grid' | 'list';
  onVehicleClick: (vehicle: Vehicle) => void;
}

const CatalogGrid = ({ vehicles, viewMode, onVehicleClick }: CatalogGridProps) => {
  if (vehicles.length === 0) {
    return (
      <div className="py-20">
        <EmptyState
          icon="Search"
          title="Ничего не найдено"
          description="Попробуйте изменить параметры фильтрации"
        />
      </div>
    );
  }

  return (
    <div 
      className={
        viewMode === 'grid'
          ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6'
          : 'flex flex-col gap-4'
      }
    >
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          onClick={() => onVehicleClick(vehicle)}
          viewMode={viewMode}
        />
      ))}
    </div>
  );
};

export default CatalogGrid;
