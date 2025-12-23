import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface VehicleCardProps {
  vehicle: {
    id?: number;
    name: string;
    type: string;
    price: string;
    image: string;
    specs: string[];
    region?: string;
    badge?: string;
  };
  viewMode?: 'grid' | 'list';
  onClick?: () => void;
  showButton?: boolean;
}

const VehicleCard = ({ vehicle, viewMode = 'grid', onClick, showButton = true }: VehicleCardProps) => {
  if (viewMode === 'list') {
    return (
      <Card
        onClick={onClick}
        className="group overflow-hidden bg-card border-border hover:border-accent transition-all cursor-pointer"
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
          <div className="relative w-full sm:w-64 md:w-80 h-48 sm:h-52 overflow-hidden rounded-lg flex-shrink-0">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              width="640"
              height="480"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {vehicle.badge && (
              <Badge className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-accent-foreground border-0 px-3 py-1 text-xs">
                {vehicle.badge}
              </Badge>
            )}
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <Badge className="mb-2 sm:mb-3 bg-secondary text-foreground border-0 text-xs">
                  {vehicle.region} • {vehicle.type}
                </Badge>
                <h3 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3">{vehicle.name}</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                  {vehicle.specs.map((spec, idx) => (
                    <span key={idx} className="flex items-center gap-1 sm:gap-2">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-accent rounded-full"></div>
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              <button className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors flex-shrink-0">
                <Icon name="Heart" size={20} className="sm:w-5.5 sm:h-5.5 text-foreground" />
              </button>
            </div>
            <div className="mt-auto flex items-end justify-between">
              <div>
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Стоимость</div>
                <div className="text-2xl sm:text-3xl font-bold">{vehicle.price}</div>
              </div>
              {showButton && (
                <Button className="bg-button-primary hover:bg-button-primary/90 px-6 sm:px-8 h-10 sm:h-12 text-sm sm:text-base">
                  Подробнее
                  <Icon name="ArrowRight" size={18} className="ml-2 sm:w-5 sm:h-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      onClick={onClick}
      className="group overflow-hidden bg-card border-border hover:border-accent transition-all duration-500 cursor-pointer"
    >
      <div className="relative h-[240px] md:h-[280px] overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          width="640"
          height="480"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {(vehicle.badge || vehicle.type) && (
          <Badge className="absolute top-4 right-4 z-20 bg-accent/90 backdrop-blur-sm text-accent-foreground border-0 px-3 py-1 text-xs">
            {vehicle.badge || vehicle.type}
          </Badge>
        )}
        <button className="absolute top-4 left-4 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors">
          <Icon name="Heart" size={18} className="md:w-5 md:h-5 text-foreground" />
        </button>
      </div>
      <div className="p-5 md:p-6">
        {vehicle.region && (
          <Badge className="mb-3 bg-secondary text-foreground border-0 text-xs">
            {vehicle.region}
          </Badge>
        )}
        <h3 className="font-bold text-lg md:text-xl mb-3 line-clamp-1">{vehicle.name}</h3>
        <div className="flex flex-wrap gap-2 mb-4 md:mb-5 text-xs text-muted-foreground">
          {vehicle.specs.map((spec, idx) => (
            <span key={idx} className="flex items-center gap-1">
              <div className="w-1 h-1 bg-accent rounded-full"></div>
              {spec}
            </span>
          ))}
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Стоимость</div>
            <div className="text-xl md:text-2xl font-bold">{vehicle.price}</div>
          </div>
          {showButton && (
            <Button size="sm" className="bg-button-primary hover:bg-button-primary/90">
              Подробнее
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default VehicleCard;