import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Vehicle } from "@/data/vehicles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BackgroundBlur } from "@/components/ui/decorative-background";
import CostCalculator from "@/components/CostCalculator";

const VehicleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [vehiclesData, setVehiclesData] = useState<any>(null);

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

  useEffect(() => {
    if (!vehiclesData) return;

    const allVehicles = [
      ...vehiclesData.vehiclesChina.map((v: Vehicle, i: number) => ({ ...v, id: i + 1, region: "Китай" })),
      ...vehiclesData.vehiclesEurope.map((v: Vehicle, i: number) => ({ ...v, id: vehiclesData.vehiclesChina.length + i + 1, region: "Европа" })),
      ...vehiclesData.vehiclesAmerican.map((v: Vehicle, i: number) => ({ ...v, id: vehiclesData.vehiclesChina.length + vehiclesData.vehiclesEurope.length + i + 1, region: "Америка" })),
      ...vehiclesData.vehiclesJapan.map((v: Vehicle, i: number) => ({ ...v, id: vehiclesData.vehiclesChina.length + vehiclesData.vehiclesEurope.length + vehiclesData.vehiclesAmerican.length + i + 1, region: "Япония" })),
      ...vehiclesData.vehiclesKorea.map((v: Vehicle, i: number) => ({ ...v, id: vehiclesData.vehiclesChina.length + vehiclesData.vehiclesEurope.length + vehiclesData.vehiclesAmerican.length + vehiclesData.vehiclesJapan.length + i + 1, region: "Корея" })),
    ];

    const foundVehicle = allVehicles.find((v: any) => v.id === Number(id));
    if (foundVehicle) {
      setVehicle(foundVehicle);
    } else {
      navigate('/catalog');
    }
  }, [id, navigate, vehiclesData]);

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

  const handleTelegram = () => {
    const message = encodeURIComponent(`Здравствуйте! Интересует ${vehicle.name}`);
    window.open(`https://t.me/imVlad_ok?text=${message}`, '_blank');
  };

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onVehicleRegionChange={() => {}} />
      
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 relative">
        <BackgroundBlur variant="details" />
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <Button
            variant="outline"
            onClick={() => navigate('/catalog')}
            className="mb-6 gap-2"
          >
            <Icon name="ArrowLeft" size={18} />
            Назад в каталог
          </Button>

          <div className="flex justify-between items-start mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold">{vehicle.name}</h1>
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <Icon name="Heart" size={24} className={isLiked ? "fill-accent text-accent" : ""} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-secondary group">
                <img
                  src={gallery[selectedImage]}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Icon name="ChevronLeft" size={24} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Icon name="ChevronRight" size={24} />
                    </button>
                  </>
                )}
              </div>

              {gallery.length > 1 && (
                <div className="grid grid-cols-6 gap-2">
                  {gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-[4/3] rounded overflow-hidden transition-all ${
                        selectedImage === index
                          ? 'ring-2 ring-accent'
                          : 'opacity-60 hover:opacity-100'
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
              <div className="bg-card border border-border rounded-lg p-6 space-y-6 sticky top-28">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Цена под ключ</div>
                  <p className="text-3xl font-bold mb-2">{vehicle.price}</p>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">В кредит от</span>
                      <span className="text-xl font-bold text-accent">
                        {vehicle.price.replace(/[^0-9]/g, '') ? 
                          Math.round(parseInt(vehicle.price.replace(/[^0-9]/g, '')) / 60).toLocaleString('ru-RU') + ' $' 
                          : vehicle.price}/мес
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="Truck" size={18} className="text-blue-accent" />
                    <span className="text-sm">Доставка ≈ 30 дней</span>
                  </div>
                </div>

                <Button
                  onClick={handleConsultation}
                  className="w-full bg-accent hover:bg-accent/90 text-white h-12 text-base font-semibold"
                >
                  Связаться
                </Button>

                <Button
                  onClick={handleTelegram}
                  variant="outline"
                  className="w-full h-12 text-base font-semibold gap-2"
                >
                  <Icon name="Send" size={20} />
                  Telegram
                </Button>

                <Button
                  onClick={() => setShowCalculator(true)}
                  variant="outline"
                  className="w-full h-12 text-base font-semibold gap-2"
                >
                  <Icon name="Calculator" size={20} />
                  Рассчитать
                </Button>

                <div className="pt-4 border-t border-border space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Shield" size={18} className="text-green-accent" />
                    <span className="text-sm">Гарантия сроков доставки</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-8 space-y-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Характеристики</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Год выпуска</span>
                  <span className="font-semibold">{vehicle.year || '—'}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Марка</span>
                  <span className="font-semibold">{vehicle.name.split(' ')[0]}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Модель</span>
                  <span className="font-semibold">{vehicle.name.split(' ').slice(1).join(' ')}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Пробег</span>
                  <span className="font-semibold">{vehicle.mileage || '—'}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Тип топлива</span>
                  <span className="font-semibold">{vehicle.fuel || '—'}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Двигатель</span>
                  <span className="font-semibold">{vehicle.engine || '—'}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Коробка</span>
                  <span className="font-semibold">{vehicle.transmission || '—'}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Мощность</span>
                  <span className="font-semibold">{vehicle.power || '—'}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Тип повреждения</span>
                  <span className="font-semibold">Столкновение</span>
                </div>

              </div>
            </div>

            {vehicle.description && (
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Важное про {vehicle.name}</h2>
                <p className="text-foreground leading-relaxed">{vehicle.description}</p>
              </div>
            )}

            {vehiclesData && (() => {
              const allVehicles = [
                ...vehiclesData.vehiclesChina.map((v: Vehicle, i: number) => ({ ...v, id: i + 1, region: "Китай" })),
                ...vehiclesData.vehiclesEurope.map((v: Vehicle, i: number) => ({ ...v, id: vehiclesData.vehiclesChina.length + i + 1, region: "Европа" })),
                ...vehiclesData.vehiclesAmerican.map((v: Vehicle, i: number) => ({ ...v, id: vehiclesData.vehiclesChina.length + vehiclesData.vehiclesEurope.length + i + 1, region: "Америка" })),
                ...vehiclesData.vehiclesJapan.map((v: Vehicle, i: number) => ({ ...v, id: vehiclesData.vehiclesChina.length + vehiclesData.vehiclesEurope.length + vehiclesData.vehiclesAmerican.length + i + 1, region: "Япония" })),
                ...vehiclesData.vehiclesKorea.map((v: Vehicle, i: number) => ({ ...v, id: vehiclesData.vehiclesChina.length + vehiclesData.vehiclesEurope.length + vehiclesData.vehiclesAmerican.length + vehiclesData.vehiclesJapan.length + i + 1, region: "Корея" })),
              ];

              const currentPrice = parseInt(vehicle.price.replace(/[^0-9]/g, '')) || 0;
              const priceMin = currentPrice * 0.8;
              const priceMax = currentPrice * 1.2;

              const similarVehicles = allVehicles
                .filter((v: any) => {
                  if (v.id === vehicle.id) return false;
                  
                  const vPrice = parseInt(v.price.replace(/[^0-9]/g, '')) || 0;
                  const isPriceMatch = vPrice >= priceMin && vPrice <= priceMax;
                  const isBodyTypeMatch = v.type === vehicle.type;
                  const isPowerMatch = v.power === vehicle.power;
                  const isFuelMatch = v.fuel === vehicle.fuel;
                  
                  return isPriceMatch && isBodyTypeMatch && isPowerMatch && isFuelMatch;
                })
                .slice(0, 4);

              return similarVehicles.length > 0 ? (
                <div className="bg-card border border-border rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-6">Похожие</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {similarVehicles.map((v: any) => (
                      <div
                        key={v.id}
                        onClick={() => navigate(`/catalog/${v.id}`)}
                        className="bg-secondary rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={v.image}
                            alt={v.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4 space-y-2">
                          <h3 className="font-semibold text-sm line-clamp-2">{v.name}</h3>
                          <p className="text-accent font-bold">{v.price}</p>
                          <div className="flex flex-wrap gap-1 text-xs text-muted-foreground">
                            {v.specs.slice(0, 3).map((spec: string, i: number) => (
                              <span key={i}>{spec}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null;
            })()}

            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">5 причин выбрать нас</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-secondary rounded-lg flex items-center justify-center">
                    <Icon name="Shield" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-semibold">Гарантия сроков доставки</h3>
                  <p className="text-sm text-muted-foreground">Привезем за 2-3 месяца с гарантией</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-secondary rounded-lg flex items-center justify-center">
                    <Icon name="Car" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-semibold">Под Ключ</h3>
                  <p className="text-sm text-muted-foreground">Привезем и поможем с ремонтом авто</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-secondary rounded-lg flex items-center justify-center">
                    <Icon name="TrendingDown" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-semibold">Выгода до 40% от рынка</h3>
                  <p className="text-sm text-muted-foreground">Авто с аукциона выгоднее чем покупка на локальном рынке</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-secondary rounded-lg flex items-center justify-center">
                    <Icon name="ListChecks" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-semibold">Бесплатный подбор</h3>
                  <p className="text-sm text-muted-foreground">Подберем 5-10 вариантов совершенно бесплатно</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-secondary rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-semibold">Связь 24/7</h3>
                  <p className="text-sm text-muted-foreground">Круглосуточно поддерживаем связь с нашими клиентами</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {showCalculator && (
        <CostCalculator
          basePrice={parseInt(vehicle.price.replace(/[^0-9]/g, '')) || 1143364}
          vehicleName={vehicle.name}
          onClose={() => setShowCalculator(false)}
        />
      )}
    </div>
  );
};

export default VehicleDetails;