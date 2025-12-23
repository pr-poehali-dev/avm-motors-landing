import { useState, useEffect } from "react";
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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Reset image index when modal opens
  useEffect(() => {
    if (open) {
      setCurrentImageIndex(0);
    }
  }, [open]);

  if (!vehicle) return null;

  const gallery = vehicle.gallery || [vehicle.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  // Handle touch swipe for image gallery
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && gallery.length > 1) {
      nextImage();
    }
    if (isRightSwipe && gallery.length > 1) {
      prevImage();
    }

    setTouchStart(0);
    setTouchEnd(0);
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
      <DialogContent className="max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto scroll-smooth p-0 gap-0 w-full sm:w-[calc(100%-4rem)] shadow-2xl">
        <div className="relative">
          {/* Mobile Close Button */}
          <button
            onClick={onClose}
            className="sm:hidden absolute top-3 left-3 z-50 w-10 h-10 rounded-full bg-background/95 backdrop-blur-md shadow-lg flex items-center justify-center hover:bg-background transition-all duration-200 hover:scale-110 border border-border/50"
          >
            <Icon name="X" size={20} className="text-foreground" />
          </button>
          
          {/* Mobile Swipe Indicator */}
          <div className="sm:hidden sticky top-0 z-40 flex justify-center pt-3 pb-2 bg-background/95 backdrop-blur-sm border-b border-border/50">
            <div className="w-12 h-1 rounded-full bg-border/60"></div>
          </div>

          {/* Image Gallery */}
          <div 
            className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] bg-secondary/30 touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={gallery[currentImageIndex]}
                alt={vehicle.name}
                width="1200"
                height="800"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover select-none transition-opacity duration-300"
                draggable={false}
              />
              {/* Gradient overlays for better badge visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none"></div>
            </div>
            
            {gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-10"
                >
                  <Icon name="ChevronLeft" size={20} className="sm:w-6 sm:h-6 text-foreground" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-10"
                >
                  <Icon name="ChevronRight" size={20} className="sm:w-6 sm:h-6 text-foreground" />
                </button>
                
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
                  {gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-1.5 sm:h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? 'bg-accent w-5 sm:w-6'
                          : 'bg-background/60 hover:bg-background/80 w-1.5 sm:w-2'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            <Badge className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-accent/90 backdrop-blur-sm text-accent-foreground border-0 px-2.5 sm:px-3 py-1 text-xs sm:text-sm">
              {vehicle.type}
            </Badge>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 md:p-8 pb-6 sm:pb-6 md:pb-8">
            <DialogHeader className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
              <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                {vehicle.name}
              </DialogTitle>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="text-2xl sm:text-3xl font-bold text-accent">{vehicle.price}</div>
              </div>
            </DialogHeader>

            {/* Specifications Grid */}
            {specs.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2">
                  <Icon name="ListChecks" size={18} className="sm:w-5 sm:h-5 text-accent" />
                  Характеристики
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {specs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={spec.icon} size={16} className="sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] sm:text-xs text-muted-foreground mb-0.5 sm:mb-1">{spec.label}</div>
                        <div className="text-xs sm:text-sm font-semibold truncate">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            {vehicle.description && (
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2">
                  <Icon name="FileText" size={18} className="sm:w-5 sm:h-5 text-accent" />
                  Описание
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {vehicle.description}
                </p>
              </div>
            )}

            {/* Action Buttons - Fixed at bottom on mobile */}
            <div className="flex flex-col gap-2 sm:hidden">
              <Button
                size="lg"
                className="w-full bg-button-primary hover:bg-button-primary/90 h-12 text-sm font-medium shadow-lg"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  onClose();
                }}
              >
                <Icon name="MessageSquare" size={18} className="mr-2" />
                Получить консультацию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full h-12 text-sm border-2 font-medium"
              >
                <Icon name="Heart" size={18} className="mr-2" />
                В избранное
              </Button>
            </div>

            {/* Action Buttons - Normal on desktop */}
            <div className="hidden sm:flex flex-row gap-3">
              <Button
                size="lg"
                className="flex-1 bg-button-primary hover:bg-button-primary/90 h-12 text-base font-medium"
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
                className="w-auto h-12 text-base border-2 font-medium"
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