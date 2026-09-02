import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronLeft,
  Sparkles, 
  Zap, 
  TrendingUp, 
  BarChart3, 
  Download, 
  Layers,
  ArrowUpRight,
  ExternalLink,
  Target,
  FileText
} from 'lucide-react';
import { PageRoute } from './Navbar';

interface CaseGtexPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: PageRoute) => void;
}

export const CaseGtexPage: React.FC<CaseGtexPageProps> = ({
  onOpenAuditModal,
  onNavigatePage,
}) => {
  return (
    <div className="w-full flex flex-col bg-[#000604] text-white font-familjen">
      {/* Back Navigation Bar */}
      <div className="bg-[#0D0F0D] border-b border-white/10 pt-28 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => onNavigatePage('cases')}
            className="inline-flex items-center gap-2 text-sm text-[#D9D9D9] hover:text-[#0DF205] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Voltar para todos os cases</span>
          </button>
          <div className="text-xs text-[#0DF205] uppercase tracking-wider font-bold">
            Case Study • GTEX / Casa de Gê
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-[#000604]">
        {/* Glows */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-[-100px] right-[-50px] w-[600px] h-[600px] bg-[#0DF205]/15 rounded-full blur-[180px] -rotate-7"
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute bottom-[-100px] left-[-150px] w-[500px] h-[500px] bg-[#26D3AB]/15 rounded-full blur-[160px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0DF205]/10 border border-[#0DF205]/30">
                <span className="w-2 h-2 rounded-full bg-[#0DF205] shadow-[0_0_6px_#0DF205]" />
                <span className="text-[#0DF205] text-xs font-bold uppercase tracking-wider">
                  ESTUDO DE CASO
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.12] tracking-tight text-white">
                GTEX: Uma marca que <br />
                <span className="text-[#0DF205]">inspira confiança</span> e escala resultados
              </h1>

              <p className="text-base sm:text-xl text-[#EFEFEF] font-normal leading-relaxed max-w-2xl">
                Como transformamos a presença digital da gigante de limpeza industrial através de uma estratégia agressiva de Mídia Paga e SEO técnico, gerando eficiência operacional em escala.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={onOpenAuditModal}
                  className="px-8 py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#013A00] font-bold text-sm uppercase tracking-wider rounded transition-all shadow-[0_0_20px_rgba(13,242,5,0.3)] hover:scale-[1.02] cursor-pointer flex items-center gap-2"
                >
                  <span>Solicitar Diagnóstico Semelhante</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#3B4B35]/30 shadow-2xl bg-[#111815] group">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                  alt="GTEX Produtos e Operação"
                  className="w-full h-80 sm:h-96 object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000604] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0DF205] text-black font-black flex items-center justify-center text-lg">
                      GT
                    </div>
                    <div>
                      <div className="text-white font-bold text-base">GTEX Brasil</div>
                      <div className="text-white/60 text-xs">Indústria & Bens de Consumo</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-[#0DF205]/20 border border-[#0DF205]/40 rounded text-[#0DF205] text-xs font-bold uppercase">
                    E-COMMERCE & B2B
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-14 bg-white text-[#000604] border-y border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-black/10">
            
            <div className="pt-4 md:pt-0">
              <div className="text-5xl sm:text-6xl font-bold text-[#00D000] tracking-tight">
                +342%
              </div>
              <div className="pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#000604]">
                CRESCIMENTO DE ROAS
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-5xl sm:text-6xl font-bold text-[#00D000] tracking-tight">
                +180%
              </div>
              <div className="pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#000604]">
                TRÁFEGO ORGÂNICO
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-5xl sm:text-6xl font-bold text-[#00D000] tracking-tight">
                -45%
              </div>
              <div className="pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#000604]">
                CUSTO POR LEAD
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. O DESAFIO */}
      <section className="py-24 bg-white text-[#000604] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-7 rounded-2xl bg-[#000604] text-white p-8 sm:p-12 border-l-4 border-[#0DF205] shadow-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#E3E3DF] tracking-tight">
                  O Desafio
                </h2>
                <p className="text-base sm:text-lg text-[#B9CCAF] leading-relaxed">
                  A GTEX é a holding por trás dos produtos de limpeza mais amados do país. Os desafios eram criar um fluxo qualificado de maneira orgânica, criar conteúdos relevantes com o público e tornar o canal orgânico como protagonista. As soluções da Preditiva foram diagnóstico técnico, infra-site, diagnóstico de performance do site, erros de páginas e peso de imagens, diagnóstico SEO, indexação em buscadores e conteúdo e plano de conteúdo e postagens no blog.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0DF205] uppercase tracking-wider">
                  <div className="w-5 h-5 rounded bg-[#0DF205]/20 flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#0DF205] rounded-full" />
                  </div>
                  <span>MELHORAR O CANAL ORGÂNICO</span>
                </div>

                <div className="text-xs sm:text-sm text-[#D9D9D9]">
                  <span className="text-[#0DF205] font-bold">Frentes: </span>
                  <span>Aceleradora de E-commerce · SEO Técnico + Dev + Infra</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-2xl relative min-h-[320px] bg-[#000604]">
              <img
                src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80"
                alt="Desafio GTEX"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000604] via-transparent to-transparent" />
            </div>

          </div>

        </div>
      </section>

      {/* 4. ESTRATÉGIA FULL FUNNEL & GRÁFICOS */}
      <section className="py-24 bg-[#000604] text-white border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Pillars */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold uppercase text-[#E3E3DF]">
                Estratégia Full Funnel
              </h2>
              <p className="text-sm sm:text-base text-[#B9CCAF] leading-relaxed">
                A GTEX precisava mais do que cliques; precisava de uma infraestrutura de dados que suportasse o crescimento vertical e horizontal da marca.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded bg-[#292A28] text-[#0DF205] shrink-0 mt-1">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#E3E3DF]">Mídia Paga</h3>
                    <p className="text-sm text-[#B9CCAF] leading-relaxed">
                      Segmentação hiper-focada em tomadores de decisão B2B e expansão de awareness.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded bg-[#292A28] text-[#0DF205] shrink-0 mt-1">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#E3E3DF]">SEO Técnico</h3>
                    <p className="text-sm text-[#B9CCAF] leading-relaxed">
                      Otimização de core web vitals e autoridade de domínio para termos de alta intenção.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Charts */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Visibilidade Orgânica Bar Chart */}
              <div className="p-6 rounded-xl bg-[#1A1C1A] border-l-4 border-[#0DF205] border-y border-r border-white/5 space-y-4">
                <div className="text-xs font-bold text-[#B9CCAF] uppercase tracking-wider">
                  CRESCIMENTO DE VISIBILIDADE ORGÂNICA
                </div>

                {/* Monthly Bars */}
                <div className="h-40 flex items-end justify-between gap-2 pt-4">
                  {[
                    { month: 'JAN', height: '35%', opacity: 'bg-[#0DF205]/20' },
                    { month: 'MAR', height: '55%', opacity: 'bg-[#0DF205]/30' },
                    { month: 'MAI', height: '50%', opacity: 'bg-[#0DF205]/40' },
                    { month: 'JUL', height: '75%', opacity: 'bg-[#0DF205]/60' },
                    { month: 'SET', height: '88%', opacity: 'bg-[#0DF205]/80' },
                    { month: 'DEZ', height: '100%', opacity: 'bg-[#0DF205]', peak: true },
                  ].map((bar, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end relative">
                      {bar.peak && (
                        <span className="absolute -top-5 px-1 py-0.5 bg-[#0DF205] text-[#013A00] font-bold text-[9px] rounded">
                          PEAK
                        </span>
                      )}
                      <div className={`w-full rounded-t ${bar.opacity}`} style={{ height: bar.height }} />
                      <span className="text-[10px] text-[#B9CCAF] font-bold">{bar.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualificação de Leads */}
              <div className="p-6 rounded-xl bg-[#333533]/40 border border-white/10 backdrop-blur-md space-y-4 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="w-5 h-3 bg-[#0DF205] rounded" />
                  <span className="px-2 py-0.5 rounded-full border border-[#0DF205]/30 text-[#0DF205] text-[10px] font-bold">
                    +24% MoM
                  </span>
                </div>

                <div>
                  <div className="text-xs text-[#B9CCAF]">Qualificação de Leads</div>
                  <div className="text-2xl font-bold text-[#E3E3DF]">Efficiency Edge</div>
                </div>

                <div className="space-y-2">
                  <div className="h-2 bg-[#292A28] rounded-full overflow-hidden">
                    <div className="h-full bg-[#0DF205] w-[88%]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-[#B9CCAF] font-bold uppercase">
                    <span>TARGET MET</span>
                    <span>88.4% ACHIEVED</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* 4 Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Sessões Orgânicas */}
            <div className="p-6 rounded-xl bg-[#1A1C1A] border border-white/5 space-y-4">
              <div className="text-xs font-bold text-[#B9CCAF] uppercase tracking-wider">
                SESSÕES ORGÂNICAS
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#E3E3DF]">97K</span>
                <span className="text-xs font-bold text-[#0DF205]">+162%</span>
              </div>
              <div className="flex items-end justify-between gap-3 pt-2">
                <div className="flex-1 h-14 flex items-end gap-1">
                  <div className="flex-1 bg-[#333533] h-[30%]" />
                  <div className="flex-1 bg-[#333533] h-[45%]" />
                  <div className="flex-1 bg-[#333533] h-[40%]" />
                  <div className="flex-1 bg-[#0DF205] h-[90%] shadow-[0_0_10px_#0DF205]" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-[#B9CCAF] font-bold">2023 BASE</div>
                  <div className="text-sm text-[#0DF205] font-bold">36.9K</div>
                </div>
              </div>
            </div>

            {/* Card 2: Sessões Engajadas */}
            <div className="p-6 rounded-xl bg-[#1A1C1A] border border-white/5 space-y-4">
              <div className="text-xs font-bold text-[#B9CCAF] uppercase tracking-wider">
                SESSÕES ENGAJADAS
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#E3E3DF]">52.7K</span>
                <span className="text-xs font-bold text-[#0DF205]">+153%</span>
              </div>
              <div className="flex items-end justify-between gap-3 pt-2">
                <div className="flex-1 h-14 flex items-end gap-1">
                  <div className="flex-1 bg-[#333533] h-[28%]" />
                  <div className="flex-1 bg-[#333533] h-[25%]" />
                  <div className="flex-1 bg-[#333533] h-[50%]" />
                  <div className="flex-1 bg-[#0DF205] h-[85%] shadow-[0_0_10px_#0DF205]" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-[#B9CCAF] font-bold">2023 BASE</div>
                  <div className="text-sm text-[#0DF205] font-bold">20.8K</div>
                </div>
              </div>
            </div>

            {/* Card 3: Cliques Blog */}
            <div className="p-6 rounded-xl bg-[#1A1C1A] border border-white/5 space-y-4">
              <div className="text-xs font-bold text-[#B9CCAF] uppercase tracking-wider">
                CLIQUES BLOG
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#E3E3DF]">68.1K</span>
                <span className="text-xs font-bold text-[#0DF205]">+508%</span>
              </div>
              <div className="flex items-end justify-between gap-3 pt-2">
                <div className="flex-1 h-14 flex items-end gap-1">
                  <div className="flex-1 bg-[#333533] h-[15%]" />
                  <div className="flex-1 bg-[#333533] h-[12%]" />
                  <div className="flex-1 bg-[#333533] h-[20%]" />
                  <div className="flex-1 bg-[#0DF205] h-[100%] shadow-[0_0_10px_#0DF205]" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-[#B9CCAF] font-bold">2023 BASE</div>
                  <div className="text-sm text-[#0DF205] font-bold">11.2K</div>
                </div>
              </div>
            </div>

            {/* Card 4: Impressões Blog */}
            <div className="p-6 rounded-xl bg-[#1A1C1A] border border-white/5 space-y-4">
              <div className="text-xs font-bold text-[#B9CCAF] uppercase tracking-wider">
                IMPRESSÕES BLOG
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#E3E3DF]">4.5M</span>
                <span className="text-xs font-bold text-[#0DF205]">+1,492%</span>
              </div>
              <div className="flex items-end justify-between gap-3 pt-2">
                <div className="flex-1 h-14 flex items-end gap-1">
                  <div className="flex-1 bg-[#333533] h-[10%]" />
                  <div className="flex-1 bg-[#333533] h-[8%]" />
                  <div className="flex-1 bg-[#333533] h-[12%]" />
                  <div className="flex-1 bg-[#0DF205] h-[95%] shadow-[0_0_10px_#0DF205]" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-[#B9CCAF] font-bold">2023 BASE</div>
                  <div className="text-sm text-[#0DF205] font-bold">339K</div>
                </div>
              </div>
            </div>

          </div>

          {/* Análise Growth & Blog Link */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 p-8 rounded-2xl bg-[#333533] space-y-6 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded bg-[#0DF205] flex items-center justify-center text-black font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#E3E3DF]">Análise Growth</h3>
                <p className="text-sm text-[#B9CCAF] leading-relaxed">
                  O aumento de 1.492% nas Impressões de Blog indica uma mudança de paradigma enorme nas estratégias de captura de público sintético para 2024.
                </p>
              </div>

              <button
                onClick={onOpenAuditModal}
                className="w-full py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#013A00] font-bold text-xs uppercase tracking-widest rounded transition-all shadow-[0_0_15px_rgba(13,242,5,0.3)] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>DOWNLOAD FULL REPORT</span>
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-6 rounded-2xl overflow-hidden relative border border-white/10 min-h-[260px] group cursor-pointer" onClick={onOpenAuditModal}>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Blog Case SEO"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 absolute inset-0"
              />
              <div className="absolute inset-0 bg-[#121412]/60" />
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <div className="text-[#0DF205] text-xs font-bold uppercase tracking-[2px]">
                  BLOG • SEO
                </div>
                <div className="text-xl font-bold text-[#E3E3DF] group-hover:text-[#0DF205] transition-colors">
                  Como o SEO mudou o canal orgânico da GTEX
                </div>
              </div>
            </div>

          </div>

          {/* Bottom CTA Box */}
          <div className="p-10 sm:p-16 rounded-3xl bg-[#333533]/40 border border-[#3B4B35]/20 backdrop-blur-xl text-center space-y-8 relative overflow-hidden">
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
