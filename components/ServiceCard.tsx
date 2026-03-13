import { useTranslations } from "next-intl";
import { HiArrowRight } from "react-icons/hi2";

interface ServiceCardProps {
  title: string;
  info: string;
  description: string;
  explore: string;
}

export const ServiceCard = ({ title, info, description, explore }: ServiceCardProps) => {
  return (
    <div
      className="group h-[360px] w-full cursor-pointer"
      style={{ perspective: "1500px" }}
    >
      <div className="relative w-full h-full transition-all duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
        {/* Front face - Professional & Solid */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-4xl bg-[#0f172a] border-2 border-slate-800 p-8 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-500 group-hover:border-primary-500/40"
          style={{ transform: 'translateZ(1px)', WebkitBackfaceVisibility: 'hidden' }}
        >
          
          {/* Vertical Accent Line on hover */}
          <div className="absolute top-0 left-0 w-2 h-full bg-primary-500 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
          
          <div className="relative z-10">
            {/* Custom Icon Container */}
            <div className="mb-8 inline-flex items-center justify-center">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/15 group-hover:border-primary-500/40 transition-all duration-500">
                <div className="relative">
                  <div className="w-5 h-5 border-2 border-primary-500/60 rounded-sm transform rotate-45 group-hover:rotate-180 transition-transform duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-primary-400 transition-colors duration-300">
              {title}
            </h3>
            
            <div className="h-0.5 w-10 bg-primary-500/30 mb-6 group-hover:w-20 transition-all duration-500" />
            
            <p className="text-base text-slate-300 font-medium leading-relaxed line-clamp-4">
              {info}
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-3 text-slate-400 group-hover:text-primary-400 transition-all duration-300">
            <span className="text-xs font-black uppercase tracking-[0.2em]">{explore}</span>
            <div className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center group-hover:translate-x-1 group-hover:bg-primary-500/20 transition-all">
              <HiArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Back face - High Contrast Brand Style */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)] rounded-4xl bg-primary-600 border-2 border-primary-400/40 text-white p-8 flex flex-col justify-center items-center text-center shadow-2xl overflow-hidden shadow-primary-900/20"
          style={{ transform: 'rotateY(180deg) translateZ(1px)', WebkitBackfaceVisibility: 'hidden' }}
        >
          {/* Subtle Dynamic Mesh Pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '16px 16px' }} />
          
          <h3 className="text-xl font-black mb-6 tracking-tight z-10 uppercase">
            {title}
          </h3>
          
          <div className="w-14 h-1 bg-white/40 rounded-full mb-8 z-10" />
          
          <p className="text-base leading-snug text-white font-medium z-10 max-w-[280px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
