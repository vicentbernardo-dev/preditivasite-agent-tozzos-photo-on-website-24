import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronLeft,
  Sparkles, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  Layers,
  ArrowUpRight,
  Database,
  Users,
  Repeat
} from 'lucide-react';
import { PageRoute } from './Navbar';

interface CaseMasterPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: PageRoute) => void;
}

export const CaseMasterPage: React.FC<CaseMasterPageProps> = ({
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
            Case Study • Master Cidadania
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
                Master Cidadania: <br />
                Estruturação de dados e <br />
                <span className="text-[#0DF205]">crescimento acelerado</span>.
              </h1>

              <p className="text-base sm:text-xl text-[#EFEFEF] font-normal leading-relaxed max-w-2xl">
                A Preditiva.co superou os desafios da Master Cidadania ao estruturar o lançamento da marca, gerar tráfego rapidamente e estabelecer uma presença digital robusta para impulsionar o crescimento do negócio.
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
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                  alt="Master Cidadania Global"
                  className="w-full h-80 sm:h-96 object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000604] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0DF205] text-black font-black flex items-center justify-center text-lg">
                      MC
                    </div>
                    <div>
                      <div className="text-white font-bold text-base">Master Cidadania</div>
                      <div className="text-white/60 text-xs">Assessoria & Cidadania Europeia</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-[#0DF205]/20 border border-[#0DF205]/40 rounded text-[#0DF205] text-xs font-bold uppercase">
                    12 PAÍSES
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
                +214%
              </div>
              <div className="pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#000604]">
                LTV IMPACT
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-5xl sm:text-6xl font-bold text-[#00D000] tracking-tight">
                -45%
              </div>
              <div className="pt-2 text-xs sm:text-sm font-bold text-[#000604] leading-tight">
                Redução no custo de aquisição (CAC) via automação de leads.
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-5xl sm:text-6xl font-bold text-[#00D000] tracking-tight">
                92%
              </div>
              <div className="pt-2 text-xs sm:text-sm font-bold text-[#000604] leading-tight">
                Taxa de engajamento em réguas de automação personalizadas.
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
                  A Master Cidadania, especializada em cidadania italiana, enfrentava desafios cruciais: estruturar seu go-to-market, impulsionar o tráfego do site e aumentar o reconhecimento da marca. A Preditiva.co interveio com uma análise detalhada, otimizando a infraestrutura do site, a performance da mídia paga e a estratégia de SEO. A reformulação do setup nos buscadores e a otimização de palavras-chave foram essenciais para o sucesso.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0DF205] uppercase tracking-wider">
                  <div className="w-5 h-5 rounded bg-[#0DF205]/20 flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#0DF205] rounded-full" />
                  </div>
                  <span>Estruturação de go-to-market e reconhecimento de marca.</span>
                </div>

                <div className="text-xs sm:text-sm text-[#D9D9D9]">
                  <span className="text-[#0DF205] font-bold">Frentes: </span>
                  <span>Aceleradora de E-commerce · SEO Técnico + Dev + Infra</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-2xl relative min-h-[320px] bg-[#000604]">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                alt="Desafio Master Cidadania"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000604] via-transparent to-transparent" />
            </div>

          </div>

        </div>
      </section>

      {/* 4. A JORNADA DA AUTOMAÇÃO & IMPACTOS TIMELINE */}
      <section className="py-24 bg-[#000604] text-white border-t border-white/10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#E3E3DF]">
              A Jornada da <span className="text-[#0DF205]">Automação</span>
            </h2>
            <p className="text-base sm:text-lg text-[#B9CCAF]">
              De processos manuais a um ecossistema digital de alta performance.
            </p>
          </div>

          {/* 3 Step Sequence */}
          <div className="space-y-16">
            
            {/* Step 01 */}
            <div className="flex items-start gap-6 sm:gap-10">
              <div className="w-12 h-12 rounded bg-[#0DF205] text-[#013A00] font-black text-lg flex items-center justify-center shrink-0">
                01
              </div>
              <div className="space-y-4 flex-1">
                <h3 className="text-2xl font-bold text-[#E3E3DF]">
                  Auditoria e Higienização
                </h3>
                <p className="text-base text-[#B9CCAF] leading-relaxed">
                  Identificamos gargalos na coleta de dados e realizamos a higienização completa da base histórica, eliminando 30% de redundâncias que impactavam o custo operacional.
                </p>

                {/* Quote Box */}
                <div className="p-6 rounded-lg bg-[#333533]/40 border border-white/10 backdrop-blur-sm space-y-2">
                  <div className="text-[#0DF205] text-xs font-bold uppercase tracking-wider">
                    RESULTADO IMEDIATO
                  </div>
                  <p className="text-sm text-[#E3E3DF] italic">
                    "A clareza dos dados permitiu uma visão real do funil de vendas pela primeira vez em 5 anos."
                  </p>
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="flex items-start gap-6 sm:gap-10">
              <div className="w-12 h-12 rounded border-2 border-[#0DF205] text-[#0DF205] font-black text-lg flex items-center justify-center shrink-0 bg-[#0DF205]/10">
                02
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-2xl font-bold text-[#E3E3DF]">
                  Fluxos de Nutrição Dinâmicos
                </h3>
                <p className="text-base text-[#B9CCAF] leading-relaxed">
                  Implementamos réguas de automação baseadas em comportamento (lead scoring), entregando o conteúdo certo no momento exato da decisão do cliente.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="flex items-start gap-6 sm:gap-10">
              <div className="w-12 h-12 rounded bg-[#0DF205] text-[#013A00] font-black text-lg flex items-center justify-center shrink-0">
                03
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-2xl font-bold text-[#E3E3DF]">
                  Maximização do LTV
                </h3>
                <p className="text-base text-[#B9CCAF] leading-relaxed">
                  Com a base estruturada, criamos campanhas de cross-sell e up-sell automatizadas, garantindo que o cliente permaneça no ecossistema da Master Cidadania por mais tempo.
                </p>
              </div>
            </div>

          </div>

          {/* IMPACTOS HORIZONTAL CHART */}
          <div className="pt-16 border-t border-white/10 space-y-12">
            
            <div className="text-center">
              <div className="inline-block px-8 py-2 border-y border-[#0DF205]/30">
                <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-[4px] text-[#E3E3DF]">
                  IMPACTOS
                </h3>
              </div>
            </div>

            {/* Timeline Progress Bars */}
            <div className="space-y-6">
              
              {[
                { label: 'JUN/24', val: '556', width: '12%', color: 'bg-[#0DF205]/30' },
                { label: 'JUL/24', val: '611', width: '14%', color: 'bg-[#0DF205]/30' },
                { label: 'AGO/24', val: '641', width: '16%', color: 'bg-[#0DF205]/30' },
                { label: 'SET/24', val: '756', width: '20%', color: 'bg-[#0DF205]/30' },
                { label: 'OUT/24', val: '710', width: '18%', color: 'bg-[#0DF205]/30' },
                { label: 'NOV/24', val: '3771', width: '60%', color: 'bg-[#0DF205]/60' },
                { 
                  label: 'DEZ/24', 
                  val: '2329', 
                  width: '45%', 
                  color: 'bg-[#0DF205]/50', 
                  callout: '+236%' 
                },
                { 
                  label: 'JAN/25', 
                  val: '7843', 
                  width: '100%', 
                  color: 'bg-[#0DF205] shadow-[0_0_20px_#0DF205]',
                  isHighlight: true
                },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="text-xs font-bold text-[#B9CCAF] uppercase tracking-wider">
                    {item.label}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-10 bg-[#1A1C1A] rounded overflow-hidden relative flex items-center">
                      <div 
                        className={`h-full ${item.color} rounded flex items-center px-4 transition-all duration-500`} 
                        style={{ width: item.width }}
                      >
                        <span className={`text-xs font-bold ${item.isHighlight ? 'text-[#013A00]' : 'text-white'}`}>
                          {item.val}
                        </span>
                      </div>
                    </div>

                    {item.callout && (
                      <span className="px-3 py-1 bg-[#333533] border border-[#0DF205]/40 text-[#0DF205] text-sm font-bold rounded">
                        {item.callout}
                      </span>
                    )}
                  </div>
                </div>
              ))}

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
