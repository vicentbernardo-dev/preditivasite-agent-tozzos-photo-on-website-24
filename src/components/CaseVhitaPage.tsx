import React from 'react';
import { 
  ArrowRight, 
  ChevronLeft,
} from 'lucide-react';
import { PageRoute } from './Navbar';

interface CaseVhitaPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: PageRoute, slug?: string) => void;
}

export const CaseVhitaPage: React.FC<CaseVhitaPageProps> = ({
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
            Case Study • Vhita
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
                  ESTUDO DE CASO • CRM & AUTOMAÇÃO
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-bold uppercase leading-[1.14] tracking-tight text-white">
                <span className="block">Vhita: Recuperação</span>
                <span className="block">de receita e</span>
                <span className="block">
                  <span className="text-[#0DF205]">escalabilidade recorrente</span>.
                </span>
              </h1>

              <p className="text-base sm:text-xl text-[#EFEFEF] font-normal leading-relaxed max-w-2xl">
                Como recuperamos receita presa na base de clientes do e-commerce de suplementos e nutracêuticos através de higienização e enriquecimento de dados, clusterização RFV e ativação via e-mail e SMS.
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
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80"
                  alt="Vhita Suplementos e Nutracêuticos"
                  className="w-full h-80 sm:h-96 object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000604] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0DF205] text-black font-black flex items-center justify-center text-lg">
                      V
                    </div>
                    <div>
                      <div className="text-white font-bold text-base">Vhita</div>
                      <div className="text-white/60 text-xs">Suplementos & Nutracêuticos</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-[#0DF205]/20 border border-[#0DF205]/40 rounded text-[#0DF205] text-xs font-bold uppercase">
                    CRM & DADOS
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
            
            <div className="pt-4 md:pt-0 px-2 lg:px-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00D000] tracking-tight uppercase whitespace-nowrap">
                R$ 277 MIL
              </div>
              <div className="pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#000604] leading-snug max-w-xs mx-auto">
                POTENCIAL DE RECEITA MAPEADO EM RECUPERAÇÃO E RECOMPRA
              </div>
            </div>

            <div className="pt-4 md:pt-0 px-2 lg:px-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00D000] tracking-tight uppercase whitespace-nowrap">
                +56,5%
              </div>
              <div className="pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#000604] leading-snug max-w-xs mx-auto">
                AUMENTO NO VOLUME DE CLIENTES RECORRENTES NA OPERAÇÃO
              </div>
            </div>

            <div className="pt-4 md:pt-0 px-2 lg:px-4">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#00D000] tracking-tight uppercase whitespace-nowrap">
                +45%
              </div>
              <div className="pt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#000604] leading-snug max-w-xs mx-auto">
                CRESCIMENTO DA BASE DE CLIENTES (2023 VS. 2022) + R$ 117 MIL VIA BLOG
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
                  A Vhita possuía uma base de clientes com receita concentrada e alto risco de churn: 53% da receita estava concentrada no cluster de clientes de maior valor — porém 68% desse cluster encontrava-se em churn ou inativo há mais de 5 meses. Além disso, 46,4% da receita vinha de clientes de compra única (sendo 74% deles inativos) e a base continha mais de 6 mil cadastros de origem suspeita que distorciam as métricas de aquisição.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0DF205] uppercase tracking-wider">
                  <div className="w-5 h-5 rounded bg-[#0DF205]/20 flex items-center justify-center">
                    <span className="w-2 h-2 bg-[#0DF205] rounded-full" />
                  </div>
                  <span>Base de clientes com receita concentrada e em risco de churn.</span>
                </div>

                <div className="text-xs sm:text-sm text-[#D9D9D9]">
                  <span className="text-[#0DF205] font-bold">Frentes: </span>
                  <span>CRM & Automação · Dados · E-commerce</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-2xl relative min-h-[320px] bg-[#000604]">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Diagnóstico de CRM e Dados Vhita"
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
              Solução <span className="text-[#0DF205]">Preditiva</span>
            </h2>
            <p className="text-base sm:text-lg text-[#B9CCAF]">
              Da higienização de dados à ativação de receita recorrente via e-mail e SMS.
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
                  Higienização, Padronização e Enriquecimento da Base
                </h3>
                <p className="text-base text-[#B9CCAF] leading-relaxed">
                  Isolamos e removemos os mais de 6 mil cadastros de origem suspeita que distorciam as leituras de funil, padronizamos os campos cadastrais e realizamos o enriquecimento de dados para alimentar a aquisição de mídia com sinais reais.
                </p>

                <div className="p-6 rounded-lg bg-[#333533]/40 border border-white/10 backdrop-blur-sm space-y-2">
                  <div className="text-[#0DF205] text-xs font-bold uppercase tracking-wider">
                    DIAGNÓSTICO DE BASE
                  </div>
                  <p className="text-sm text-[#E3E3DF] italic">
                    "68% do cluster de maior valor (responsável por 53% da receita) estava inativo há mais de 5 meses — uma mina de ouro pronta para reativação."
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
                  Clusterização e Identificação dos Melhores Clientes (RFV)
                </h3>
                <p className="text-base text-[#B9CCAF] leading-relaxed">
                  Mapeamos a matriz de Recência, Frequência e Valor (RFV) para separar compradores únicos (46,4% da receita, com 74% de inatividade) dos clientes fiéis e em janela de reposição de suplementos.
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
                  Réguas de Recuperação e Recompra (E-mail e SMS)
                </h3>
                <p className="text-base text-[#B9CCAF] leading-relaxed">
                  Ativamos fluxos automatizados de win-back e recompra via e-mail e SMS alinhados ao ciclo de uso dos nutracêuticos, além de captação qualificada integrada ao blog.
                </p>
              </div>
            </div>

          </div>

          {/* IMPACTOS HORIZONTAL CHART */}
          <div className="pt-16 border-t border-white/10 space-y-12">
            
            <div className="text-center">
              <div className="inline-block px-8 py-2 border-y border-[#0DF205]/30">
                <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-[4px] text-[#E3E3DF]">
                  RESULTADOS CONSOLIDADOS
                </h3>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-6">
              
              {[
                { label: 'CRESCIMENTO DA BASE DE CLIENTES (2023 VS. 2022)', val: '+45%', width: '55%', color: 'bg-[#0DF205]/50' },
                { label: 'AUMENTO NO VOLUME DE CLIENTES RECORRENTES', val: '+56,5%', width: '68%', color: 'bg-[#0DF205]/70', callout: 'RECORRÊNCIA' },
                { label: 'RECEITA DIRETA GERADA POR CAPTAÇÃO QUALIFICADA NO BLOG', val: 'R$ 117 mil', width: '78%', color: 'bg-[#0DF205]/80' },
                { 
                  label: 'POTENCIAL DE RECEITA MAPEADO EM RECUPERAÇÃO E RECOMPRA', 
                  val: 'R$ 277 mil', 
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
