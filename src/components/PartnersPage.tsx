import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  ChevronDown, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  Award, 
  GraduationCap, 
  Rocket, 
  TrendingUp, 
  Search, 
  Database, 
  Code2, 
  Zap, 
  CheckCircle2,
  Send,
  Building2,
  HelpCircle
} from 'lucide-react';
import { PageRoute } from './Navbar';

interface PartnersPageProps {
  onOpenAuditModal: () => void;
  onNavigatePage: (page: PageRoute) => void;
}

interface PartnerLevel {
  level: string;
  name: string;
  badgeColor: string;
  glowColor?: string;
  isPlatinum?: boolean;
  features: { text: string; isBold?: boolean }[];
}

export const PartnersPage: React.FC<PartnersPageProps> = ({
  onOpenAuditModal,
  onNavigatePage,
}) => {
  // Hero Partner Form State
  const [heroForm, setHeroForm] = useState({
    nome: '',
    empresa: '',
    email: '',
    tipoNegocio: 'Consultoria',
  });
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  // Bottom CTA Form State
  const [bottomForm, setBottomForm] = useState({
    nome: '',
    email: '',
  });
  const [bottomSubmitted, setBottomSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroForm.nome || !heroForm.email) return;
    setHeroSubmitted(true);
  };

  const handleBottomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bottomForm.nome || !bottomForm.email) return;
    setBottomSubmitted(true);
  };

  const partnerLevels: PartnerLevel[] = [
    {
      level: 'Level 01',
      name: 'Bronze',
      badgeColor: '#CD7F32',
      features: [
        { text: 'Dashboard Básico' },
        { text: 'Kit de Marketing' },
        { text: 'Suporte por E-mail' },
      ],
    },
    {
      level: 'Level 02',
      name: 'Prata',
      badgeColor: '#C0C0C0',
      features: [
        { text: 'Todos do Bronze', isBold: true },
        { text: 'Eventos Exclusivos' },
        { text: 'Badge Prata' },
        { text: 'Manager Dedicado' },
      ],
    },
    {
      level: 'Level 03',
      name: 'Ouro',
      badgeColor: '#FFD700',
      features: [
        { text: 'Todos do Prata', isBold: true },
        { text: 'Página no Diretório' },
        { text: 'Webinars em Conjunto' },
        { text: 'Beta Tests' },
      ],
    },
    {
      level: 'Level 04',
      name: 'Platinum',
      badgeColor: '#0DF205',
      glowColor: 'rgba(0, 255, 0, 0.5)',
      isPlatinum: true,
      features: [
        { text: 'Todos do Ouro', isBold: true },
        { text: 'Co-Marketing Estratégico' },
        { text: 'Acesso à API' },
        { text: 'VIP Networking Day' },
      ],
    },
  ];

  const whyBePartnerCards = [
    {
      title: 'Remuneração por resultado',
      desc: 'Receba comissões por indicações qualificadas que se transformam em projetos ativos.',
      icon: TrendingUp,
    },
    {
      title: 'Dashboard de acompanhamento',
      desc: 'Monitore o andamento das oportunidades indicadas em tempo real.',
      icon: BarChart3,
    },
    {
      title: 'Rede qualificada',
      desc: 'Conecte-se com especialistas, agências e empresas do mercado digital.',
      icon: Users,
    },
    {
      title: 'Visibilidade de marca',
      desc: 'Fortaleça sua autoridade através do selo oficial de parceria.',
      icon: Award,
    },
    {
      title: 'Capacitação contínua',
      desc: 'Acesse conteúdos, workshops e treinamentos exclusivos.',
      icon: GraduationCap,
    },
    {
      title: 'Crescimento conjunto',
      desc: 'Participe de um ecossistema focado em colaboração e geração de negócios.',
      icon: Rocket,
    },
  ];

  const partnerTypes = [
    'Consultorias',
    'Agências de Marketing',
    'Agências de Performance',
    'Escritórios de Tecnologia',
    'Plataformas SaaS',
    'Produtoras Digitais',
    'Profissionais de Growth',
    'Investidores',
    'Comunidades de Negócios',
  ];

  const partnerJourney = [
    {
      step: 1,
      title: 'Cadastro',
      desc: 'Preencha o formulário e passe por nossa curadoria rápida.',
    },
    {
      step: 2,
      title: 'Indicação',
      desc: 'Identifique oportunidades e envie os dados pelo dashboard.',
    },
    {
      step: 3,
      title: 'Execução',
      desc: 'Nosso time de experts assume o processo comercial e técnico.',
    },
    {
      step: 4,
      title: 'Resultado',
      desc: 'Você colhe os benefícios da indicação e fortalece sua rede.',
    },
  ];

  const technicalFronts = [
    { name: 'SEO', icon: Search },
    { name: 'CRM', icon: Users },
    { name: 'Dados', icon: Database },
    { name: 'Growth', icon: TrendingUp },
    { name: 'Desenvolvimento', icon: Code2 },
    { name: 'Performance', icon: Zap },
  ];

  const faqItems = [
    {
      question: 'Por que me tornar um Partner?',
      answer:
        'Ao se tornar um Partner Preditiva, sua empresa passa a oferecer aos seus clientes soluções avançadas de SEO Técnico, CRM Preditivo, Engenharia de Dados e Growth sem custos operacionais adicionais, além de ser remunerada por cada indicação qualificada.',
    },
    {
      question: 'Como funciona? Quais são os benefícios?',
      answer:
        'Você cadastra sua empresa, obtém acesso imediato ao Dashboard de Parceiros e conta com um canal direto com nosso time de negócios. Conforme indica projetos ou executa em conjunto, recebe comissões recorrentes, treinamentos exclusivos e visibilidade no ecossistema.',
    },
    {
      question: 'O que são os Níveis de Parceria?',
      answer:
        'A estrutura em 4 níveis (Bronze, Prata, Ouro e Platinum) premia a recorrência e o volume de negócios gerados. A cada nível atingido, você desbloqueia novos benefícios como eventos VIP, co-marketing, página dedicada em nosso diretório e acesso à nossa API.',
    },
    {
      question: 'Como funciona o pagamento?',
      answer:
        'As comissões são pagas mensalmente após a confirmação e faturamento do contrato com o cliente indicado, diretamente via transferência bancária com relatório transparente disponível em seu painel.',
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#000604] text-white font-familjen min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-[#000604]">
        {/* Glowing Background Radial Orbs from Figma */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-40 right-[-10%] w-[650px] lg:w-[850px] h-[550px] bg-[#0DF205]/20 rounded-full blur-[180px] -rotate-12"
        />
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-[40%] left-[-15%] w-[600px] lg:w-[750px] h-[500px] bg-[#26D3AB]/15 rounded-full blur-[200px] rotate-25"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Column: Headline & Value Proposition */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Eyebrow */}
              <div className="text-xs sm:text-sm font-semibold text-[#0DF205] uppercase tracking-[2px] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0DF205] animate-ping" />
                <span>PROGRAMA PREDITIVA PARTNERS</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold uppercase leading-[1.12] tracking-tight">
                <span className="text-[#0DF205] drop-shadow-[0_0_25px_rgba(13,242,5,0.3)]">
                  Programa de Parcerias
                </span>
                <br />
                <span className="text-[#EFEFEF]">
                  para Agências, Consultorias e Especialistas Digitais
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-[#EFEFEF] font-normal leading-relaxed max-w-2xl">
                O Programa Preditiva Partners conecta agências, consultorias, escritórios, plataformas e especialistas a oportunidades reais em SEO, CRM, Dados, Growth e Performance Digital.
              </p>

              {/* Fronts List */}
              <div className="text-base sm:text-lg text-[#0DF205] font-medium leading-relaxed">
                SEO • CRM • Dados • Growth • CRO • Performance • Desenvolvimento
              </div>

              {/* Feature Checks */}
              <div className="pt-2 flex flex-wrap items-center gap-6 sm:gap-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0DF205] flex items-center justify-center text-[#000604]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-base text-[#D9D9D9] font-normal">
                    Sem taxas de adesão
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0DF205] flex items-center justify-center text-[#000604]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-base text-[#D9D9D9] font-normal">
                    Dashboard exclusivo
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Torne-se um Partner Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="p-2 bg-[#000604] border border-[#0DF205]/20 rounded-2xl shadow-2xl backdrop-blur-xl">
                <div className="p-6 sm:p-8 bg-[#000604] border border-[#3B4B35]/20 rounded-xl space-y-6">
                  
                  <h3 className="text-2xl font-bold text-[#EFEFEF] tracking-tight">
                    Torne-se um Partner
                  </h3>

                  {heroSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-6 rounded-xl bg-[#0DF205]/10 border border-[#0DF205] text-center space-y-3"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#0DF205] text-[#000604] flex items-center justify-center mx-auto shadow-[0_0_20px_#0DF205]">
                        <Check className="w-6 h-6 stroke-[3]" />
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        Solicitação enviada!
                      </h4>
                      <p className="text-sm text-[#B9CCAF]">
                        Nossa equipe entrará em contato em breve para apresentar o programa e liberar seu acesso.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleHeroSubmit} className="space-y-4">
                      
                      {/* Name & Company in 2 cols */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#D9D9D9]">
                            Nome
                          </label>
                          <input
                            type="text"
                            required
                            value={heroForm.nome}
                            onChange={(e) => setHeroForm({ ...heroForm, nome: e.target.value })}
                            placeholder="Seu nome"
                            className="w-full bg-[#2B3733]/80 border border-[#3B4B35]/40 focus:border-[#0DF205] rounded-md px-3.5 py-3 text-sm text-white placeholder-[#D9D9D9]/50 focus:outline-none transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#D9D9D9]">
                            Empresa
                          </label>
                          <input
                            type="text"
                            required
                            value={heroForm.empresa}
                            onChange={(e) => setHeroForm({ ...heroForm, empresa: e.target.value })}
                            placeholder="Nome da empresa"
                            className="w-full bg-[#2B3733]/80 border border-[#3B4B35]/40 focus:border-[#0DF205] rounded-md px-3.5 py-3 text-sm text-white placeholder-[#D9D9D9]/50 focus:outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Corporate Email */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#D9D9D9]">
                          E-mail Corporativo
                        </label>
                        <input
                          type="email"
                          required
                          value={heroForm.email}
                          onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                          placeholder="seu@email.com.br"
                          className="w-full bg-[#2B3733]/80 border border-[#3B4B35]/40 focus:border-[#0DF205] rounded-md px-3.5 py-3 text-sm text-white placeholder-[#D9D9D9]/50 focus:outline-none transition-all"
                        />
                      </div>

                      {/* Business Type */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#D9D9D9]">
                          Tipo de Negócio
                        </label>
                        <div className="relative">
                          <select
                            value={heroForm.tipoNegocio}
                            onChange={(e) => setHeroForm({ ...heroForm, tipoNegocio: e.target.value })}
                            className="w-full bg-[#2B3733]/80 border border-[#3B4B35]/40 focus:border-[#0DF205] rounded-md px-3.5 py-3 text-sm text-[#EFEFEF] appearance-none focus:outline-none transition-all cursor-pointer"
                          >
                            <option value="Consultoria" className="bg-[#111815] text-white">Consultoria</option>
                            <option value="Agência de Marketing" className="bg-[#111815] text-white">Agência de Marketing</option>
                            <option value="Agência de Performance" className="bg-[#111815] text-white">Agência de Performance</option>
                            <option value="Escritório de Tecnologia" className="bg-[#111815] text-white">Escritório de Tecnologia</option>
                            <option value="Plataforma SaaS" className="bg-[#111815] text-white">Plataforma SaaS</option>
                            <option value="Produtora Digital" className="bg-[#111815] text-white">Produtora Digital</option>
                            <option value="Profissional de Growth" className="bg-[#111815] text-white">Profissional de Growth</option>
                            <option value="Investidor" className="bg-[#111815] text-white">Investidor</option>
                            <option value="Outro" className="bg-[#111815] text-white">Outro</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-[#D9D9D9] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full py-4 bg-[#0DF205] hover:bg-[#0be004] text-[#000604] font-bold text-base uppercase tracking-wider rounded-md transition-all duration-200 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(13,242,5,0.4)] cursor-pointer mt-4"
                      >
                        Quero Participar
                      </button>

                    </form>
                  )}

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. SECTION: O QUE É O PROGRAMA PREDITIVA PARTNERS */}
      <section className="bg-white text-[#000604] pt-20 pb-16 relative rounded-t-[50px] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold uppercase leading-tight tracking-tight text-[#000604]">
            O Que é o Programa Preditiva Partners
          </h2>
          
          {/* Green accent line from Figma */}
          <div className="w-20 h-1 bg-[#0DF205] mx-auto rounded-full" />

          <p className="text-base sm:text-lg text-[#000604]/90 font-normal leading-relaxed max-w-3xl mx-auto pt-2">
            O Preditiva Partners é um programa de parcerias criado para conectar empresas e especialistas a oportunidades de crescimento através da indicação, execução e desenvolvimento conjunto de projetos digitais.
          </p>
        </div>
      </section>

      {/* 3. SECTION: POR QUE SER UM PARTNER? (WHITE BACKGROUND) */}
      <section className="bg-white text-[#000604] pb-24 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-5xl font-bold uppercase text-[#000604] tracking-tight">
              Por que ser um Partner?
            </h3>
            <p className="text-base sm:text-lg text-[#000604]/80 font-normal leading-relaxed">
              Desenvolvemos uma infraestrutura completa para que você foque no relacionamento enquanto nós entregamos a inteligência.
            </p>
          </div>

          {/* 6 Dark Cards Grid inside White Container from PDF */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyBePartnerCards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-[#000604] border border-[#0DF205]/20 text-white space-y-4 shadow-xl hover:border-[#0DF205]/60 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#111815] border border-[#0DF205]/40 flex items-center justify-center text-[#0DF205] shadow-sm group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  <h4 className="text-2xl font-medium text-white tracking-tight leading-snug">
                    {card.title}
                  </h4>

                  <p className="text-base text-[#D9D9D9] font-normal leading-relaxed opacity-90">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. SECTION: NÍVEIS DE PARCERIA */}
      <section className="bg-white pb-20 pt-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-[40px] bg-[#000604] p-8 sm:p-14 lg:p-20 relative overflow-hidden border border-[#0DF205]/30 shadow-2xl">
          
          {/* Internal Glowing Backgrounds */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-40 right-[-10%] w-[600px] h-[500px] bg-[#0DF205]/20 rounded-full blur-[180px]"
          />
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -bottom-20 left-[-10%] w-[500px] h-[400px] bg-[#26D3AB]/20 rounded-full blur-[160px]"
          />

          <div className="relative z-10 space-y-14">
            
            {/* Header */}
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h3 className="text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight">
                Níveis de Parceria
              </h3>
              <p className="text-base sm:text-lg text-[#D9D9D9] font-normal leading-relaxed">
                O programa foi estruturado para acompanhar a evolução dos parceiros e ampliar benefícios conforme o volume de relacionamento e oportunidades geradas.
              </p>
            </div>

            {/* 4 Tier Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerLevels.map((lvl) => (
                <div
                  key={lvl.name}
                  className={`rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                    lvl.isPlatinum
                      ? 'bg-gradient-to-b from-[#202C29] to-[#091612] border-2 border-[#0DF205] shadow-[0_0_30px_rgba(13,242,5,0.25)] scale-[1.02]'
                      : 'bg-[#000604] border border-[#0DF205]/20 hover:border-[#0DF205]/50 shadow-xl'
                  }`}
                >
                  {/* Card Header */}
                  <div className={`p-6 border-b ${lvl.isPlatinum ? 'border-[#0DF205]/30' : 'border-white/10'}`}>
                    <div 
                      className="text-xs font-semibold uppercase tracking-wider mb-1"
                      style={{ color: lvl.badgeColor }}
                    >
                      {lvl.level}
                    </div>
                    <h4 className={`text-2xl font-medium ${lvl.isPlatinum ? 'text-[#0DF205] font-bold drop-shadow-[0_0_10px_rgba(13,242,5,0.5)]' : 'text-white'}`}>
                      {lvl.name}
                    </h4>
                  </div>

                  {/* Card Features List */}
                  <div className="p-6 flex-1 space-y-3.5">
                    {lvl.features.map((feat) => (
                      <div key={feat.text} className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0DF205] shrink-0" />
                        <span className={`text-sm sm:text-base ${feat.isBold ? 'text-white font-bold' : 'text-[#D9D9D9]'}`}>
                          {feat.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 5. SECTION: QUEM PODE SE TORNAR UM PARCEIRO PREDITIVA */}
      <section className="py-20 bg-[#000604] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold uppercase leading-tight tracking-tight text-white">
                Quem Pode se <br />
                Tornar um <br />
                <span className="text-[#0DF205]">Parceiro Preditiva</span>
              </h2>

              <p className="text-lg sm:text-xl text-[#D9D9D9] font-normal leading-relaxed">
                O programa é voltado para empresas e profissionais que possuem relacionamento com negócios digitais e buscam elevar a entrega técnica aos seus clientes.
              </p>
            </div>

            {/* Right Column: 3x3 Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {partnerTypes.map((type) => (
                <div
                  key={type}
                  className="p-5 rounded-xl bg-[#0D0F0D] border border-[#3B4B35]/30 hover:border-[#0DF205]/50 flex items-center gap-3.5 transition-all shadow-md group"
                >
                  <div className="w-3 h-3 rounded-full bg-[#0DF205] group-hover:scale-125 transition-transform" />
                  <span className="text-base font-normal text-white group-hover:text-[#0DF205] transition-colors leading-snug">
                    {type}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. SECTION: A JORNADA DO PARTNER */}
      <section className="py-24 bg-[#000604] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight">
              A Jornada do Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerJourney.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: step.step * 0.1 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Step Number Badge */}
                <div className="w-14 h-14 rounded-2xl bg-[#00FF00] text-[#027100] font-bold text-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,255,0,0.3)]">
                  {step.step}
                </div>

                {/* Step Title */}
                <h3 className="text-2xl font-medium text-[#D8E6DF]">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-base text-[#B9CCAF] font-normal leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. SECTION: POR QUE EMPRESAS ESCOLHEM A PREDITIVA */}
      <section className="py-24 bg-[#000604] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Strengths */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-5xl font-bold uppercase leading-tight tracking-tight text-white">
                  Por Que Empresas <br />
                  Escolhem a <span className="text-[#0DF205]">Preditiva</span>
                </h2>

                <p className="text-lg sm:text-xl text-[#D9D9D9] font-normal leading-relaxed">
                  Os parceiros contam com uma estrutura especializada para atender demandas complexas sem precisar ampliar equipes internas ou se preocupar com a gestão operacional técnica.
                </p>
              </div>

              {/* Differentiators */}
              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#0DF205] text-[#000604] flex items-center justify-center mt-1 shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold uppercase tracking-wider text-white">
                      Time Sênior de Execução
                    </h4>
                    <p className="text-base text-[#D9D9D9] leading-relaxed">
                      Profissionais com experiência em grandes contas e projetos globais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#0DF205] text-[#000604] flex items-center justify-center mt-1 shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold uppercase tracking-wider text-white">
                      Cultura Data-Driven
                    </h4>
                    <p className="text-base text-[#D9D9D9] leading-relaxed">
                      Todas as decisões são baseadas em dados e evidências estatísticas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 6 Capabilities Cards Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technicalFronts.map((front) => {
                const Icon = front.icon;
                return (
                  <div
                    key={front.name}
                    className="p-6 rounded-xl bg-[#0D0F0D] border border-[#3B4B35]/30 hover:border-[#0DF205] flex flex-col items-center justify-center text-center space-y-3 transition-all shadow-md group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#111815] flex items-center justify-center text-[#0DF205] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-base font-medium text-[#0DF205] group-hover:text-white transition-colors">
                      {front.name}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 8. SECTION: PERGUNTAS FREQUENTES (FAQ) */}
      <section className="py-24 bg-[#000604] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={item.question}
                  className="rounded-xl bg-black border border-[#3B4B35]/20 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 sm:p-7 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <span className="text-xl sm:text-2xl font-bold text-[#EFEFEF]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0DF205] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 sm:px-7 pb-6 sm:pb-7 text-base text-[#B9CCAF] leading-relaxed border-t border-white/5 pt-4"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. SECTION: PRONTO PARA CRESCER JUNTO COM A GENTE? */}
      <section className="py-20 bg-[#000604] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto p-8 sm:p-14 rounded-3xl bg-[#202C29] border border-[#0DF205]/20 shadow-2xl relative overflow-hidden">
          
          {/* Radiant green glow */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 bg-[#0DF205]/20 rounded-full blur-[90px]"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold uppercase text-[#D8E6DF] leading-tight tracking-tight">
                Pronto para crescer <br />
                junto com a gente?
              </h2>

              <p className="text-lg sm:text-xl text-[#B9CCAF] leading-relaxed">
                A tecnologia que você precisa com a parceria que você merece. Junte-se ao time Preditiva.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00FF00] text-[#000604] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-base text-[#D8E6DF]">
                    Suporte técnico especializado
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00FF00] text-[#000604] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-base text-[#D8E6DF]">
                    Comunidade de Partners ativa
                  </span>
                </div>
              </div>
            </div>

            {/* Right Quick Form */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#091612]/60 border border-[#3B4B35]/20 backdrop-blur-md space-y-4">
                
                {bottomSubmitted ? (
                  <div className="p-6 bg-[#0DF205]/10 border border-[#0DF205] rounded-xl text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-[#0DF205] mx-auto" />
                    <div className="text-base font-bold text-white">Cadastro recebido!</div>
                    <p className="text-xs text-[#B9CCAF]">Nossa equipe de parcerias responderá via e-mail.</p>
                  </div>
                ) : (
                  <form onSubmit={handleBottomSubmit} className="space-y-4">
                    <input
                      type="text"
                      required
                      value={bottomForm.nome}
                      onChange={(e) => setBottomForm({ ...bottomForm, nome: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full bg-[#2B3733] border border-[#3B4B35]/30 focus:border-[#0DF205] rounded-md px-4 py-3.5 text-sm text-white placeholder-[#6B7280] focus:outline-none transition-all"
                    />

                    <input
                      type="email"
                      required
                      value={bottomForm.email}
                      onChange={(e) => setBottomForm({ ...bottomForm, email: e.target.value })}
                      placeholder="E-mail corporativo"
                      className="w-full bg-[#2B3733] border border-[#3B4B35]/30 focus:border-[#0DF205] rounded-md px-4 py-3.5 text-sm text-white placeholder-[#6B7280] focus:outline-none transition-all"
                    />

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#00FF00] hover:bg-[#0be004] text-[#000604] font-bold text-base uppercase tracking-wider rounded-md transition-all shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:scale-[1.02] cursor-pointer"
                    >
                      Enviar Cadastro
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
