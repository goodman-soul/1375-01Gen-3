import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, ArrowRight } from "lucide-react";

const timelineEvents = [
  { year: "前2世纪", event: "张骞出使西域，开辟丝绸之路" },
  { year: "前1世纪", event: "沿线驿站网络初步形成，每30–40里设一站" },
  { year: "7世纪", event: "唐代驿站制度完善，设驿馆、烽火台与水井" },
  { year: "13世纪", event: "蒙元时期驿站体系达到鼎盛，东西方贸易畅通" },
  { year: "15世纪", event: "海上丝绸之路兴起，陆路驿站逐渐衰落" },
];

const stations = [
  { name: "敦煌驿站", desc: "丝路咽喉，连接中原与西域的枢纽" },
  { name: "瓜州锁阳城", desc: "军事重镇兼商旅补给站" },
  { name: "吐鲁番交河", desc: "东西方文化交汇之地" },
  { name: "民勤沙井", desc: "河西走廊北线要冲" },
];

export default function TradeRouteSection() {
  const ref = useScrollReveal();

  return (
    <section id="trade-route" className="section-padding sand-texture bg-sand-50 relative" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="section-title">古商道</h2>
          <div className="sand-divider mx-auto" />
          <p className="section-subtitle mx-auto">
            横贯东西的丝绸之路，在漫漫沙海中串联起一座座驿站，成为商旅休憩、补给与信息传递的生命线。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="scroll-reveal">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Silk%20Road%20map%20illustration%20caravan%20route%20across%20desert%20with%20stations%20marked%20old%20parchment%20style&image_size=landscape_4_3"
                alt="丝路古商道路线"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="scroll-reveal flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-sand-900 mb-6">
              丝路驿站网络
            </h3>
            <p className="font-body text-sand-700 mb-6 leading-relaxed">
              自汉武帝时期张骞凿空西域，丝绸之路沿线的驿站逐渐形成了完善的网络体系。
              每座驿站间距约30–40里，提供食宿、换马、饮水与庇护。这些驿站不仅是商旅的中转站，
              更是文化交流的节点，佛教、伊斯兰教、景教的思想在此碰撞交融。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {stations.map((s) => (
                <div key={s.name} className="flex items-start gap-2 p-3 bg-sand-100/60 rounded-lg">
                  <MapPin className="text-terracotta mt-0.5 shrink-0" size={16} />
                  <div>
                    <span className="font-body font-semibold text-sand-900 text-sm">{s.name}</span>
                    <p className="font-body text-xs text-sand-600 mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="scroll-reveal">
          <h3 className="font-display text-xl md:text-2xl font-bold text-sand-900 text-center mb-12">
            商道演变
          </h3>
          <div className="relative">
            <div className="timeline-line hidden md:block" />
            <div className="space-y-8">
              {timelineEvents.map((evt, i) => (
                <div
                  key={evt.year}
                  className={`flex items-center gap-4 md:gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-sand-100/80 rounded-xl p-5 inline-block shadow-sm border border-sand-200/50">
                      <span className="font-display text-terracotta font-bold text-lg">{evt.year}</span>
                      <p className="font-body text-sand-800 text-sm mt-1">{evt.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-terracotta text-sand-50 shrink-0">
                    <ArrowRight size={14} />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
