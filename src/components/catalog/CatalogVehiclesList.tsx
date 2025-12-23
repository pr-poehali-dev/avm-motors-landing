import { useNavigate } from "react-router-dom";
import VehicleCard from "@/components/VehicleCard";
import EmptyState from "@/components/EmptyState";

interface CatalogVehiclesListProps {
  filteredVehicles: any[];
  viewMode: 'grid' | 'list';
  onResetFilters: () => void;
}

const CatalogVehiclesList = ({
  filteredVehicles,
  viewMode,
  onResetFilters
}: CatalogVehiclesListProps) => {
  const navigate = useNavigate();

  if (filteredVehicles.length === 0) {
    return (
      <EmptyState
        icon="SearchX"
        title="Автомобили не найдены"
        description="Попробуйте изменить параметры фильтрации"
        buttonText="Сбросить фильтры"
        onButtonClick={onResetFilters}
      />
    );
  }

  if (viewMode === 'grid') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {filteredVehicles.slice(0, 20).map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            viewMode={viewMode}
            onClick={() => navigate(`/catalog/${vehicle.id}`)}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4 md:space-y-6">
      {filteredVehicles.slice(0, 20).map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
          viewMode={viewMode}
          onClick={() => navigate(`/catalog/${vehicle.id}`)}
        />
      ))}
    </div>
  );
};

export default CatalogVehiclesList;
