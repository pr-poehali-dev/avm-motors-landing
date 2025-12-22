import { useState } from "react";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { workflowSteps, faqItems } from "@/data/content";

const WorkflowSection = () => {
  const [workflowTab, setWorkflowTab] = useState('Этапы работ');
  const [openStep, setOpenStep] = useState<number | null>(null);

  const renderTabButtons = (tabs: string[], activeTab: string, setActiveTab: (tab: string) => void) => (
    <div className="flex gap-2 md:gap-4 border-b border-border overflow-x-auto scrollbar-hide pb-0 -mb-px">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-3 md:pb-4 px-3 md:px-6 text-sm md:text-base lg:text-lg font-medium transition-all relative whitespace-nowrap flex-shrink-0 ${
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
  );

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-sm tracking-[0.3em] uppercase text-accent">Процесс</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-8">Как мы работаем</h2>
          </div>

          <div className="flex gap-4 mb-12 border-b border-border">
            {renderTabButtons(['Этапы работ', 'Вопрос-ответ'], workflowTab, setWorkflowTab)}
          </div>

          {workflowTab === 'Этапы работ' && (
            <div className="space-y-4">
              {workflowSteps.map((step, idx) => (
                <Card
                  key={idx}
                  className="bg-background border-border hover:border-accent transition-all cursor-pointer group"
                  onClick={() => setOpenStep(openStep === idx ? null : idx)}
                >
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                        <Icon name={step.icon} size={28} className="text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Шаг {idx + 1}.</div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                    </div>
                    <Icon
                      name="ChevronDown"
                      size={24}
                      className={`text-accent transition-transform flex-shrink-0 ${openStep === idx ? 'rotate-180' : ''}`}
                    />
                  </div>
                  {openStep === idx && (
                    <div className="px-6 pb-6">
                      <p className="text-lg text-muted-foreground leading-relaxed ml-[88px]">
                        {step.desc}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}

          {workflowTab === 'Вопрос-ответ' && (
            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <Card
                  key={idx}
                  className="bg-background border-border hover:border-accent transition-all cursor-pointer"
                  onClick={() => setOpenStep(openStep === idx ? null : idx)}
                >
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold pr-4">{item.q}</h3>
                    <Icon
                      name="ChevronDown"
                      size={24}
                      className={`text-accent transition-transform flex-shrink-0 ${openStep === idx ? 'rotate-180' : ''}`}
                    />
                  </div>
                  {openStep === idx && (
                    <div className="px-6 pb-6">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
