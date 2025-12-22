interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ label, title, description, centered = false }: SectionHeaderProps) => {
  return (
    <div className={`mb-8 sm:mb-12 md:mb-20 ${centered ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6 ${centered ? 'justify-center' : ''}`}>
        {centered && <div className="h-px w-6 sm:w-8 md:w-12 bg-accent"></div>}
        {!centered && <div className="h-px w-6 sm:w-8 md:w-12 bg-accent"></div>}
        <span className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase text-accent">
          {label}
        </span>
        {centered && <div className="h-px w-6 sm:w-8 md:w-12 bg-accent"></div>}
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;