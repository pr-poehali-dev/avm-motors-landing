import { useState } from "react";
import { Vehicle } from "@/data/vehicles";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface VehicleModalProps {
  vehicle: Vehicle | null;
  open: boolean;
  onClose: () => void;
}

const VehicleModal = ({ vehicle, open, onClose }: VehicleModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!vehicle) return null;

  const gallery = vehicle.gallery || [vehicle.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const specs = [
    { icon: "Calendar", label: "Год", value: vehicle.year },
    { icon: "Gauge", label: "Пробег", value: vehicle.mileage },
    { icon: "Fuel", label: "Топливо", value: vehicle.fuel },
    { icon: "Settings", label: "КПП", value: vehicle.transmission },
    { icon: "Zap", label: "Привод", value: vehicle.drive },
    { icon: "Activity", label: "Двигатель", value: vehicle.engine },
    { icon: "TrendingUp", label: "Мощность", value: vehicle.power },
  ].filter((spec) => spec.value);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          {/* Image Gallery */}
          <div className="relative w-full h-[400px] bg-secondary/30">
            <img
              src={gallery[currentImageIndex]}
              alt={vehicle.name}
              className="w-full h-full object-cover"
            />
            
            {gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-10"
                >
                  <Icon name="ChevronLeft" size={24} className="text-foreground" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-10"
                >
                  <Icon name="ChevronRight" size={24} className="text-foreground" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-accent w-6'
                          : 'bg-background/60 hover:bg-background/80'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            <Badge className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-accent-foreground border-0 px-3 py-1 text-sm">
              {vehicle.type}
            </Badge>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl md:text-3xl font-bold mb-2">
                {vehicle.name}
              </DialogTitle>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-accent">{vehicle.price}</div>
              </div>
            </DialogHeader>

            {/* Specifications Grid */}
            {specs.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Icon name="ListChecks" size={20} className="text-accent" />
                  Характеристики
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {specs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={spec.icon} size={20} className="text-accent" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-muted-foreground mb-1">{spec.label}</div>
                        <div className="font-semibold truncate">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            {vehicle.description && (
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Icon name="FileText" size={20} className="text-accent" />
                  Описание
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {vehicle.description}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="flex-1 bg-button-primary hover:bg-button-primary/90 h-12 text-base"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  onClose();
                }}
              >
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="sm:w-auto h-12 text-base border-2"
              >
                <Icon name="Heart" size={20} className="mr-2" />
                В избранное
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VehicleModal;
