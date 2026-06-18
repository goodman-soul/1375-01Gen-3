import { useScrollReveal } from "@/hooks/useScrollReveal";
import { travelGuide } from "@/data/travelGuide";
import { Sun, Backpack, ShieldAlert } from "lucide-react";

function SeasonCard() {
  const { season } = travelGuide;
  return (
    <div className="bg-white/80 rounded-2xl p-6 md:p-8 shadow-sm border border-sand-200/50 h-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 rounded-full bg-terracotta/15 flex items-center justify-center">
          <Sun className="text-terracotta" size={24} />
        </div>
        <h3 className="font-display text-xl font-bold text-sand-900">{season.title}</h3>
      </div>
      <div className="space-y-4">
        <div>
          <span className="font-body text-xs font-semibold text-terracotta tracking-wider uppercase">推荐时段</span>
          <p className="font-body text-sand-800 text-sm mt-1 leading-relaxed">{season.recommended}</p>
        </div>
        <div>
          <span className="font-body text-xs font-semibold text-dusk tracking-wider uppercase">避开时段</span>
          <p className="font-body text-sand-800 text-sm mt-1 leading-relaxed">{season.avoid}</p>
        </div>
        <div>
          <span className="font-body text-xs font-semibold text-sand-600 tracking-wider uppercase">出行提示</span>
          <ul className="mt-2 space-y-2">
            {season.tips.map((tip, i) => (
              <li key={i} className="font-body text-sand-700 text-sm flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SuppliesCard() {
  const { supplies } = travelGuide;
  return (
    <div className="bg-white/80 rounded-2xl p-6 md:p-8 shadow-sm border border-sand-200/50 h-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 rounded-full bg-sand-400/15 flex items-center justify-center">
          <Backpack className="text-sand-500" size={24} />
        </div>
        <h3 className="font-display text-xl font-bold text-sand-900">{supplies.title}</h3>
      </div>
      <div className="space-y-4">
        <div>
          <span className="font-body text-xs font-semibold text-sand-600 tracking-wider uppercase">主要补给站</span>
          <ul className="mt-2 space-y-1.5">
            {supplies.stations.map((s, i) => (
              <li key={i} className="font-body text-sand-800 text-sm flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-400 mt-2 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="font-body text-xs font-semibold text-sand-600 tracking-wider uppercase">必备物品</span>
          <ul className="mt-2 space-y-1.5">
            {supplies.essentials.map((e, i) => (
              <li key={i} className="font-body text-sand-700 text-sm flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sand-400 mt-2 shrink-0" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SafetyCard() {
  const { safety } = travelGuide;
  return (
    <div className="bg-white/80 rounded-2xl p-6 md:p-8 shadow-sm border border-dusk/20 h-full ring-1 ring-dusk/10">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 rounded-full bg-dusk/10 flex items-center justify-center">
          <ShieldAlert className="text-dusk" size={24} />
        </div>
        <h3 className="font-display text-xl font-bold text-sand-900">{safety.title}</h3>
      </div>
      <div className="space-y-4">
        <div>
          <span className="font-body text-xs font-semibold text-dusk tracking-wider uppercase">安全边界</span>
          <ul className="mt-2 space-y-1.5">
            {safety.boundaries.map((b, i) => (
              <li key={i} className="font-body text-dusk text-sm font-medium flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-dusk mt-2 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="font-body text-xs font-semibold text-terracotta tracking-wider uppercase">危险警示</span>
          <ul className="mt-2 space-y-1.5">
            {safety.warnings.map((w, i) => (
              <li key={i} className="font-body text-sand-800 text-sm flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 shrink-0" />
                {w}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-dusk/5 rounded-xl p-4 border border-dusk/15 mt-4">
          <p className="font-body text-dusk text-sm font-semibold">{safety.emergency}</p>
        </div>
      </div>
    </div>
  );
}

export default function TravelGuideSection() {
  const ref = useScrollReveal();

  return (
    <section id="travel-guide" className="section-padding bg-sand-100/50 relative" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="section-title">旅行指南</h2>
          <div className="sand-divider mx-auto" />
          <p className="section-subtitle mx-auto">
            前往沙漠驿站遗址前，请仔细了解季节选择、补给安排与安全边界，让旅途安全而充实。
          </p>
        </div>

        <div className="scroll-reveal grid md:grid-cols-3 gap-6">
          <SeasonCard />
          <SuppliesCard />
          <SafetyCard />
        </div>
      </div>
    </section>
  );
}
