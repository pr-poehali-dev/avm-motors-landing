import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

const Calculator = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header onVehicleRegionChange={() => {}} />
      
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="text-sm text-gray-400 mb-8 tracking-wider">
              SINGLE OPERATOR | TACTICAL MARKETING
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-8">
              <span className="text-white">Я — ваш </span>
              <span className="text-red-600">уберменш</span>
              <br />
              <span className="text-white">в борьбе за ваших</span>
              <br />
              <span className="text-white">клиентов</span>
            </h1>
            
            <div className="space-y-4 text-lg sm:text-xl text-gray-300 max-w-2xl mb-6">
              <p>
                Не агентство. Не конвейер.<br />
                Системный маркетинг, где считаются <span className="text-white font-semibold">деньги</span>, а не клики.
              </p>
            </div>
            
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-12">
              БЕРУ 2-3 ПРОЕКТА. ПОГРУЖАЮСЬ В ЭКОНОМИКУ. ОТВЕЧАЮ ЗА РЕЗУЛЬТАТ.
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 rounded-none text-lg"
            >
              ОБСУДИТЬ ЗАДАЧУ БЕЗ ПРЕЗЕНТАЦИЙ →
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12 border-t border-gray-800">
            <div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Опыт</div>
              <div className="text-3xl font-bold text-red-600">Roadmap</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Бюджет</div>
              <div className="text-3xl font-bold text-red-600">Targeting</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Канал</div>
              <div className="text-3xl font-bold text-red-600">Creatives</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Ниша</div>
              <div className="text-3xl font-bold text-red-600">Systematics</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
