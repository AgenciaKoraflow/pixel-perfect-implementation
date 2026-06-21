import { Link } from "react-router-dom";
import logoKoraflow from "@/assets/logo-koraflow.png";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-white">
      <header className="border-b border-white/10 py-5">
        <div className="container-wide flex items-center justify-between">
          <Link to="/">
            <img src={logoKoraflow} alt="Koraflow" className="h-8 w-auto" />
          </Link>
          <Link to="/" className="text-sm text-body hover:text-white transition">
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className="container-wide max-w-4xl py-16">
        <h1 className="text-4xl font-display font-semibold tracking-tight mb-2">Política de Privacidade</h1>
        <p className="text-body text-sm mb-12">Última atualização: junho de 2025</p>

        <div className="space-y-10 text-body leading-relaxed" style={{ fontFamily: "Inter" }}>

          <section>
            <p>
              Este documento esclarece a coleta de dados no site da Koraflow, propriedade da{" "}
              <strong className="text-white">KORAFLOW DESENVOLVIMENTO DIGITAL LTDA</strong>, CNPJ{" "}
              <strong className="text-white">61.158.793/0001-66</strong>.
            </p>
            <p className="mt-4">
              Esta Política detalha a coleta, uso, compartilhamento e armazenamento de dados pelo nosso site e
              serviços relacionados. Leia atentamente para entender nosso compromisso com a segurança dos seus
              dados. A aceitação desta Política ocorre ao se cadastrar para usar nossos serviços, incluindo os
              gratuitos. Assim, você reconhece e concorda com o uso de seus dados coletados.
            </p>
            <p className="mt-4">
              Dúvidas ou sugestões podem ser enviadas para:{" "}
              <a href="mailto:contato@koraflow.com.br" className="text-primary hover:underline">
                contato@koraflow.com.br
              </a>
              .
            </p>
            <p className="mt-4">
              <strong className="text-white">Sede:</strong> KORAFLOW DESENVOLVIMENTO DIGITAL LTDA — R Pelourinho
              22, Casa 14, Prq Monjolo, Cotia, SP, CEP 06704-165.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Coleta de dados e dados pessoais</h2>
            <p>
              Ao preencher formulários no nosso site — contatos, newsletters e downloads — coletamos dados
              pessoais para atendimento adequado. Podemos contatá-lo por e-mail ou telefone para atendimento,
              pesquisas, novidades, promoções, produtos e serviços, ou cumprir obrigações legais. Você pode
              pedir exclusão ou alteração de dados a qualquer momento e cancelar o recebimento de mensagens.
            </p>
            <p className="mt-4">
              Monitoramos o site para garantir aderência à Política, reservando-nos o direito de excluir
              usuários que não cumpram as normas. A exclusão de dados pessoais ocorrerá a pedido ou ao cumprir
              sua finalidade, no prazo contratual.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Cookies</h2>
            <p>
              Coletamos dados via cookies, arquivos no seu computador ou dispositivo móvel, para analisar
              comportamento no site e melhorar a navegação. Tipos de cookies usados:
            </p>
            <ul className="mt-4 space-y-3 list-disc list-inside">
              <li>
                <strong className="text-white">Cookies próprios:</strong> Reconhecem visitas recorrentes ao
                nosso site.
              </li>
              <li>
                <strong className="text-white">Cookies de terceiros:</strong> Serviços externos no nosso site,
                também identificam visitas ao nosso e outros sites. Cookies podem expirar ao fechar o navegador
                ou permanecer sem data de expiração.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Analytics com Google Analytics</h2>
            <p>
              Na Koraflow, empregamos o Google Analytics para aprimorar continuamente a experiência dos
              usuários em nosso site. Este recurso nos permite coletar e analisar informações anônimas,
              garantindo uma navegação mais intuitiva e conteúdos alinhados com as preferências dos nossos
              visitantes.
            </p>
            <p className="mt-4 font-medium text-white">Dados coletados:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                <strong className="text-white">Endereço IP:</strong> Essencial para entender a distribuição
                geográfica de nossos visitantes.
              </li>
              <li>
                <strong className="text-white">Localização geográfica:</strong> Permite identificar tendências
                de mercado em áreas específicas.
              </li>
              <li>
                <strong className="text-white">Fonte de referência:</strong> Revela como os usuários chegam ao
                nosso site.
              </li>
              <li>
                <strong className="text-white">Tipo de navegador:</strong> Garante compatibilidade e
                consistência de experiência.
              </li>
              <li>
                <strong className="text-white">Duração da visita e páginas visitadas:</strong> Vitais para
                entender o comportamento do usuário e otimizar o conteúdo.
              </li>
            </ul>
            <p className="mt-4">
              A análise desses dados respeita a privacidade e o anonimato dos usuários, permitindo-nos melhorar
              a usabilidade, desenvolver conteúdos mais relevantes e identificar oportunidades de inovação.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Gestão de Mídia de Terceiros</h2>
            <p>
              Frequentemente incorporamos mídias de terceiros em nosso site — vídeos, imagens, artigos e outras
              formas de conteúdo digital. Quando você acessa uma página que contém mídia incorporada de
              terceiros, pode estar interagindo indiretamente com o site original dessa mídia. Esses conteúdos
              mantêm sua própria política de privacidade, independente da Koraflow.
            </p>
            <p className="mt-4">
              Recomendamos que você revise as políticas de privacidade de tais sites. Embora incorporemos
              conteúdos de terceiros, a Koraflow faz um esforço contínuo para escolher fontes confiáveis e
              seguras.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Acesso aos dados pessoais</h2>
            <p>
              Apenas funcionários autorizados da Koraflow acessam seus dados. Parceiros autorizados podem ter
              acesso em casos de parcerias. Não divulgamos dados publicamente sem autorização. Dados são
              mantidos até serem necessários ou relevantes para as finalidades desta Política, respeitando a
              lei. Informaremos sobre qualquer incidente de segurança.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Compartilhamento de dados</h2>
            <p>
              Você tem direitos de acesso, cancelamento, alteração e esclarecimentos sobre seus dados.
              Contate-nos em{" "}
              <a href="mailto:contato@koraflow.com.br" className="text-primary hover:underline">
                contato@koraflow.com.br
              </a>{" "}
              para exercer seus direitos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Consentimento à Política</h2>
            <p>
              O cadastro em nosso site implica a aceitação desta Política. Caso discorde, não prossiga com o
              cadastro e não use os serviços. Sem dados pessoais, não forneceremos serviços. Informações sobre
              discordâncias são bem-vindas para melhorar os serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Atualizações da Política</h2>
            <p>
              Esta Política pode ser atualizada. Recomendamos visitas periódicas para ver mudanças. Novas
              autorizações serão solicitadas se houver alterações significativas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Lei Aplicável</h2>
            <p>Regida pelas leis do Brasil, com foro em São Paulo, SP.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Dúvidas e contato</h2>
            <p>
              E-mail:{" "}
              <a href="mailto:contato@koraflow.com.br" className="text-primary hover:underline">
                contato@koraflow.com.br
              </a>
            </p>
            <p className="mt-2">
              KORAFLOW DESENVOLVIMENTO DIGITAL LTDA — R Pelourinho 22, Casa 14, Prq Monjolo, Cotia, SP, CEP
              06704-165.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-body/70">© {new Date().getFullYear()} Koraflow. Inteligência em Movimento.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacidade" className="text-xs text-body/70 hover:text-white transition">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="text-xs text-body/70 hover:text-white transition">
              Termos de Uso
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
