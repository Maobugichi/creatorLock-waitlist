type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  text: string;
};

export const Card = ({ icon: Icon, title, text }: FeatureCardProps) => {
  return (
    <div className="group relative flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition-all duration-300 hover:border-[#FF5C00]/40 hover:bg-neutral-800/60 w-[90%]">
      
      
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(255,92,0,0.08) 0%, transparent 70%)' }}
      />

    
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF5C00]/10 ring-1 ring-[#FF5C00]/20 transition-all duration-300 group-hover:bg-[#FF5C00]/20">
        <Icon className="h-5 w-5 text-[#FF5C00]" weight="duotone" />
      </div>

   
      <div className="flex flex-col gap-1">
        <h2 className="text-[15px] font-semibold tracking-tight text-white">
          {title}
        </h2>
        <p className="text-sm leading-relaxed text-neutral-400">
          {text}
        </p>
      </div>
    </div>
  );
};