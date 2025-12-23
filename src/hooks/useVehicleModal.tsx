import { useState } from 'react';
import { Vehicle } from '@/data/vehicles';
import VehicleModal from '@/components/VehicleModal';

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
    <VehicleModal
      vehicle={selectedVehicle}
      open={isModalOpen}
      onClose={closeVehicleModal}
    />
  );

  return {
    openVehicleModal,
    closeVehicleModal,
    VehicleModalComponent,
  };
};