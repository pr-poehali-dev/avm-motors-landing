import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Catalog = () => {
  const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000000]);
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const allVehicles = [
    { id: 1, name: "HONGQI E-HS9", type: "SUV", region: "Китай", condition: "Новый", price: 6850000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["600 л.с.", "0-100 за 4.9с", "Electric"], badge: "Хит продаж" },
    { id: 2, name: "NIO ET7", type: "Седан", region: "Китай", condition: "Новый", price: 4200000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["480 л.с.", "1000 км запас", "AWD"], badge: "Новинка" },
    { id: 3, name: "Zeekr 001", type: "Хэтчбек", region: "Китай", condition: "Новый", price: 5200000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["544 л.с.", "0-100 за 3.8с", "Electric"], badge: "Хит продаж" },
    { id: 4, name: "Li Auto L7", type: "SUV", region: "Китай", condition: "Новый", price: 5900000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["449 л.с.", "EREV", "5 мест"] },
    { id: 5, name: "BYD Han", type: "Седан", region: "Китай", condition: "Новый", price: 3900000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["517 л.с.", "605 км запас", "AWD"] },
    { id: 6, name: "Xpeng G9", type: "SUV", region: "Китай", condition: "Новый", price: 4800000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["551 л.с.", "702 км запас", "AWD"] },
    { id: 7, name: "Avatr 11", type: "SUV", region: "Китай", condition: "Новый", price: 4500000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["578 л.с.", "Electric", "AWD"] },
    { id: 8, name: "Geely Monjaro", type: "Кроссовер", region: "Китай", condition: "Новый", price: 3200000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["238 л.с.", "2.0T", "AWD"] },
    { id: 9, name: "Tank 500", type: "Внедорожник", region: "Китай", condition: "Новый", price: 5500000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["354 л.с.", "3.0T", "Рама"] },
    { id: 10, name: "BMW X5 M50i", type: "SUV", region: "Европа", condition: "Б/У", price: 8500000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["530 л.с.", "0-100 за 4.3с", "AWD"], badge: "Премиум" },
    { id: 11, name: "Mercedes-Benz S-Class", type: "Седан", region: "Европа", condition: "Б/У", price: 9200000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["367 л.с.", "Hybrid", "4MATIC"], badge: "Премиум" },
    { id: 12, name: "Audi Q7", type: "SUV", region: "Европа", condition: "Б/У", price: 7800000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["340 л.с.", "3.0 TFSI", "Quattro"] },
    { id: 13, name: "Porsche Cayenne", type: "SUV", region: "Европа", condition: "Б/У", price: 9500000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["340 л.с.", "3.0 V6", "AWD"], badge: "Премиум" },
    { id: 14, name: "Range Rover Sport", type: "Внедорожник", region: "Европа", condition: "Б/У", price: 10200000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["400 л.с.", "3.0 MHEV", "AWD"], badge: "Премиум" },
    { id: 15, name: "Volvo XC90", type: "SUV", region: "Европа", condition: "Б/У", price: 6800000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["250 л.с.", "PHEV", "7 мест"] },
    { id: 16, name: "BMW 7 Series", type: "Седан", region: "Европа", condition: "Б/У", price: 9800000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["380 л.с.", "3.0 Hybrid", "AWD"], badge: "Премиум" },
    { id: 17, name: "Jaguar F-PACE", type: "SUV", region: "Европа", condition: "Б/У", price: 7200000, image: "https://cdn.poehali.dev/projects/189fb1fe-c8be-4068-9b1c-3c1f73650f4a/files/efb03dd7-09c5-4008-b690-e653aab81b48.jpg", specs: ["300 л.с.", "3.0 Diesel", "AWD"] },
  ];

  const regions = ["Китай", "Европа"];
  const types = ["SUV", "Седан", "Хэтчбек", "Кроссовер", "Внедорожник"];

  const toggleFilter = (filter: string, type: 'region' | 'type' | 'condition') => {
    if (type === 'region') {
      setSelectedRegion(prev => 
        prev.includes(filter) ? prev.filter(r => r !== filter) : [...prev, filter]
      );
    } else if (type === 'type') {
      setSelectedType(prev => 
        prev.includes(filter) ? prev.filter(t => t !== filter) : [...prev, filter]
      );
    } else {
      setSelectedCondition(prev => 
        prev.includes(filter) ? prev.filter(c => c !== filter) : [...prev, filter]
      );
    }
  };

  const filteredVehicles = allVehicles.filter(vehicle => {
    if (searchQuery && !vehicle.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (selectedRegion.length > 0 && !selectedRegion.includes(vehicle.region)) return false;
    if (selectedType.length > 0 && !selectedType.includes(vehicle.type)) return false;
    if (selectedCondition.length > 0 && !selectedCondition.includes(vehicle.condition)) return false;
    if (vehicle.price < priceRange[0] || vehicle.price > priceRange[1]) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onVehicleRegionChange={() => {}} />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="w-full px-6 lg:px-12">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-sm tracking-[0.3em] uppercase text-accent">Каталог</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Автомобили из Китая и Европы</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Эксклюзивная коллекция автомобилей из Китая и Европы
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="w-full px-6 lg:px-12">
          <div className="flex gap-8">
            <aside className="w-64 flex-shrink-0 space-y-4 sticky top-32 h-fit">
              <Card className="p-4 bg-card border-border">
                <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                  <Icon name="Search" size={16} className="text-accent" />
                  Поиск
                </h3>
                <Input
                  type="text"
                  placeholder="Марка автомобиля"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-9 text-sm bg-secondary/50 border-border"
                />
              </Card>

              <Card className="p-4 bg-card border-border">
                <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-accent" />
                  Регион
                </h3>
                <div className="space-y-2">
                  {regions.map(region => (
                    <button
                      key={region}
                      onClick={() => toggleFilter(region, 'region')}
                      className={`w-full px-3 py-2 rounded-md text-sm text-left transition-all ${
                        selectedRegion.includes(region)
                          ? 'bg-accent text-accent-foreground font-medium'
                          : 'bg-secondary/50 hover:bg-secondary text-foreground'
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="p-4 bg-card border-border">
                <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                  <Icon name="Car" size={16} className="text-accent" />
                  Тип кузова
                </h3>
                <div className="space-y-2">
                  {types.map(type => (
                    <label
                      key={type}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedType.includes(type)}
                        onChange={() => toggleFilter(type, 'type')}
                        className="w-4 h-4 rounded border-2 border-border checked:bg-accent checked:border-accent"
                      />
                      <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </Card>

              <Card className="p-4 bg-card border-border">
                <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                  <Icon name="Badge" size={16} className="text-accent" />
                  Состояние
                </h3>
                <div className="space-y-2">
                  {["Новый", "Б/У"].map(condition => (
                    <label
                      key={condition}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCondition.includes(condition)}
                        onChange={() => toggleFilter(condition, 'condition')}
                        className="w-4 h-4 rounded border-2 border-border checked:bg-accent checked:border-accent"
                      />
                      <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                        {condition}
                      </span>
                    </label>
                  ))}
                </div>
              </Card>

              <Card className="p-4 bg-card border-border">
                <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                  <Icon name="DollarSign" size={16} className="text-accent" />
                  Цена
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={`${(priceRange[0] / 1000000).toFixed(1)} млн`}
                      readOnly
                      className="bg-secondary/50 border-border text-center text-xs h-9"
                    />
                    <Input
                      type="text"
                      value={`${(priceRange[1] / 1000000).toFixed(1)} млн`}
                      readOnly
                      className="bg-secondary/50 border-border text-center text-xs h-9"
                    />
                  </div>
                </div>
              </Card>

              <Button
                variant="outline"
                size="sm"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground text-xs"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRegion([]);
                  setSelectedType([]);
                  setSelectedCondition([]);
                  setPriceRange([0, 20000000]);
                }}
              >
                <Icon name="RotateCcw" size={18} className="mr-2" />
                Сбросить фильтры
              </Button>
            </aside>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
                <div className="text-lg">
                  Найдено: <span className="font-bold text-accent">{filteredVehicles.length}</span> автомобилей
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50">
                    <Icon name="ArrowUpDown" size={18} className="text-muted-foreground" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-transparent border-none outline-none text-sm font-medium cursor-pointer"
                    >
                      <option value="popular">Популярные</option>
                      <option value="price_asc">Цена: по возрастанию</option>
                      <option value="price_desc">Цена: по убыванию</option>
                      <option value="new">Новинки</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        viewMode === 'grid' ? 'bg-accent text-accent-foreground' : 'bg-secondary/50 hover:bg-secondary'
                      }`}
                    >
                      <Icon name="Grid3x3" size={20} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        viewMode === 'list' ? 'bg-accent text-accent-foreground' : 'bg-secondary/50 hover:bg-secondary'
                      }`}
                    >
                      <Icon name="List" size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-6"
              }>
                {filteredVehicles.map((vehicle) => (
                  viewMode === 'grid' ? (
                    <Card 
                      key={vehicle.id}
                      className="group overflow-hidden bg-card border-border hover:border-accent transition-all duration-500 cursor-pointer"
                    >
                      <div className="relative h-[280px] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {vehicle.badge && (
                          <Badge className="absolute top-4 right-4 z-20 bg-accent/90 backdrop-blur-sm text-accent-foreground border-0 px-3 py-1 text-xs">
                            {vehicle.badge}
                          </Badge>
                        )}
                        <button className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                          <Icon name="Heart" size={20} className="text-foreground" />
                        </button>
                      </div>
                      <div className="p-6">
                        <Badge className="mb-3 bg-secondary text-foreground border-0 text-xs">
                          {vehicle.region}
                        </Badge>
                        <h3 className="font-bold text-xl mb-3">{vehicle.name}</h3>
                        <div className="flex flex-wrap gap-2 mb-5 text-xs text-muted-foreground">
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
                            <div className="text-2xl font-bold">
                              {(vehicle.price / 1000000).toFixed(1)} млн ₽
                            </div>
                          </div>
                          <Button size="sm" className="bg-accent hover:bg-accent/90">
                            Подробнее
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ) : (
                    <Card
                      key={vehicle.id}
                      className="group overflow-hidden bg-card border-border hover:border-accent transition-all cursor-pointer"
                    >
                      <div className="flex gap-6 p-6">
                        <div className="relative w-80 h-52 overflow-hidden rounded-lg flex-shrink-0">
                          <img
                            src={vehicle.image}
                            alt={vehicle.name}
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
                            <div>
                              <Badge className="mb-3 bg-secondary text-foreground border-0 text-xs">
                                {vehicle.region} • {vehicle.type}
                              </Badge>
                              <h3 className="font-bold text-2xl mb-3">{vehicle.name}</h3>
                              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                {vehicle.specs.map((spec, idx) => (
                                  <span key={idx} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <button className="w-11 h-11 rounded-full bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-colors">
                              <Icon name="Heart" size={22} className="text-foreground" />
                            </button>
                          </div>
                          <div className="mt-auto flex items-end justify-between">
                            <div>
                              <div className="text-sm text-muted-foreground mb-1">Стоимость</div>
                              <div className="text-3xl font-bold">
                                {(vehicle.price / 1000000).toFixed(1)} млн ₽
                              </div>
                            </div>
                            <Button className="bg-accent hover:bg-accent/90 px-8 h-12">
                              Подробнее
                              <Icon name="ArrowRight" size={20} className="ml-2" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                ))}
              </div>

              {filteredVehicles.length === 0 && (
                <Card className="p-20 text-center bg-card border-border">
                  <Icon name="SearchX" size={64} className="text-muted-foreground mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Автомобили не найдены</h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Попробуйте изменить параметры фильтрации
                  </p>
                  <Button
                    className="bg-accent hover:bg-accent/90"
                    onClick={() => {
                      setSelectedRegion([]);
                      setSelectedType([]);
                      setPriceRange([0, 20000000]);
                    }}
                  >
                    Сбросить фильтры
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;