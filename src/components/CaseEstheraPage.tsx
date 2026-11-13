import React from 'react';
import { 
  ArrowRight, 
  ChevronLeft,
  Sparkles, 
  TrendingUp, 
  Download, 
  Target,
} from 'lucide-react';
import { PageRoute } from './Navbar';

interface CaseEstheraPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: PageRoute, slug?: string) => void;
}

export const CaseEstheraPage: React.FC<CaseEstheraPageProps> = ({
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
            Case Study • Esthera
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
                  ESTUDO DE CASO • MÍDIA DE PERFORMANCE
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[46px] font-bold uppercase leading-[1.15] tracking-tight text-white">
                <span className="block">Esthera:</span>
                <span className="block sm:whitespace-nowrap">
                  De R$ 3,4 mil para <span className="text-[#0DF205]">R$ 88,2 mil/mês</span>
                </span>
                <span className="block">com CPV em queda livre</span>
              </h1>

              <p className="text-base sm:text-xl text-[#EFEFEF] font-normal leading-relaxed max-w-2xl">
                Como estruturamos a operação de mídia paga (Google + Meta) e a performance técnica do site de moda e acessórios (bolsas) para sustentar crescimento consistente de vendas ao longo do ano.
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
                  src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80"
                  alt="Esthera Moda e Acessórios Bolsas"
                  className="w-full h-80 sm:h-96 object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000604] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0DF205] text-black font-black flex items-center justify-center text-lg">
                      E
                    </div>
                    <div>
                      <div className="text-white font-bold text-base">Esthera</div>
                      <div className="text-white/60 text-xs">Moda & Acessórios (Bolsas)</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-[#0DF205]/20 border border-[#0DF205]/40 rounded text-[#0DF205] text-xs font-bold uppercase">
                    MÍDIA & CRO
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
          <div className="flex flex-col md:flex-row items-center justify-between text-center divide-y md:divide-y-0 md:divide-x divide-black/10">
            
            <div className="w-full md:w-auto md:flex-auto py-4 md:py-0 md:px-6 lg:px-10">
              <div className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-[#00D000] tracking-tight uppercase whitespace-nowrap">
                2 → 46
              </div>
              <div className="pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#000604] leading-snug">
                VENDAS/MÊS (COM PICO DE 92 EM JULHO)
              </div>
            </div>

            <div className="w-full md:w-auto md:flex-auto py-4 md:py-0 md:px-6 lg:px-10">
              <div className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-[#00D000] tracking-tight uppercase whitespace-nowrap">
                R$ 4.996 → R$ 219
              </div>
              <div className="pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#000604] leading-snug">
                REDUÇÃO NO CUSTO POR VENDA (CPV)
              </div>
            </div>

            <div className="w-full md:w-auto md:flex-auto py-4 md:py-0 md:px-6 lg:px-10">
              <div className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-bold text-[#00D000] tracking-tight uppercase whitespace-nowrap">
                R$ 3,4K → R$ 88,2K
              </div>
              <div className="pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#000604] leading-snug">
                RECEITA MENSAL (JANEIRO → SETEMBRO)
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
                  Antes da entrada da Preditiva, a Esthera operava mídia sem planejamento estruturado nem calendário de testes. O site apresentava performance mobile baixa — com um vídeo de 7MB na home e imagens fora do padrão WebP — o que elevava o custo por venda (CPV) inicial para R$ 4.996 em janeiro, sinal claro de ineficiência de verba e fricção na conversão.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0DF205] uppercase tracking-wider">
                  <div className="w-5 h-5 rounded bg-[#0DF205]/20 flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#0DF205] rounded-full" />
                  </div>
                  <span>ESTRUTURAR MÍDIA (GOOGLE + META) E PERFORMANCE DO SITE</span>
                </div>

                <div className="text-xs sm:text-sm text-[#D9D9D9]">
                  <span className="text-[#0DF205] font-bold">Frentes: </span>
                  <span>Mídia de Performance · CRO & Landing Pages · E-commerce</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-2xl relative min-h-[320px] bg-[#000604]">
              <img
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
                alt="Desafio Esthera E-commerce"
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
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Pillars */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold uppercase text-[#E3E3DF]">
                  Solução Preditiva
                </h2>
                <p className="text-sm sm:text-base text-[#B9CCAF] leading-relaxed">
                  Unimos diagnóstico técnico do site e reestruturação completa do funil de aquisição para transformar verba de mídia em receita previsível.
                </p>
              </div>

              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded bg-[#292A28] text-[#0DF205] shrink-0 mt-1">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#E3E3DF]">Funil de Mídia (PMax, Search, Display & Social)</h3>
                    <p className="text-sm text-[#B9CCAF] leading-relaxed">
                      Estruturação completa de Google Ads e Meta Ads com calendário de campanhas, testes de landing page e plano dedicado de Black Friday.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded bg-[#292A28] text-[#0DF205] shrink-0 mt-1">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#E3E3DF]">Otimização Técnica Mobile & Gestão Semanal</h3>
                    <p className="text-sm text-[#B9CCAF] leading-relaxed">
                      Adequação de assets pesados para WebP e acompanhamento semanal de planejado vs. realizado por canal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Charts */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
              
              {/* Curva de Receita Mensal Bar Chart */}
              <div className="p-7 sm:p-8 rounded-xl bg-[#1A1C1A] border-l-4 border-[#0DF205] border-y border-r border-white/5 flex flex-col justify-between h-full">
                <div className="text-xs font-bold text-[#B9CCAF] uppercase tracking-wider">
                  CURVA DE CRESCIMENTO (JAN → SET)
                </div>

                {/* Monthly Bars */}
                <div className="flex-1 min-h-[190px] flex items-end justify-between gap-2.5 pt-10">
                  {[
                    { month: 'JAN', height: '14%', opacity: 'bg-[#0DF205]/20' },
                    { month: 'MAR', height: '34%', opacity: 'bg-[#0DF205]/30' },
                    { month: 'MAI', height: '56%', opacity: 'bg-[#0DF205]/50' },
                    { month: 'JUL', height: '100%', opacity: 'bg-[#0DF205]', peak: true },
                    { month: 'AGO', height: '82%', opacity: 'bg-[#0DF205]/80' },
                    { month: 'SET', height: '92%', opacity: 'bg-[#0DF205]/90' },
                  ].map((bar, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end relative">
                      {bar.peak && (
                        <span className="absolute -top-7 whitespace-nowrap px-1.5 py-0.5 bg-[#0DF205] text-[#013A00] font-bold text-[9px] rounded shadow-[0_0_10px_rgba(13,242,5,0.4)]">
                          92 VENDAS
                        </span>
                      )}
                      <div className={`w-full rounded-t ${bar.opacity}`} style={{ height: bar.height }} />
                      <span className="text-[10px] text-[#B9CCAF] font-bold">{bar.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eficiência de CPV */}
              <div className="p-7 sm:p-8 rounded-xl bg-[#333533]/40 border border-white/10 backdrop-blur-md flex flex-col justify-between h-full">
                <div className="flex items-center justify-between">
                  <div className="w-5 h-3 bg-[#0DF205] rounded" />
                  <span className="px-2.5 py-1 rounded-full border border-[#0DF205]/30 text-[#0DF205] text-[10px] font-bold uppercase">
                    -95,6% CPV
                  </span>
                </div>

                <div className="my-auto py-6 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#B9CCAF]">
                    Eficiência de Verba
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#E3E3DF] leading-tight">
                    Planejado × Realizado
                  </div>
                  <p className="text-xs text-[#B9CCAF]/80 leading-relaxed pt-1">
                    Redução contínua do custo de aquisição com escala de faturamento.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <div className="h-2.5 bg-[#292A28] rounded-full overflow-hidden">
                    <div className="h-full bg-[#0DF205] w-[95%] shadow-[0_0_10px_#0DF205]" />
                  </div>
                  <div className="flex justify-between text-[10px] text-[#B9CCAF] font-bold uppercase tracking-wider">
                    <span>JAN: R$ 4.996</span>
                    <span className="text-[#0DF205]">SET: R$ 219</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* 4 Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Receita Mensal */}
            <div className="p-6 rounded-xl bg-[#1A1C1A] border border-white/5 space-y-4">
              <div className="text-xs font-bold text-[#B9CCAF] uppercase tracking-wider">
                RECEITA MENSAL
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#E3E3DF]">R$ 88,2k</span>
                <span className="text-xs font-bold text-[#0DF205]">SET</span>
              </div>
              <div className="flex items-end justify-between gap-3 pt-2">
                <div className="flex-1 h-14 flex items-end gap-1">
                  <div className="flex-1 bg-[#333533] h-[15%]" />
                  <div className="flex-1 bg-[#333533] h-[35%]" />
                  <div className="flex-1 bg-[#333533] h-[65%]" />
                  <div className="flex-1 bg-[#0DF205] h-[95%] shadow-[0_0_10px_#0DF205]" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-[#B9CCAF] font-bold">JAN INICIAL</div>
                  <div className="text-sm text-[#0DF205] font-bold">R$ 3,4k</div>
                </div>
              </div>
            </div>

            {/* Card 2: Vendas por Mês */}
            <div className="p-6 rounded-xl bg-[#1A1C1A] border border-white/5 space-y-4">
              <div className="text-xs font-bold text-[#B9CCAF] uppercase tracking-wider">
                VENDAS POR MÊS
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#E3E3DF]">46</span>
                <span className="text-xs font-bold text-[#0DF205]">PICO 92</span>
              </div>
              <div className="flex items-end justify-between gap-3 pt-2">
                <div className="flex-1 h-14 flex items-end gap-1">
                  <div className="flex-1 bg-[#333533] h-[10%]" />
                  <div className="flex-1 bg-[#333533] h-[40%]" />
                  <div className="flex-1 bg-[#0DF205] h-[100%] shadow-[0_0_10px_#0DF205]" />
                  <div className="flex-1 bg-[#0DF205]/80 h-[75%]" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-[#B9CCAF] font-bold">JAN INICIAL</div>
                  <div className="text-sm text-[#0DF205] font-bold">2 vendas</div>
                </div>
              </div>
            </div>

            {/* Card 3: Ticket Médio */}
            <div className="p-6 rounded-xl bg-[#1A1C1A] border border-white/5 space-y-4">
              <div className="text-xs font-bold text-[#B9CCAF] uppercase tracking-wider">
                TICKET MÉDIO
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#E3E3DF]">R$ 1.917</span>
                <span className="text-xs font-bold text-[#0DF205]">+14,2%</span>
              </div>
              <div className="flex items-end justify-between gap-3 pt-2">
                <div className="flex-1 h-14 flex items-end gap-1">
                  <div className="flex-1 bg-[#333533] h-[60%]" />
                  <div className="flex-1 bg-[#333533] h-[70%]" />
                  <div className="flex-1 bg-[#333533] h-[80%]" />
                  <div className="flex-1 bg-[#0DF205] h-[95%] shadow-[0_0_10px_#0DF205]" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-[#B9CCAF] font-bold">JAN INICIAL</div>
                  <div className="text-sm text-[#0DF205] font-bold">R$ 1.678</div>
                </div>
              </div>
            </div>

            {/* Card 4: Custo por Venda (CPV) */}
            <div className="p-6 rounded-xl bg-[#1A1C1A] border border-white/5 space-y-4">
              <div className="text-xs font-bold text-[#B9CCAF] uppercase tracking-wider">
                CUSTO POR VENDA (CPV)
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#E3E3DF]">R$ 219</span>
                <span className="text-xs font-bold text-[#0DF205]">-95,6%</span>
              </div>
              <div className="flex items-end justify-between gap-3 pt-2">
                <div className="flex-1 h-14 flex items-end gap-1">
                  <div className="flex-1 bg-[#333533] h-[95%]" />
                  <div className="flex-1 bg-[#333533] h-[55%]" />
                  <div className="flex-1 bg-[#333533] h-[30%]" />
                  <div className="flex-1 bg-[#0DF205] h-[15%] shadow-[0_0_10px_#0DF205]" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-[#B9CCAF] font-bold">JAN INICIAL</div>
                  <div className="text-sm text-[#0DF205] font-bold">R$ 4.996</div>
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
                <h3 className="text-xl font-bold text-[#E3E3DF]">Eficiência de Ponta a Ponta</h3>
                <p className="text-sm text-[#B9CCAF] leading-relaxed">
                  A queda do custo por venda de R$ 4.996 para R$ 219 combinada ao aumento do ticket médio para R$ 1.917 comprova que mídia de alta performance depende de página rápida e funil estruturado.
                </p>
              </div>

              <button
                onClick={onOpenAuditModal}
                className="w-full py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#013A00] font-bold text-xs uppercase tracking-widest rounded transition-all shadow-[0_0_15px_rgba(13,242,5,0.3)] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>SOLICITAR DIAGNÓSTICO DE MÍDIA</span>
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-6 rounded-2xl overflow-hidden relative border border-white/10 min-h-[260px] group cursor-pointer" onClick={() => onNavigatePage('especialidade-midia')}>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Especialidade Mídia de Performance"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 absolute inset-0"
              />
              <div className="absolute inset-0 bg-[#121412]/60" />
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <div className="text-[#0DF205] text-xs font-bold uppercase tracking-[2px]">
                  ESPECIALIDADE • MÍDIA DE PERFORMANCE
                </div>
                <div className="text-xl font-bold text-[#E3E3DF] group-hover:text-[#0DF205] transition-colors">
                  Como estruturamos Google + Meta orientado a margem e conversão
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
