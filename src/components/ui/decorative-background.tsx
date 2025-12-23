import { cn } from '@/lib/utils';

interface BackgroundBlurProps {
  variant?: 'hero' | 'catalog' | 'footer' | 'custom';
  className?: string;
}

export const BackgroundBlur = ({ variant = 'hero', className }: BackgroundBlurProps) => {
  if (variant === 'hero') {
    return (
      <div className={cn("absolute inset-0 pointer-events-none", className)}>
        <div className="absolute -top-40 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-accent/5 dark:bg-accent/5 blur-[180px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-accent/10 dark:bg-accent/10 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/3 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-blue-accent/5 dark:bg-accent/5 blur-[150px] rounded-full"></div>
      </div>
    );
  }

  if (variant === 'catalog') {
    return (
      <div className={cn("absolute top-0 right-1/4 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-accent/5 blur-[100px] md:blur-[120px] rounded-full", className)} />
    );
  }

  if (variant === 'footer') {
    return (
      <div className={cn("absolute top-0 left-1/4 w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full", className)} />
    );
  }

  return null;
};

export const DecorativeShapes = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      <div className="hidden md:block absolute top-1/3 right-1/4 w-2 h-96 bg-gradient-to-b from-blue-accent/40 dark:from-accent/40 to-transparent rotate-12"></div>
      <div className="hidden md:block absolute top-1/2 right-[30%] w-1 h-64 bg-gradient-to-b from-blue-accent/60 dark:from-accent/60 to-transparent -rotate-6"></div>
      <div className="hidden md:block absolute top-1/4 right-[20%] w-32 h-32 border border-blue-accent/20 dark:border-accent/20 rotate-45"></div>
      <div className="hidden md:block absolute top-[60%] right-[35%] w-24 h-24 border border-blue-accent/30 dark:border-accent/30 rotate-12"></div>
      <div className="hidden md:block absolute top-1/4 left-[10%] w-1 h-48 bg-gradient-to-b from-transparent via-blue-accent/30 dark:via-accent/30 to-transparent rotate-[-15deg]"></div>
      <div className="hidden md:block absolute bottom-1/4 left-[15%] w-20 h-20 border border-blue-accent/15 dark:border-accent/15 rotate-[-30deg]"></div>
    </div>
  );
};
