import type { OrbitItem } from "./hero-date";

const OrbitCard = ({ item }: { item: OrbitItem }) => {
  const Icon = item.icon;

  return (
    <div className="relative flex w-[150px] flex-col gap-1.5 rounded-xl border border-primary/25 bg-card/70 p-3 shadow-[0_15px_45px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:w-[170px] sm:gap-2 sm:rounded-2xl sm:p-3.5 lg:w-[200px] lg:p-4">
      <div className="absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent sm:inset-x-4" />

      <div className="flex items-center gap-2 sm:gap-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 sm:h-7 sm:w-7 sm:rounded-lg lg:h-8 lg:w-8">
          <Icon className="h-3 w-3 text-primary sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
        </span>

        <h3 className="text-xs font-semibold text-foreground sm:text-sm">{item.title}</h3>
      </div>

      <p className="hidden text-[10px] leading-relaxed text-muted-foreground sm:block">
        {item.description}
      </p>
    </div>
  );
};

export default OrbitCard;