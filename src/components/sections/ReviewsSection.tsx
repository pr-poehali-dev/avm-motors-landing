import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import SectionHeader from "@/components/SectionHeader";

const ReviewsSection = () => {
  const [activeTab, setActiveTab] = useState('Видеообзоры');

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-accent/5 blur-[100px] rounded-full"></div>
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="mb-8 md:mb-16">
          <SectionHeader 
            label="Экспертиза"
            title="Обзоры"
          />
        </div>

        <div className="flex gap-2 md:gap-4 mb-8 md:mb-12 border-b border-border overflow-x-auto scrollbar-hide">
          {['Видеообзоры', 'Отзывы клиентов', 'Блог'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 md:pb-4 px-3 md:px-6 text-xs sm:text-sm md:text-base lg:text-lg font-medium transition-all relative whitespace-nowrap flex-shrink-0 ${
                activeTab === tab 
                  ? 'text-accent' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>
              )}
            </button>
          ))}
        </div>

        {activeTab === 'Видеообзоры' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              { title: 'Обзор Zeekr 001', time: '12:45', views: '24K' },
              { title: 'Тест-драйв BYD Han', time: '15:20', views: '31K' },
              { title: 'NIO ES6 в России', time: '10:15', views: '18K' },
            ].map((video, idx) => (
              <Card key={idx} className="group overflow-hidden bg-card border-border hover:border-accent transition-all cursor-pointer">
                <div className="relative h-[240px] bg-secondary/50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                  <div className="w-16 h-16 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform z-20">
                    <Icon name="Play" size={28} className="text-accent-foreground ml-1" />
                  </div>
                  <Badge className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-sm text-foreground border-0">
                    {video.time}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{video.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Icon name="Eye" size={16} />
                      {video.views}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'Отзывы клиентов' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              { name: 'Александр М.', car: 'Zeekr 001', text: 'Невероятный сервис! Получил автомобиль мечты за 42 дня. Всё прозрачно и профессионально.', rating: 5 },
              { name: 'Елена К.', car: 'BYD Han', text: 'Команда AVM Motors сопровождала на каждом этапе. Экономия составила более 2 млн рублей!', rating: 5 },
              { name: 'Дмитрий Р.', car: 'NIO ES6', text: 'Индивидуальный подход и внимание к деталям. Рекомендую всем, кто ценит качество.', rating: 5 },
            ].map((review, idx) => (
              <Card key={idx} className="p-8 bg-card border-border hover:border-accent transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed text-muted-foreground">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-bold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.car}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'Блог' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              { title: 'Как выбрать электромобиль из Китая', date: '15 дек 2024', category: 'Гид покупателя', excerpt: 'Подробное руководство по выбору идеального электромобиля с учётом технических характеристик и личных предпочтений.' },
              { title: 'Топ-5 премиум моделей 2024', date: '10 дек 2024', category: 'Обзоры', excerpt: 'Эксклюзивная подборка самых востребованных премиальных автомобилей китайского производства в этом году.' },
              { title: 'Юридические аспекты импорта', date: '5 дек 2024', category: 'Юридическая база', excerpt: 'Всё о легальном ввозе автомобилей из Китая: документы, сертификация и регистрация в России.' },
            ].map((post, idx) => (
              <Card key={idx} className="group overflow-hidden bg-card border-border hover:border-accent transition-all cursor-pointer">
                <div className="relative h-[280px] bg-gradient-to-br from-accent/20 to-secondary/50"></div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-accent/10 text-accent border-0 hover:bg-accent/20">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
                  <Button variant="ghost" className="text-accent hover:text-accent hover:bg-accent/10 p-0">
                    Читать далее
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
