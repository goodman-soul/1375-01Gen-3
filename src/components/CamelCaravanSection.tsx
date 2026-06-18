import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Timer, Package, Tent } from "lucide-react";

const paceData = [
  { label: "晨行", time: "卯时—午时（5:00–12:00）", desc: "趁凉爽赶路，日行约30公里" },
  { label: "午歇", time: "午时—申时（12:00–16:00）", desc: "烈日下驻足驿站，驼畜饮水休整" },
  { label: "晚行", time: "酉时—亥时（17:00–22:00）", desc: "趁余晖再行一程，至下一驿站投宿" },
];

const cargoItems = [
  { origin: "东方", goods: "丝绸、瓷器、茶叶、漆器" },
  { origin: "西方", goods: "玻璃器皿、宝石、香料、金银币" },
  { origin: "本地", goods: "葡萄干、棉花、马匹、玉石" },
];

export default function CamelCaravanSection() {
  const ref = useScrollReveal();

  return (
    <section id="camel-caravan" className="section-padding sand-texture bg-sand-50 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 camel-silhouette opacity-50" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="section-title">骆驼队</h2>
          <div className="sand-divider mx-auto" />
          <p className="section-subtitle mx-auto">
            "沙漠之舟"承载着丝路的繁荣。驼队的行进节奏与驿站网络紧密配合，构成沙漠商旅的循环系统。
          </p>
        </div>

        <div className="scroll-reveal mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=silhouette%20of%20camel%20caravan%20crossing%20desert%20dunes%20at%20sunset%20golden%20light%20dramatic%20sky%20ancient%20silk%20road&image_size=landscape_16_9"
              alt="沙漠驼队剪影"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="scroll-reveal">
            <h3 className="font-display text-2xl font-bold text-sand-900 mb-6 flex items-center gap-3">
              <Timer className="text-terracotta" size={24} />
              行进节奏
            </h3>
            <div className="space-y-4">
              {paceData.map((p) => (
                <div key={p.label} className="flex items-start gap-4 bg-white/60 rounded-xl p-4 border border-sand-200/40">
                  <div className="w-16 text-center shrink-0">
                    <span className="font-display text-terracotta font-bold text-lg">{p.label}</span>
                  </div>
                  <div>
                    <span className="font-body text-sand-600 text-xs block">{p.time}</span>
                    <p className="font-body text-sand-800 text-sm mt-1">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-reveal">
            <h3 className="font-display text-2xl font-bold text-sand-900 mb-6 flex items-center gap-3">
              <Package className="text-terracotta" size={24} />
              驮运物资
            </h3>
            <div className="space-y-4">
              {cargoItems.map((c) => (
                <div key={c.origin} className="bg-white/60 rounded-xl p-4 border border-sand-200/40">
                  <span className="font-display text-sand-400 font-bold text-sm tracking-wider">{c.origin}</span>
                  <p className="font-body text-sand-800 text-sm mt-1">{c.goods}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="scroll-reveal">
          <div className="bg-sand-800 rounded-2xl p-8 text-center">
            <Tent className="text-sand-300 mx-auto mb-4" size={32} />
            <h3 className="font-display text-xl font-bold text-sand-50 mb-3">驼队与驿站</h3>
            <p className="font-body text-sand-200/80 text-sm max-w-2xl mx-auto leading-relaxed">
              一支标准驼队由20–50峰骆驼组成，配备向导、驼夫与护卫。日行约30公里，
              每日至驿站投宿。驿站提供驼畜饮水与草料、商旅食宿与仓储，同时承担信件传递
              与烽火预警功能。驼队的行进节奏严格依赖驿站间距，驿站网络的完整性
              决定了商路的畅通程度。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
