import { useMemo } from 'react';
import {
  Vehicle,
  vehiclesChina,
  vehiclesEurope,
  vehiclesAmerican,
  vehiclesJapanese,
  vehiclesKorean,
  vehiclesTop,
  motorcycles,
} from '@/data/vehicles';

export const useVehicles = (
  vehicleCategory: string,
  vehicleRegion: string,
  motoType: string,
  showAllVehicles: boolean
) => {
  const allVehicles = useMemo((): Vehicle[] => {
    if (vehicleCategory === 'Мото') {
      if (motoType === 'Все') return motorcycles;
      
      const typeMap: Record<string, string> = {
        'Спортбайки': 'Спортбайк',
        'Круизеры': 'Круизер',
        'Туреры': 'Турер',
        'Нейкеды': 'Нейкед',
        'Эндуро': 'Эндуро',
      };
      
      const targetType = typeMap[motoType];
      return targetType ? motorcycles.filter(m => m.type === targetType) : motorcycles;
    }
    
    const regionMap: Record<string, Vehicle[]> = {
      'Китайские': vehiclesChina,
      'Европейские': vehiclesEurope,
      'Американские': vehiclesAmerican,
      'Японские': vehiclesJapanese,
      'Корейские': vehiclesKorean,
    };
    
    return regionMap[vehicleRegion] || vehiclesTop;
  }, [vehicleCategory, vehicleRegion, motoType]);

  const displayedVehicles = useMemo(
    () => (showAllVehicles ? allVehicles : allVehicles.slice(0, 8)),
    [showAllVehicles, allVehicles]
  );

  return { allVehicles, displayedVehicles };
};
