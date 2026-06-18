import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Wind, Home, ThermometerSun } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "夯土墙垣",
    desc: "墙体以本地黄土掺入麦草与碎石夯筑，厚度达60–80厘米，有效隔热保温。基座以石块砌筑，防止风蚀与雨水掏空根基。",
  },
  {
    icon: Wind,
    title: "通风设计",
    desc: "民居采用\u201c风道\u201d设计：低矮的门洞迎向背风面，屋顶开设通风口形成穿堂风。院落布局呈合围式，内墙高耸遮挡风沙，中庭设天井引入光线与空气。",
  },
  {
    icon: ThermometerSun,
    title: "气候适应性",
    desc: "平顶结构减少风阻，屋顶可用于晾晒与纳凉。墙体厚实使室内冬暖夏凉，温差波动极小。窗洞窄小，既抵御风沙又调节采光。屋檐出挑遮蔽直射阳光。",
  },
];

export default function DwellingSection() {
  const ref = useScrollReveal();

  return (
    <section id="dwelling" className="section-padding bg-sand-100/50 relative" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="section-title">防风民居</h2>
          <div className="sand-divider mx-auto" />
          <p className="section-subtitle mx-auto">
            先民以夯土为材、以智慧为匠，建造出与风沙共生的居所，千年屹立不倒。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="scroll-reveal">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=traditional%20rammed%20earth%20desert%20dwelling%20northwest%20China%20flat%20roof%20thick%20walls%20courtyard%20architecture%20warm%20afternoon%20light&image_size=portrait_4_3"
                alt="防风民居建筑"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="scroll-reveal space-y-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white/70 rounded-2xl p-6 shadow-sm border border-sand-200/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-sand-200 flex items-center justify-center shrink-0">
                    <f.icon className="text-terracotta" size={20} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-sand-900">{f.title}</h3>
                </div>
                <p className="font-body text-sand-700 text-sm leading-relaxed pl-13">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-reveal">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-sand-800 rounded-2xl p-6">
              <span className="font-display text-3xl font-bold text-sand-300">60–80cm</span>
              <p className="font-body text-sand-200/70 text-sm mt-2">夯土墙体厚度</p>
            </div>
            <div className="text-center bg-sand-800 rounded-2xl p-6">
              <span className="font-display text-3xl font-bold text-sand-300">±5°C</span>
              <p className="font-body text-sand-200/70 text-sm mt-2">室内日温差波动</p>
            </div>
            <div className="text-center bg-sand-800 rounded-2xl p-6">
              <span className="font-display text-3xl font-bold text-sand-300">1000+年</span>
              <p className="font-body text-sand-200/70 text-sm mt-2">最古老民居存续时间</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
