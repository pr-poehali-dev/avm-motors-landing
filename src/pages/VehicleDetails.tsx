import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Vehicle, vehiclesChina, vehiclesEurope, vehiclesAmerican, vehiclesJapan, vehiclesKorea } from "@/data/vehicles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackgroundBlur } from "@/components/ui/decorative-background";

const VehicleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const allVehicles = [
      ...vehiclesChina.map((v, i) => ({ ...v, id: i + 1, region: "Китай" })),
      ...vehiclesEurope.map((v, i) => ({ ...v, id: vehiclesChina.length + i + 1, region: "Европа" })),
      ...vehiclesAmerican.map((v, i) => ({ ...v, id: vehiclesChina.length + vehiclesEurope.length + i + 1, region: "Америка" })),
      ...vehiclesJapan.map((v, i) => ({ ...v, id: vehiclesChina.length + vehiclesEurope.length + vehiclesAmerican.length + i + 1, region: "Япония" })),
      ...vehiclesKorea.map((v, i) => ({ ...v, id: vehiclesChina.length + vehiclesEurope.length + vehiclesAmerican.length + vehiclesJapan.length + i + 1, region: "Корея" })),
    ];

    const foundVehicle = allVehicles.find(v => v.id === Number(id));
    if (foundVehicle) {
      setVehicle(foundVehicle);
    } else {
      navigate('/catalog');
    }
  }, [id, navigate]);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const gallery = vehicle.gallery && vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.image];

  const handleConsultation = () => {
    const message = encodeURIComponent(`Здравствуйте! Интересует ${vehicle.name}`);
    window.open(`https://t.me/imVlad_ok?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onVehicleRegionChange={() => {}} />
      
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 relative overflow-hidden">
        <BackgroundBlur variant="details" />
        
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <Button
            variant="outline"
            onClick={() => navigate('/catalog')}
            className="mb-6 gap-2"
          >
            <Icon name="ArrowLeft" size={18} />
            Назад в каталог
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary">
                <img
                  src={gallery[selectedImage]}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-[4/3] rounded-lg overflow-hidden transition-all ${
                        selectedImage === index
                          ? 'ring-2 ring-accent scale-95'
                          : 'hover:scale-95 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${vehicle.name} - фото ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-3">
                  {vehicle.type}
                </Badge>
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                  {vehicle.name}
                </h1>
                <p className="text-3xl font-bold text-accent mb-2">
                  {vehicle.price}
                </p>
                <p className="text-sm text-muted-foreground">
                  Цена указана с учетом доставки в Беларусь
                </p>
              </div>

              {vehicle.description && (
                <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                  <p className="text-foreground leading-relaxed">
                    {vehicle.description}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                {vehicle.year && (
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Calendar" size={18} className="text-accent" />
                      <span className="text-sm text-muted-foreground">Год выпуска</span>
                    </div>
                    <p className="font-semibold">{vehicle.year}</p>
                  </div>
                )}

                {vehicle.mileage && (
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Gauge" size={18} className="text-accent" />
                      <span className="text-sm text-muted-foreground">Пробег</span>
                    </div>
                    <p className="font-semibold">{vehicle.mileage}</p>
                  </div>
                )}

                {vehicle.engine && (
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Cog" size={18} className="text-accent" />
                      <span className="text-sm text-muted-foreground">Двигатель</span>
                    </div>
                    <p className="font-semibold">{vehicle.engine}</p>
                  </div>
                )}

                {vehicle.power && (
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Zap" size={18} className="text-accent" />
                      <span className="text-sm text-muted-foreground">Мощность</span>
                    </div>
                    <p className="font-semibold">{vehicle.power}</p>
                  </div>
                )}

                {vehicle.fuel && (
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Fuel" size={18} className="text-accent" />
                      <span className="text-sm text-muted-foreground">Топливо</span>
                    </div>
                    <p className="font-semibold">{vehicle.fuel}</p>
                  </div>
                )}

                {vehicle.transmission && (
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Settings" size={18} className="text-accent" />
                      <span className="text-sm text-muted-foreground">Коробка</span>
                    </div>
                    <p className="font-semibold">{vehicle.transmission}</p>
                  </div>
                )}

                {vehicle.drive && (
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Compass" size={18} className="text-accent" />
                      <span className="text-sm text-muted-foreground">Привод</span>
                    </div>
                    <p className="font-semibold">{vehicle.drive}</p>
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-4">
                <Button
                  onClick={handleConsultation}
                  className="w-full h-12 text-base font-semibold"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                
                <p className="text-sm text-center text-muted-foreground">
                  Наш менеджер свяжется с вами и ответит на все вопросы
                </p>
              </div>

              <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <Icon name="Info" size={20} className="text-accent mt-0.5" />
                  <div className="text-sm text-foreground">
                    <p className="font-semibold mb-1">Что входит в стоимость:</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Покупка автомобиля</li>
                      <li>• Доставка в Беларусь</li>
                      <li>• Таможенное оформление</li>
                      <li>• Регистрация в ГАИ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehicleDetails;
