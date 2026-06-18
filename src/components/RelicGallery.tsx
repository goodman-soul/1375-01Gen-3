import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { type RelicItem, relics } from "@/data/relics";
import { X, Calendar, MapPin, ZoomIn } from "lucide-react";

function RelicCard({ relic, onClick }: { relic: RelicItem; onClick: () => void }) {
  return (
    <div
      className="relic-card group cursor-pointer bg-white/80 rounded-2xl overflow-hidden shadow-sm border border-sand-200/50 hover:shadow-xl transition-shadow duration-500"
      onClick={onClick}
    >
      <div className="overflow-hidden aspect-square">
        <img
          src={relic.imageUrl}
          alt={relic.title}
          className="relic-image w-full h-full object-cover"
          loading="lazy"
        />
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-sand-900/30 flex items-center justify-center pointer-events-none" style={{ position: "relative", marginTop: "-100%" }}>
          <ZoomIn className="text-sand-50" size={32} />
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-display text-base font-bold text-sand-900 mb-2">{relic.title}</h4>
        <div className="flex items-center gap-1 text-sand-600 mb-1">
          <Calendar size={12} />
          <span className="font-body text-xs">{relic.era}</span>
        </div>
        <div className="flex items-center gap-1 text-sand-500">
          <MapPin size={12} />
          <span className="font-body text-xs">{relic.source}</span>
        </div>
      </div>
    </div>
  );
}

function RelicLightbox({
  relic,
  onClose,
}: {
  relic: RelicItem;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lightbox-overlay"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-sand-900/90 backdrop-blur-sm" />
      <div
        className="relative z-10 bg-sand-50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-sand-800/80 text-sand-50 flex items-center justify-center hover:bg-sand-800 transition-colors"
          aria-label="关闭"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="bg-sand-100">
            <img
              src={relic.imageUrl}
              alt={relic.title}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-sand-900 mb-4">
              {relic.title}
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="text-terracotta shrink-0" size={16} />
                <span className="font-body text-sand-700 text-sm">{relic.era}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-terracotta shrink-0" size={16} />
                <span className="font-body text-sand-700 text-sm">{relic.source}</span>
              </div>
            </div>
            <div className="sand-divider" />
            <p className="font-body text-sand-800 text-sm leading-relaxed">
              {relic.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RelicGallery() {
  const ref = useScrollReveal();
  const [selectedRelic, setSelectedRelic] = useState<RelicItem | null>(null);

  return (
    <section id="relic-gallery" className="section-padding sand-texture bg-sand-50 relative" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="section-title">文物画廊</h2>
          <div className="sand-divider mx-auto" />
          <p className="section-subtitle mx-auto">
            出土文物是驿站文明最直接的见证者。每件文物都标注年代与来源，让历史触手可及。
          </p>
        </div>

        <div className="scroll-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relics.map((relic) => (
            <RelicCard
              key={relic.id}
              relic={relic}
              onClick={() => setSelectedRelic(relic)}
            />
          ))}
        </div>
      </div>

      {selectedRelic && (
        <RelicLightbox
          relic={selectedRelic}
          onClose={() => setSelectedRelic(null)}
        />
      )}
    </section>
  );
}
