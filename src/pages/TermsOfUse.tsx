import { Link } from "react-router-dom";
import logoKoraflow from "@/assets/logo-koraflow.png";

export default function TermsOfUse() {
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
        <h1 className="text-4xl font-display font-semibold tracking-tight mb-2">Termos de Uso</h1>
        <p className="text-body text-sm mb-12">Última atualização: junho de 2025</p>

        <div className="space-y-10 text-body leading-relaxed" style={{ fontFamily: "Inter" }}>

          <section>
            <p>
              Bem-vindo à Koraflow, sua parceira de confiança na vanguarda da Inteligência Artificial (IA) e
              automação empresarial. Ao acessar nosso site e utilizar os diversos serviços que oferecemos, você
              entra em um compromisso regido por estes Termos de Uso. Cada passo que você dá em nosso site,
              cada serviço que você explora ou utiliza, está sujeito a estas diretrizes, criadas para garantir
              uma experiência segura, produtiva e agradável para todos os nossos usuários.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Abrangência dos Termos</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li>
                <strong className="text-white">Aplicabilidade:</strong> Estes Termos de Uso aplicam-se a todas
                as interações no site da Koraflow, incluindo, mas não se limitando a, navegação, utilização de
                ferramentas, download de conteúdos, participação em fóruns, inscrição em newsletters e uso de
                serviços de IA e automação.
              </li>
              <li>
                <strong className="text-white">Concordância:</strong> Ao utilizar o site da Koraflow, você
                concorda automaticamente com estes Termos, que atuam como um contrato legal entre você e a
                Koraflow. Se, por algum motivo, você discordar de qualquer parte destes Termos, a sua única
                opção é não prosseguir com a utilização do site e dos serviços ofertados.
              </li>
              <li>
                <strong className="text-white">Atualizações e mudanças:</strong> Os Termos de Uso podem ser
                atualizados periodicamente para refletir novas práticas legais, mudanças nos serviços ou
                feedback dos usuários. Recomendamos que você revise estes Termos regularmente.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Uso do site e serviços</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li>
                <strong className="text-white">Acesso:</strong> O site da Koraflow é destinado a usuários que
                buscam soluções inovadoras em IA e automação para negócios. O acesso e uso do site devem estar
                em conformidade com estes Termos.
              </li>
              <li>
                <strong className="text-white">Conteúdo:</strong> Todo conteúdo no site (textos, gráficos,
                imagens, software) é de propriedade da Koraflow e protegido por direitos autorais e outras leis
                de propriedade intelectual.
              </li>
              <li>
                <strong className="text-white">Conduta do usuário:</strong> Você concorda em não utilizar o
                site para fins ilícitos ou proibidos por estes Termos. Isso inclui, mas não se limita a,
                violação da privacidade de terceiros, publicação de conteúdo difamatório ou uso fraudulento dos
                serviços.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Direitos e restrições</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li>
                <strong className="text-white">Licença limitada:</strong> Concedemos a você uma licença
                limitada, não exclusiva e revogável para acessar o site e utilizar nossos serviços conforme
                estabelecido nestes Termos.
              </li>
              <li>
                <strong className="text-white">Restrições:</strong> É proibido copiar, modificar, distribuir,
                vender ou alugar qualquer parte de nossos serviços ou software incluído, além de realizar
                engenharia reversa ou tentar extrair o código-fonte do software.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Responsabilidades</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li>
                <strong className="text-white">Da Koraflow:</strong> Empenhamo-nos em manter o site atualizado
                e operacional, mas não garantimos a ausência de interrupções ou erros.
              </li>
              <li>
                <strong className="text-white">Do usuário:</strong> Você é responsável por manter a
                confidencialidade de suas informações de conta e senha e por todas as atividades realizadas com
                sua conta.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Limitação de responsabilidade</h2>
            <p>
              A Koraflow, incluindo seus diretores, funcionários, parceiros e afiliados, não será responsável
              por quaisquer danos que não sejam direta e claramente causados por nossa ação ou omissão. Esta
              limitação abrange:
            </p>
            <ul className="mt-4 space-y-3 list-disc list-inside">
              <li>
                <strong className="text-white">Danos indiretos:</strong> Qualquer dano que não seja resultado
                direto da utilização dos nossos serviços.
              </li>
              <li>
                <strong className="text-white">Danos incidentais:</strong> Danos que ocorrem acidentalmente e
                que não são consequência direta do uso dos nossos serviços.
              </li>
              <li>
                <strong className="text-white">Danos consequentes ou especiais:</strong> Danos que podem
                ocorrer como consequência de circunstâncias especiais, indo além do que é normal ou esperado.
              </li>
              <li>
                <strong className="text-white">Danos punitivos:</strong> A Koraflow não será responsável por
                danos que visam punir ou dissuadir condutas.
              </li>
              <li>
                <strong className="text-white">Perda de lucros ou receitas:</strong> Qualquer perda financeira
                direta ou indiretamente relacionada aos nossos serviços.
              </li>
              <li>
                <strong className="text-white">Perda de dados:</strong> Dados perdidos ou danificados durante o
                uso dos nossos serviços, exceto nos casos em que tal perda seja diretamente causada por
                negligência comprovada da nossa parte.
              </li>
            </ul>
            <p className="mt-4">
              Esta limitação aplica-se independentemente de a reclamação ser baseada em contrato, delito,
              negligência, responsabilidade estrita ou qualquer outra base legal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Alterações nos Termos</h2>
            <p>
              A Koraflow reserva-se o direito de modificar estes Termos a qualquer momento. As alterações
              entram em vigor imediatamente após a publicação no site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Legislação aplicável</h2>
            <p>
              Estes Termos são regidos pelas leis do Brasil. Qualquer disputa relacionada a estes Termos será
              submetida à jurisdição exclusiva dos tribunais do Brasil.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Contato</h2>
            <p>
              Em caso de dúvidas sobre estes Termos, contate-nos em:{" "}
              <a href="mailto:contato@koraflow.com.br" className="text-primary hover:underline">
                contato@koraflow.com.br
              </a>
            </p>
            <p className="mt-2">
              KORAFLOW DESENVOLVIMENTO DIGITAL LTDA — R Pelourinho 22, Casa 14, Prq Monjolo, Cotia, SP, CEP
              06704-165.
            </p>
          </section>

          <section className="border-t border-white/10 pt-8">
            <p className="text-sm">
              Ao usar o site da Koraflow, você reconhece que leu, entendeu e concordou em estar vinculado a
              estes Termos de Uso.
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
