"use client";

interface MetricWidgetProps {
  icon: string;
  value: string;
  label: string;
}

export function MetricWidget({ icon, value, label }: MetricWidgetProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-earth/[0.06] border border-earth/10">
      <span className="text-xl">{icon}</span>
      <div>
        <div className="text-cream text-sm font-bold tracking-[0.1em]">{value}</div>
        <div className="text-cream/30 text-[10px] tracking-[0.2em] uppercase">{label}</div>
      </div>
    </div>
  );
}
