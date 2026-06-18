import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Droplets } from "lucide-react";

export default function WellSection() {
  const ref = useScrollReveal();

  return (
    <section id="well" className="section-padding bg-sand-100/50 relative" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="section-title">水井</h2>
          <div className="sand-divider mx-auto" />
          <p className="section-subtitle mx-auto">
            水是沙漠的生命线。坎儿井与古井的智慧，让驿站得以在干旱中延续千年。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal order-2 md:order-1">
            <div className="space-y-8">
              <div className="bg-white/70 rounded-2xl p-6 shadow-sm border border-sand-200/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-sand-200 flex items-center justify-center">
                    <Droplets className="text-terracotta" size={20} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-sand-900">坎儿井</h3>
                </div>
                <p className="font-body text-sand-700 text-sm leading-relaxed">
                  坎儿井是干旱地区特有的地下引水系统，由竖井、暗渠、明渠和涝坝四部分组成。
                  先民利用地形高差，将天山和昆仑山融雪地下水引至绿洲。暗渠在地下穿行，
                  避免了高温蒸发，堪称水利工程奇迹。吐鲁番盆地的坎儿井总长超过5000公里，
                  与长城、京杭大运河并称中国古代三大工程。
                </p>
              </div>

              <div className="bg-white/70 rounded-2xl p-6 shadow-sm border border-sand-200/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-sand-200 flex items-center justify-center">
                    <Droplets className="text-sand-400" size={20} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-sand-900">驿站古井</h3>
                </div>
                <p className="font-body text-sand-700 text-sm leading-relaxed">
                  驿站选址的首要条件便是水源。古井多为石砌井壁，深度从十余丈到数十丈不等。
                  井口设有石质井栏，既保护汲水者安全，又防止沙尘污染水质。考古发现的驿站古井
                  多配有蓄水池与引水槽，体现了古代水利设施的完善程度。水质清冽甘甜的驿站，
                  往往成为商旅首选的歇脚点。
                </p>
              </div>

              <div className="flex items-center gap-4 bg-terracotta/10 rounded-xl p-4 border border-terracotta/20">
                <Droplets className="text-terracotta shrink-0" size={24} />
                <p className="font-body text-sand-800 text-sm">
                  <strong>水源与驿站存续：</strong>一座古井的出水量直接决定了驿站的规模与存续时间。
                  考古发现表明，当井水枯竭或盐碱化时，驿站往往随之废弃，成为风沙中的遗迹。
                </p>
              </div>
            </div>
          </div>

          <div className="scroll-reveal order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Karez%20well%20system%20underground%20water%20channel%20desert%20oasis%20illustration%20cross%20section%20diagram%20warm%20tones&image_size=portrait_4_3"
                alt="坎儿井系统剖面图"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
