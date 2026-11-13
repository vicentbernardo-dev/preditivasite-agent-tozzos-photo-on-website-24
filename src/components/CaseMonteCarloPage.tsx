import React from 'react';
import { 
  ArrowRight, 
  ChevronLeft,
  Zap, 
  TrendingUp, 
  Layers,
} from 'lucide-react';
import { PageRoute } from './Navbar';

interface CaseMonteCarloPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: PageRoute, slug?: string) => void;
}

export const CaseMonteCarloPage: React.FC<CaseMonteCarloPageProps> = ({
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
            Case Study • Monte Carlo Joias
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
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0DF205]/10 border border-[#0DF205]/30">
                <span className="w-2 h-2 rounded-full bg-[#0DF205] shadow-[0_0_6px_#0DF205]" />
                <span className="text-[#0DF205] text-xs font-bold uppercase tracking-wider">
                  ESTUDO DE CASO • JOALHERIA & E-COMMERCE
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.12] tracking-tight text-white">
                Monte Carlo Joias: <br />
                <span className="text-[#0DF205]">Avanço Preditivo</span> & Escala Digital.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-xl text-[#EFEFEF] font-normal leading-relaxed max-w-2xl">
                Transformação de performance, SEO técnico e inteligência preditiva para a referência nacional em ouro 18k e relógios, expandindo a infraestrutura SEO e IA Indexing para buscadores como Google e Bing.
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

            {/* Right Hero Visual Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#3B4B35]/30 shadow-2xl bg-[#111815] group">
                <img
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80"
                  alt="Monte Carlo Joias Ouro 18k e Relógios"
                  className="w-full h-80 sm:h-96 object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000604] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0DF205] text-black font-black flex items-center justify-center text-lg">
                      MC
                    </div>
                    <div>
                      <div className="text-white font-bold text-base">Monte Carlo Joias</div>
                      <div className="text-white/60 text-xs">Ouro 18k, Joias & Relógios</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-[#0DF205]/20 border border-[#0DF205]/40 rounded text-[#0DF205] text-xs font-bold uppercase">
                    IA INDEXING
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-black/10 items-center">
            
            <div className="pt-4 md:pt-0 px-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-[#00D000] tracking-tight whitespace-nowrap">
                16 → 62
              </div>
              <div className="pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#000604]">
                SCORE PERFORMANCE (+288% MOBILE · 77 DESKTOP)
              </div>
            </div>

            <div className="pt-4 md:pt-0 px-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-[#00D000] tracking-tight whitespace-nowrap">
                -91%
              </div>
              <div className="pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#000604]">
                TOTAL BLOCKING TIME (3.650MS → 310MS)
              </div>
            </div>

            <div className="pt-4 md:pt-0 px-2">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-[#00D000] tracking-tight whitespace-nowrap">
                100/100
              </div>
              <div className="pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#000604]">
                AUDITORIA SEO (ERROS ESTRUTURAIS ZERADOS)
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. O DESAFIO & A SOLUÇÃO */}
      <section className="py-24 bg-white text-[#000604] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* O Desafio Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-7 rounded-2xl bg-[#000604] text-white p-8 sm:p-12 border-l-4 border-[#0DF205] shadow-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#EFEFEF] tracking-tight">
                  O Desafio
                </h2>
                <p className="text-base sm:text-lg text-[#D9D9D9] leading-relaxed">
                  Com grande volume de tráfego e catálogo extenso de ouro 18k e relógios, o e-commerce da Monte Carlo apresentava gargalos severos de carregamento que prejudicavam a taxa de conversão e o ranqueamento orgânico: nota mobile crítica (16/100), scripts de analytics duplicados na página (GA, Optimize, Floodlight), Total Blocking Time de 3.650 ms travando a interatividade e metadados/H1 duplicados com ausência sistemática de alt text em imagens.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0DF205] uppercase tracking-wider">
                  <div className="w-5 h-5 rounded bg-[#0DF205]/20 flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#0DF205] rounded-full" />
                  </div>
                  <span>PERFORMANCE CRÍTICA (16/100) & BLOQUEIO DE 3.650 MS</span>
                </div>

                <div className="text-xs sm:text-sm text-[#D9D9D9]">
                  <span className="text-[#0DF205] font-bold">Frentes: </span>
                  <span>SEO Técnico · Performance Web · Inteligência de Dados & IA Indexing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-2xl relative min-h-[320px] bg-[#000604]">
              <img
                src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80"
                alt="Desafio Monte Carlo Joias"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000604] via-transparent to-transparent" />
            </div>

          </div>

          {/* A Solução & Aceleração de Resultados */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* A Solução */}
            <div className="lg:col-span-6 rounded-2xl bg-[#000604] text-white p-8 sm:p-12 border border-[#3B4B35]/20 shadow-2xl space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#E3E3DF] tracking-tight">
                Soluções Aplicadas
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-[#0DF205]/20 text-[#0DF205] flex items-center justify-center shrink-0 mt-1">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#E3E3DF]">Limpeza de Scripts</h3>
                    <p className="text-sm text-[#B9CCAF] leading-relaxed">
                      Remoção de rastreadores redundantes e unificação do Google Analytics, Floodlight e Optimize para destravar a thread principal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-[#0DF205]/20 text-[#0DF205] flex items-center justify-center shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#E3E3DF]">Correção On-Page (100/100)</h3>
                    <p className="text-sm text-[#B9CCAF] leading-relaxed">
                      Sintaxe H1 corrigida, alt text aplicado a 100% das imagens do catálogo e metadados padronizados sem duplicidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-[#0DF205]/20 text-[#0DF205] flex items-center justify-center shrink-0 mt-1">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#E3E3DF]">JS/CSS & Cache</h3>
                    <p className="text-sm text-[#B9CCAF] leading-relaxed">
                      Compactação de scripts, adiamento de assets pesados e otimização de cabeçalhos de cache para navegação fluida.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Aceleração de Resultados (Chart Simulation) */}
            <div className="lg:col-span-6 rounded-2xl bg-[#000604] text-white p-8 sm:p-12 border border-[#3B4B35]/20 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#EFEFEF] tracking-tight">
                  Arquitetura de Alto Desempenho
                </h2>
                <span className="px-3 py-1 rounded bg-[#0DF205] text-[#013A00] text-xs font-bold uppercase tracking-wider">
                  MÉTRICAS PÓS-OTIMIZAÇÃO
                </span>
              </div>

              {/* Chart Visual Simulation */}
              <div className="h-44 relative flex items-end">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 120">
                  <defs>
                    <linearGradient id="neonGradientMonteCarlo" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0DF205" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#0DF205" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,105 Q70,85 140,55 T240,22 T300,8 L300,120 L0,120 Z"
                    fill="url(#neonGradientMonteCarlo)"
                  />
                  <path
                    d="M0,105 Q70,85 140,55 T240,22 T300,8"
                    fill="none"
                    stroke="#0DF205"
                    strokeWidth="3"
                  />
                  <circle cx="300" cy="8" r="5" fill="#0DF205" className="animate-pulse" />
                </svg>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs sm:text-sm text-[#D9D9D9]">
                <div className="pl-3 border-l-2 border-[#0DF205]">
                  Speed Index reduzido em 83%: de 26,2s para apenas 4,4s no carregamento visual.
                </div>
                <div className="pl-3 border-l-2 border-[#0DF205]">
                  Expansão da infraestrutura SEO para buscadores como Google e Bing.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. THE PULSE - DADOS DE IMPACTO */}
      <section className="py-24 bg-[#000604] text-white border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-2">
            <div className="text-[#0DF205] text-xs sm:text-sm font-bold uppercase tracking-[2px]">
              PAGESPEED INSIGHTS AUDIT
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold uppercase text-[#E3E3DF]">
              Resultados Consolidados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Score Performance */}
            <div className="p-8 rounded-2xl bg-[#0D0F0D] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-bold text-[#B9CCAF] uppercase tracking-wider">
                    SCORE PERFORMANCE
                  </div>
                  <div className="text-2xl font-bold text-[#E3E3DF]">Mobile & Desktop</div>
                </div>
                <div className="flex items-baseline text-[#0DF205] font-bold">
                  <span className="text-4xl">62</span>
                  <span className="text-sm text-[#0DF205]/70">/100</span>
                </div>
              </div>

              {/* Bar progression */}
              <div className="flex items-end justify-between gap-3 h-32 pt-4">
                <div className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs text-white">16</span>
                  <div className="w-full bg-[#DB1481] rounded-t" style={{ height: '24px' }} />
                  <span className="text-[10px] text-white/70">ANTES (MOB)</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs text-white font-bold">62</span>
                  <div className="w-full bg-[#26D3AB] rounded-t" style={{ height: '74px' }} />
                  <span className="text-[10px] text-white/70">DEPOIS (MOB)</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs text-[#0DF205] font-bold">77</span>
                  <div className="w-full bg-[#0DF205] shadow-[0_0_10px_#0DF205] rounded-t" style={{ height: '94px' }} />
                  <span className="text-[10px] text-[#0DF205] font-bold">DESKTOP</span>
                </div>
              </div>
            </div>

            {/* Total Blocking Time */}
            <div className="p-8 rounded-2xl bg-[#0D0F0D] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-bold text-[#B9CCAF] uppercase tracking-wider">
                    TOTAL BLOCKING TIME
                  </div>
                  <div className="text-2xl font-bold text-[#E3E3DF]">Interatividade</div>
                </div>
                <div className="flex items-baseline text-[#0DF205] font-bold">
                  <span className="text-4xl">310</span>
                  <span className="text-sm text-[#0DF205]/70">ms</span>
                </div>
              </div>

              <div className="space-y-4 py-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#B9CCAF] w-14">ANTES</span>
                  <div className="flex-1 h-2 bg-[#333533] rounded-full overflow-hidden">
                    <div className="h-full bg-[#FFB4AB] w-[95%] rounded-full" />
                  </div>
                  <span className="text-sm font-bold text-white w-16 text-right">3.650ms</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#B9CCAF] w-14">FINAL</span>
                  <div className="flex-1 h-2 bg-[#333533] rounded-full overflow-hidden">
                    <div className="h-full bg-[#0DF205] shadow-[0_0_8px_#0DF205] w-[12%] rounded-full" />
                  </div>
                  <span className="text-sm font-bold text-[#0DF205] w-16 text-right">310ms</span>
                </div>
              </div>

              <div className="py-2 px-3 rounded bg-[#0DF205]/10 border border-[#0DF205]/30 text-center text-xs font-bold uppercase tracking-widest text-[#0DF205]">
                ↓ -91% REDUÇÃO DE BLOQUEIO
              </div>
            </div>

            {/* Speed Index & SEO */}
            <div className="p-8 rounded-2xl bg-[#0D0F0D] border border-white/10 space-y-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-[#B9CCAF] uppercase tracking-wider">
                  CARREGAMENTO VISUAL & SEO
                </div>
                <div className="text-2xl font-bold text-[#E3E3DF]">Speed Index & On-Page</div>
              </div>

              <div className="space-y-4 py-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#B9CCAF] w-14">ANTES</span>
                  <div className="flex-1 h-2 bg-[#333533] rounded-full overflow-hidden">
                    <div className="h-full bg-[#FFB4AB] w-[92%] rounded-full" />
                  </div>
                  <span className="text-sm font-bold text-white w-16 text-right">26,2s</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#B9CCAF] w-14">SPEED</span>
                  <div className="flex-1 h-2 bg-[#333533] rounded-full overflow-hidden">
                    <div className="h-full bg-[#0DF205] shadow-[0_0_8px_#0DF205] w-[18%] rounded-full" />
                  </div>
                  <span className="text-sm font-bold text-[#0DF205] w-16 text-right">4,4s</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#B9CCAF] w-14">SEO</span>
                  <div className="flex-1 h-2 bg-[#333533] rounded-full overflow-hidden">
                    <div className="h-full bg-[#0DF205] shadow-[0_0_8px_#0DF205] w-full rounded-full" />
                  </div>
                  <span className="text-sm font-bold text-[#0DF205] w-16 text-right">100/100</span>
                </div>
              </div>

              <div className="py-2 px-3 rounded bg-[#0DF205]/10 border border-[#0DF205]/30 text-center text-xs font-bold uppercase tracking-widest text-[#0DF205]">
                ↓ -83% TEMPO · ERROS ZERADOS
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
