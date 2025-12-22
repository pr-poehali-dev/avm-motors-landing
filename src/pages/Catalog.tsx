import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { vehiclesChina, vehiclesEurope, vehiclesAmerican, vehiclesJapan, vehiclesKorea } from "@/data/vehicles";

const Catalog = () => {
  const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000000]);
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [openFilters, setOpenFilters] = useState<{[key: string]: boolean}>({
    search: true,
    region: true,
    type: true,
    condition: true,
    price: true
  });

  const toggleFilterSection = (section: string) => {
    setOpenFilters(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const allVehicles = [
    ...vehiclesChina.map((v, i) => ({ ...v, id: i + 1, region: "Китай", condition: "Новый", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) })),
    ...vehiclesEurope.map((v, i) => ({ ...v, id: vehiclesChina.length + i + 1, region: "Европа", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) * 1000000 })),
    ...vehiclesAmerican.map((v, i) => ({ ...v, id: vehiclesChina.length + vehiclesEurope.length + i + 1, region: "Америка", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) })),
    ...vehiclesJapan.map((v, i) => ({ ...v, id: vehiclesChina.length + vehiclesEurope.length + vehiclesAmerican.length + i + 1, region: "Япония", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) })),
    ...vehiclesKorea.map((v, i) => ({ ...v, id: vehiclesChina.length + vehiclesEurope.length + vehiclesAmerican.length + vehiclesJapan.length + i + 1, region: "Корея", condition: "Б/У", priceNum: parseFloat(v.price.replace(/[^0-9.]/g, '')) })),
  ];

  const regions = ["Китай", "Европа", "Америка", "Япония", "Корея"];
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
    if (vehicle.priceNum < priceRange[0] || vehicle.priceNum > priceRange[1]) return false;
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
            <aside className="w-64 flex-shrink-0 space-y-2 sticky top-32 max-h-[calc(100vh-9rem)] overflow-y-auto scrollbar-hide">
              <Card className="bg-card border-border overflow-hidden">
                <button
                  onClick={() => toggleFilterSection('search')}
                  className="w-full p-3 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Icon name="Search" size={16} className="text-accent" />
                    <h3 className="text-sm font-bold">Поиск</h3>
                  </div>
                  <Icon 
                    name="ChevronDown" 
                    size={16} 
                    className={`text-muted-foreground transition-transform ${openFilters.search ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFilters.search && (
                  <div className="px-3 pb-3">
                    <Input
                      type="text"
                      placeholder="Марка автомобиля"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-9 text-sm bg-secondary/50 border-border"
                    />
                  </div>
                )}
              </Card>

              <Card className="bg-card border-border overflow-hidden">
                <button
                  onClick={() => toggleFilterSection('region')}
                  className="w-full p-3 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-accent" />
                    <h3 className="text-sm font-bold">Регион</h3>
                  </div>
                  <Icon 
                    name="ChevronDown" 
                    size={16} 
                    className={`text-muted-foreground transition-transform ${openFilters.region ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFilters.region && (
                  <div className="px-3 pb-3 space-y-2">
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
                )}
              </Card>

              <Card className="bg-card border-border overflow-hidden">
                <button
                  onClick={() => toggleFilterSection('type')}
                  className="w-full p-3 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Icon name="Car" size={16} className="text-accent" />
                    <h3 className="text-sm font-bold">Тип кузова</h3>
                  </div>
                  <Icon 
                    name="ChevronDown" 
                    size={16} 
                    className={`text-muted-foreground transition-transform ${openFilters.type ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFilters.type && (
                  <div className="px-3 pb-3 space-y-2">
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
                )}
              </Card>

              <Card className="bg-card border-border overflow-hidden">
                <button
                  onClick={() => toggleFilterSection('condition')}
                  className="w-full p-3 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Icon name="Badge" size={16} className="text-accent" />
                    <h3 className="text-sm font-bold">Состояние</h3>
                  </div>
                  <Icon 
                    name="ChevronDown" 
                    size={16} 
                    className={`text-muted-foreground transition-transform ${openFilters.condition ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFilters.condition && (
                  <div className="px-3 pb-3 space-y-2">
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
                )}
              </Card>

              <Card className="bg-card border-border overflow-hidden">
                <button
                  onClick={() => toggleFilterSection('price')}
                  className="w-full p-3 flex items-center justify-between hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Icon name="DollarSign" size={16} className="text-accent" />
                    <h3 className="text-sm font-bold">Цена</h3>
                  </div>
                  <Icon 
                    name="ChevronDown" 
                    size={16} 
                    className={`text-muted-foreground transition-transform ${openFilters.price ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFilters.price && (
                  <div className="px-3 pb-3">
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
                )}
              </Card>

              <Button
                variant="outline"
                size="sm"
                className="w-full border-accent text-accent hover:bg-button-primary hover:text-accent-foreground text-xs"
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
                        <button className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors">
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
                              {vehicle.price}
                            </div>
                          </div>
                          <Button size="sm" className="bg-button-primary hover:bg-button-primary/90">
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
                                {vehicle.price}
                              </div>
                            </div>
                            <Button className="bg-button-primary hover:bg-button-primary/90 px-8 h-12">
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
                    className="bg-button-primary hover:bg-button-primary/90"
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