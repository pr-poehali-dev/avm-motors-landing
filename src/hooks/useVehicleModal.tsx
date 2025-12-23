import { useState, lazy, Suspense } from 'react';
import { Vehicle } from '@/data/vehicles';

const VehicleModal = lazy(() => import('@/components/VehicleModal'));

export const useVehicleModal = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVehicleModal = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const closeVehicleModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedVehicle(null), 300);
  };

  const VehicleModalComponent = (
    <Suspense fallback={null}>
      <VehicleModal
        vehicle={selectedVehicle}
        open={isModalOpen}
        onClose={closeVehicleModal}
      />
    </Suspense>
  );

  return {
    openVehicleModal,
    closeVehicleModal,
    VehicleModalComponent,
  };
};