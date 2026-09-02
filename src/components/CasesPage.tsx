import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  TrendingUp, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Zap,
  Award,
  BarChart3,
  Globe,
  ChevronRight
} from 'lucide-react';
import { PageRoute } from './Navbar';

interface CasesPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: PageRoute) => void;
}

export const CasesPage: React.FC<CasesPageProps> = ({
  onOpenAuditModal,
  onNavigatePage,
}) => {
  return (
    <div className="w-full flex flex-col bg-[#000604] text-white font-familjen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#000604]">
        {/* Glows matching the design */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-[-100px] right-[-50px] w-[600px] h-[600px] bg-[#0DF205]/15 rounded-full blur-[180px] -rotate-7"
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute bottom-[-100px] left-[-150px] w-[500px] h-[500px] bg-[#26D3AB]/15 rounded-full blur-[160px] rotate-25"
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-[20%] left-[30%] w-[350px] h-[350px] bg-[#26D3AB]/10 rounded-full blur-[150px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#0DF205]/10 border border-[#0DF205]/30 shadow-[0_0_15px_rgba(13,242,5,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#0DF205] shadow-[0_0_8px_#0DF205]" />
              <span className="text-[#0DF205] text-xs sm:text-sm font-bold uppercase tracking-[1.5px]">
                PORTFÓLIO DE CASES
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[54px] font-bold uppercase leading-[1.12] tracking-tight text-[#E3E3DF]"
            >
              Resultados que <br />
              <span className="text-[#0DF205]">Transformam Negócios</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#EFEFEF] text-base sm:text-xl font-normal leading-relaxed max-w-2xl"
            >
              Unimos precisão analítica e criatividade disruptiva para escalar operações digitais com performance sintética.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 flex flex-wrap justify-center items-center gap-4"
            >
              <button
                onClick={onOpenAuditModal}
                className="px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#013A00] font-bold text-base uppercase tracking-wider rounded transition-all shadow-[0_0_25px_rgba(13,242,5,0.4)] hover:scale-[1.02] cursor-pointer flex items-center gap-2"
              >
                <span>Venha acelerar com a gente</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. CASES GRID SECTION (White Section with Cards) */}
      <section className="relative py-24 bg-white text-[#000604] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#000604]">
              Cases
            </h2>
            <p className="text-lg sm:text-xl text-[#000604]/80 leading-relaxed">
              Perfis de e-commerce que descobriram na Preditiva o parceiro perfeito para impulsionar sua escalada de sucesso.
            </p>
          </div>

          {/* Cases Bento/Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Case 1: Miami Ad School (lg:col-span-7) */}
            <div className="lg:col-span-7 rounded-2xl bg-[#000604] text-white overflow-hidden border border-[#3B4B35]/20 shadow-2xl relative flex flex-col justify-between min-h-[460px] p-8 sm:p-12 group hover:border-[#0DF205]/40 transition-all">
              {/* Background with overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                  alt="Miami Ad School"
                  className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000604] via-[#000604]/80 to-transparent" />
              </div>

              <div className="relative z-10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0DF205] flex items-center justify-center text-black font-bold text-lg">
                  M
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Miami Ad School
                </h3>
              </div>

              <div className="relative z-10 space-y-6 pt-12">
                <div className="pl-6 border-l-2 border-[#0DF205]/40 space-y-4">
                  <div>
                    <div className="text-xs font-bold text-[#D9D9D9] uppercase tracking-wider">
                      TRÁFEGO
                    </div>
                    <div className="text-4xl sm:text-5xl font-bold text-[#0DF205]">
                      +142%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#D9D9D9] uppercase tracking-wider">
                      CONVERSÃO
                    </div>
                    <div className="text-4xl sm:text-5xl font-bold text-[#0DF205]">
                      +58%
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onNavigatePage('case-miami')}
                    className="w-full sm:w-auto px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm uppercase tracking-wider rounded transition-all shadow-[0_0_20px_rgba(13,242,5,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>VER DETALHES</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Case 2: GTEX (lg:col-span-5) */}
            <div className="lg:col-span-5 rounded-2xl bg-[#000604] text-white overflow-hidden border border-[#3B4B35]/20 shadow-2xl relative flex flex-col justify-between min-h-[460px] p-8 sm:p-12 group hover:border-[#0DF205]/40 transition-all">
              {/* Background with overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
                  alt="GTEX Case"
                  className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000604] via-[#000604]/80 to-transparent" />
              </div>

              <div className="relative z-10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0DF205] flex items-center justify-center text-black font-bold text-lg">
                  G
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  GTEX
                </h3>
              </div>

              <div className="relative z-10 space-y-5 pt-8">
                <div>
                  <div className="text-xs font-bold text-[#D9D9D9] uppercase tracking-wider">
                    PERFORMANCE ROAS
                  </div>
                  <div className="text-5xl sm:text-6xl font-bold text-[#0DF205]">
                    3.4x
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#D9D9D9] leading-relaxed">
                  Escalabilidade de e-commerce industrial com foco em eficiência logística e automação de vendas.
                </p>

                <div>
                  <button
                    onClick={() => onNavigatePage('case-gtex')}
                    className="w-full sm:w-auto px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm uppercase tracking-wider rounded transition-all shadow-[0_0_20px_rgba(13,242,5,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>VER DETALHES</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Case 3: Master Cidadania (Full Width 12 cols) */}
            <div className="lg:col-span-12 rounded-2xl bg-[#000604] text-white overflow-hidden border border-[#3B4B35]/20 shadow-2xl relative p-8 sm:p-14 group hover:border-[#0DF205]/40 transition-all">
              {/* Background with overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80"
                  alt="Master Cidadania"
                  className="w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#000604] via-[#000604]/90 to-transparent" />
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0DF205] flex items-center justify-center text-black font-bold text-lg">
                      MC
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                      Master Cidadania
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg text-[#D9D9D9] max-w-xl leading-relaxed">
                    Reposicionamento global e automação de leads qualificados para processos de cidadania europeia em 12 países.
                  </p>

                  <button
                    onClick={() => onNavigatePage('case-master')}
                    className="w-full sm:w-auto px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-sm uppercase tracking-wider rounded transition-all shadow-[0_0_20px_rgba(13,242,5,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>VER DETALHES</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="lg:col-span-5 flex items-center justify-start lg:justify-end gap-10 sm:gap-14 pt-4 lg:pt-0">
                  <div className="text-center lg:text-right space-y-1">
                    <div className="text-xs font-bold text-[#D9D9D9] uppercase tracking-wider">
                      CUSTO LEAD
                    </div>
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0DF205]">
                      -42%
                    </div>
                  </div>

                  <div className="text-center lg:text-right space-y-1">
                    <div className="text-xs font-bold text-[#D9D9D9] uppercase tracking-wider">
                      VOLUME LEADS
                    </div>
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0DF205]">
                      5k+
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Outros Cases de Sucesso da Preditiva.co */}
          <div className="pt-16 border-t border-black/10 space-y-8">
            <h3 className="text-center text-sm sm:text-base font-bold uppercase tracking-[2px] text-[#000604]">
              OUTROS CASES DE SUCESSO DA PREDITIVA.CO
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="font-familjen text-xl sm:text-2xl font-bold tracking-widest text-[#000604]">
                SWAROVSKI
              </span>
              <span className="font-familjen text-xl sm:text-2xl font-black tracking-tight text-[#000604]">
                Red Bull
              </span>
              <span className="font-familjen text-xl sm:text-2xl font-bold tracking-wider text-[#000604]">
                shoulder
              </span>
              <span className="font-familjen text-xl sm:text-2xl font-bold tracking-tight text-[#000604]">
                océane
              </span>
              <span className="font-familjen text-xl sm:text-2xl font-bold tracking-tight text-[#000604]">
                Reflorestar
              </span>
              <span className="font-familjen text-xl sm:text-2xl font-bold tracking-wider text-[#000604]">
                Master Cidadania
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. O PULSO DA PERFORMANCE (Dark Section with Aggregated Stats) */}
      <section className="relative py-24 bg-[#000604] text-white border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-[#D9D9D9]">
                O Pulso da Performance
              </h2>
              <p className="text-base sm:text-lg text-[#D9D9D9]/80">
                Métricas agregadas do ecossistema Preditiva.Co nos últimos 12 meses.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-xl bg-[#292A28] text-[#0DF205] text-xs sm:text-sm font-bold uppercase">
                DATA-DRIVEN
              </span>
              <span className="px-4 py-2 rounded-xl bg-[#292A28] text-[#D9D9D9] text-xs sm:text-sm font-bold uppercase">
                REAL-TIME
              </span>
            </div>
          </div>

          {/* 3 Aggregated Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: 'INVESTMENT MANAGED',
                value: 'R$ 12.4M',
                growth: '+45% YoY',
              },
              {
                label: 'AVERAGE ROAS',
                value: '6.82x',
                growth: 'Meta + Google',
              },
              {
                label: 'CONVERSION LIFT',
                value: '+224%',
                growth: 'Checkout & Landing Pages',
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-2xl bg-[#1A1C1A] border border-[#3B4B35]/20 shadow-xl space-y-4 relative overflow-hidden"
              >
                <div className="text-xs sm:text-sm font-bold text-[#D9D9D9] uppercase tracking-[2px]">
                  {stat.label}
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D9D9D9]">
                  {stat.value}
                </div>

                {/* Visual Chart Wave */}
                <div className="pt-4 h-20 relative flex items-end">
                  <div className="w-full h-1 bg-[#0DF205]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0DF205]/20 to-transparent rounded-t-lg" />
                </div>

                <div className="text-xs text-[#0DF205] font-semibold tracking-wider">
                  ● {stat.growth}
                </div>
              </div>
            ))}
          </div>

          {/* 4. CTA CARD */}
          <div className="p-10 sm:p-16 rounded-3xl bg-[#333533]/40 border border-[#3B4B35]/20 backdrop-blur-xl text-center space-y-8 relative overflow-hidden">
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-[#0DF205]/10 rounded-full blur-3xl"
            />
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 bg-[#26D3AB]/10 rounded-full blur-3xl"
            />

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#E3E3DF] leading-tight">
              Pronto para ser o próximo <br />
              <span className="text-[#0DF205]">Case de Sucesso?</span>
            </h2>

            <div>
              <button
                onClick={onOpenAuditModal}
                className="px-10 py-5 bg-gradient-to-r from-[#02E600] to-[#00FF00] text-[#013A00] font-bold text-sm sm:text-base uppercase tracking-[2px] rounded transition-all shadow-[0_0_30px_rgba(0,255,0,0.4)] hover:scale-105 cursor-pointer"
              >
                INICIAR CONSULTORIA
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
