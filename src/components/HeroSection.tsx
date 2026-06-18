import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vast%20golden%20sand%20dunes%20desert%20landscape%20sunset%20warm%20light%20silhouette%20camel%20caravan%20distant%20ancient%20caravanserai&image_size=landscape_16_9')",
        }}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 sand-texture" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-900 text-sand-50 mb-6 animate-fade-up leading-tight">
          沙漠驿站
        </h1>
        <div className="w-20 h-0.5 bg-terracotta mx-auto mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }} />
        <p className="font-body text-lg md:text-2xl text-sand-100/90 animate-fade-up leading-relaxed" style={{ animationDelay: "0.4s" }}>
          丝路古道上的文明印记
        </p>
        <p className="font-body text-sm md:text-base text-sand-200/70 mt-4 animate-fade-up max-w-2xl mx-auto" style={{ animationDelay: "0.6s" }}>
          千年商道穿沙海，古井甘泉润驼铃。夯土为墙御风沙，驿站灯火照古今。
        </p>
      </div>

      <a
        href="#trade-route"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-scroll-hint"
        aria-label="向下滚动"
      >
        <ChevronDown className="text-sand-100/70" size={32} />
      </a>

      <div className="absolute bottom-0 left-0 right-0 h-32 gradient-fade-bottom" />
    </section>
  );
}
