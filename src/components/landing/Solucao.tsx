import { useState } from "react";
import {
  Bot,
  Workflow,
  Globe,
  Sparkles,
  Check,
  Zap,
  Rocket,
  TrendingUp,
  Gem,
  Image as ImageIcon,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

type Tab = "agentes" | "automacoes" | "sites" | "visual";

const tabs: { id: Tab; label: string; icon: typeof Bot }[] = [
  { id: "agentes", label: "Agentes de IA", icon: Bot },
  { id: "automacoes", label: "Automações", icon: Workflow },
  { id: "sites", label: "Sites & Apps", icon: Globe },
  { id: "visual", label: "Conteúdo Visual", icon: Sparkles },
];

const nichos = ["Clínica Médica", "Advocacia", "Imobiliária", "Estética", "Corretora", "Oficina"];

const automacoesFeatures = [
  "Automação de E-mails (boletins, transacionais, follow-ups)",
  "Gestão de Agendamentos (automática, sem erro)",
  "Workflows Inteligentes (processos customizados)",
  "Geração de Documentos (automática e inteligente)",
];

const sitesFeatures = [
  "Sites Responsivos (desktop, tablet, mobile perfeito)",
  "Sistemas de Negócios (CRM, painéis, automações)",
  "Dashboards & Analytics (dados em tempo real)",
  "Integrações Personalizadas (conecta tudo que você usa)",
];

const visualFeatures = [
  { title: "Criativos", desc: "Posts, stories e cards para redes sociais." },
  { title: "Influencer IA", desc: "Modelos virtuais consistentes geradas com IA." },
  { title: "Comerciais Cinematográficos", desc: "Vídeos profissionais sob demanda." },
];

function BenefitBox({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Zap;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border-l-[3px] border-primary bg-surface-blue p-5 md:p-6 my-4">
      <div className="flex items-start gap-3">
        <Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
        <div>
          <h4 className="font-display text-base font-bold text-foreground">{title}</h4>
          <p className="mt-1.5 text-sm leading-relaxed text-body">{children}</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCheckCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-primary/15 bg-surface-navy p-5 transition-colors hover:border-primary">
      <span className="grid h-6 w-6 place-items-center rounded-md bg-primary/15 text-primary shrink-0 mt-0.5">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      <span className="text-[15px] leading-relaxed text-foreground">{children}</span>
    </div>
  );
}

export const Solucao = () => {
  const [active, setActive] = useState<Tab>("agentes");
  const [nicho, setNicho] = useState(nichos[0]);

  return (
    <section id="solucao" className="py-24 md:py-32 bg-surface-deep">
      <div className="container-narrow">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Temos solução para cada um. <span className="text-gradient-purple">Integrados.</span>
          </h2>
          <p className="mt-4 text-lg text-body">
            Não são serviços isolados. São soluções que trabalham juntas.
            <br />
            IA + Expertise + Velocidade.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-white/10">
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`relative flex items-center gap-2 px-4 md:px-5 py-3 text-sm md:text-[15px] font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-body-mute hover:text-body"
                }`}
                aria-pressed={isActive}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
                <span
                  className={`absolute -bottom-px left-0 right-0 h-[3px] rounded-t ${
                    isActive ? "bg-primary" : "bg-primary/20"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Tab panels */}
        <div className="rounded-2xl border border-white/10 bg-surface-navy/40 p-6 md:p-10">
          {active === "agentes" && (
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Agentes de IA que atendem, agendam e convertem
              </h3>
              <p className="mt-3 text-body">
                Veja como nossos agentes atendem, agendam e convertem clientes automaticamente via WhatsApp — 24h, 7 dias por semana.
              </p>

              <p className="eyebrow mt-8 mb-3">Escolha um segmento</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                {nichos.map((n) => (
                  <button
                    key={n}
                    onClick={() => setNicho(n)}
                    className={`rounded-lg bg-surface-navy px-4 py-3 text-sm text-foreground text-left transition-all border-l-[3px] ${
                      nicho === n ? "border-primary bg-primary/10" : "border-transparent hover:border-primary"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-primary/20 bg-surface-navy p-5 md:p-6 shadow-purple">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-purple text-primary-foreground font-bold text-sm">K</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Kora · Agente {nicho}</p>
                    <p className="text-xs text-body-mute">online · responde em segundos</p>
                  </div>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/5 px-4 py-2.5 text-foreground">
                    Olá! Quero saber sobre os serviços de {nicho.toLowerCase()}.
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-primary-foreground">
                    Claro! Posso já te enviar horários disponíveis para uma avaliação. Qual o melhor turno para você?
                  </div>
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/5 px-4 py-2.5 text-foreground">
                    Tarde, por favor.
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-primary-foreground">
                    Perfeito ✅ Agendei para amanhã às 15h. Já enviei a confirmação no seu e-mail.
                  </div>
                </div>
              </div>

              <BenefitBox icon={Zap} title="Seu agente trabalha enquanto você dorme">
                Atendimento inteligente, sem limites de capacidade. Cada lead respondido na hora — independente do horário.
              </BenefitBox>

              <a
                href="#cta"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-glow transition-colors"
              >
                Conhecer a tecnologia <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          )}

          {active === "automacoes" && (
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Automação de E-mails Inteligentes
              </h3>
              <p className="mt-3 text-body">
                Seus processos repetitivos estão desperdiçando tempo e dinheiro. Nós automatizamos tudo — e seu time respira.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {automacoesFeatures.map((f) => (
                  <FeatureCheckCard key={f}>{f}</FeatureCheckCard>
                ))}
              </div>

              <BenefitBox icon={Zap} title="Você está perdendo dinheiro agora">
                Cada hora que seus funcionários gastam em tarefas manuais é custo direto no seu caixa. Automatize hoje.
              </BenefitBox>
              <BenefitBox icon={Rocket} title="Seus concorrentes já estão na frente">
                Empresas que automatizam crescem 3x mais rápido e têm 40% mais lucro. Não fique para trás.
              </BenefitBox>
            </div>
          )}

          {active === "sites" && (
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Landing Pages Premium & Ecommerces Modernos
              </h3>
              <p className="mt-3 text-body">
                Desenvolvemos sites modernos, rápidos e otimizados para conversão. Seu site atual pode estar te custando clientes.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {sitesFeatures.map((f) => (
                  <FeatureCheckCard key={f}>{f}</FeatureCheckCard>
                ))}
              </div>

              <BenefitBox icon={TrendingUp} title="A primeira impressão é a que fica">
                Clientes julgam sua empresa em 0,05 segundos. Um site moderno aumenta conversão em até 400%.
              </BenefitBox>
              <BenefitBox icon={Gem} title="Investimento que se paga sozinho">
                Site moderno não é gasto — é investimento. Agende uma consulta gratuita e veja como pode transformar seu negócio.
              </BenefitBox>
            </div>
          )}

          {active === "visual" && (
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Criação de Conteúdo Visual Profissional
              </h3>
              <p className="mt-3 text-body">
                Explore exemplos de conteúdo visual que criamos para fortalecer marcas e engajar audiências. Tudo com IA. Tudo com qualidade.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {visualFeatures.map((v) => (
                  <div
                    key={v.title}
                    className="rounded-xl border border-primary/15 bg-surface-navy p-5 transition-colors hover:border-primary"
                  >
                    <ImageIcon className="h-5 w-5 text-primary" />
                    <h4 className="mt-3 font-display text-base font-bold text-foreground">{v.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-body-soft">{v.desc}</p>
                  </div>
                ))}
              </div>

              <BenefitBox icon={Sparkles} title="Conteúdo visual vende mais">
                Posts com imagens geradas por IA têm 650% mais engajamento que texto puro. Seu público decide em segundos.
              </BenefitBox>
              <BenefitBox icon={Zap} title="Você não pode competir sem IA">
                Enquanto você cria um post, seus concorrentes geram 100 peças em minutos com IA. A velocidade é o novo diferencial.
              </BenefitBox>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-xl bg-gradient-to-br from-primary/30 via-surface-blue to-surface-navy border border-white/10"
                    aria-hidden
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-glow transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Falar com nosso time agora
          </a>
        </div>
      </div>
    </section>
  );
};