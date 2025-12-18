import Icon from "@/components/ui/icon";

interface SectionDividerProps {
  label?: string;
  variant?: 'default' | 'accent' | 'minimal';
}

const SectionDivider = ({ label, variant = 'default' }: SectionDividerProps) => {
  if (variant === 'minimal') {
    return (
      <div className="w-full py-16">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>
    );
  }

  if (variant === 'accent') {
    return (
      <div className="w-full py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full"></div>
        <div className="relative flex items-center justify-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/50 to-accent"></div>
          {label && (
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
              <Icon name="Sparkles" size={20} className="text-accent" />
              <span className="text-sm font-medium tracking-wider uppercase text-accent">{label}</span>
            </div>
          )}
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-accent/50 to-accent"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-20">
      <div className="relative flex items-center justify-center gap-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border"></div>
        {label && (
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium tracking-wider uppercase text-muted-foreground">{label}</span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          </div>
        )}
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border"></div>
      </div>
    </div>
  );
};

export default SectionDivider;
