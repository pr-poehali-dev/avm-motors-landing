import { useState, useEffect, useMemo } from "react";
import { Vehicle } from "@/data/vehicles";

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

export const useVehicleFilters = () => {
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

  return {
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
  };
};
