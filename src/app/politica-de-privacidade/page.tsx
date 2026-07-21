import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | beautyfi",
  description: "Política de Privacidade do aplicativo e plataforma beautyfi. Saiba como coletamos, usamos e protegemos seus dados pessoais de forma transparente.",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ backgroundColor: "#FAF7F2", minHeight: "100vh", fontFamily: "var(--font-body), sans-serif", color: "#16294E" }}>
      {/* HEADER / NAVBAR */}
      <header className="navbar" style={{ height: "90px", borderBottom: "1px solid rgba(22, 41, 78, 0.05)", backgroundColor: "#FAF7F2", position: "sticky", top: 0, zIndex: 100 }}>
        <div className="navbar-container container" style={{ height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" className="logo" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img 
              src="/logo.png" 
              alt="beautyfi Logo" 
              style={{ height: "56px", width: "auto", objectFit: "contain", borderRadius: "12px" }} 
            />
          </Link>
          
          <Link 
            href="/" 
            className="btn-ghost"
            style={{ 
              padding: "10px 20px", 
              textDecoration: "none", 
              fontSize: "14px", 
              fontWeight: 600, 
              color: "#16294E",
              borderRadius: "12px",
              border: "1px solid rgba(22, 41, 78, 0.1)",
              backgroundColor: "rgba(22, 41, 78, 0.02)",
              transition: "all 0.2s"
            }}
          >
            ← Voltar para o Site
          </Link>
        </div>
      </header>

      {/* HERO TITLE */}
      <section style={{ padding: "80px 0 40px 0", borderBottom: "1px solid rgba(22, 41, 78, 0.05)" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span style={{ 
            color: "var(--accent)", 
            fontWeight: 700, 
            fontSize: "12px", 
            textTransform: "uppercase", 
            letterSpacing: "0.1em",
            display: "block",
            marginBottom: "12px"
          }}>
            Termos e Políticas
          </span>
          <h1 style={{ 
            fontSize: "44px", 
            fontFamily: "var(--font-heading)", 
            fontWeight: 500, 
            lineHeight: 1.15,
            color: "#16294E",
            marginBottom: "16px"
          }}>
            Política de Privacidade
          </h1>
          <p style={{ fontSize: "15px", color: "var(--text-secondary)", margin: 0 }}>
            <strong>Última atualização:</strong> 26 de maio de 2026
          </p>
        </div>
      </section>

      {/* CONTENT & INDEX */}
      <section style={{ padding: "60px 0 100px 0" }}>
        <div className="container privacy-layout">
          <style dangerouslySetInnerHTML={{__html: `
            .privacy-layout { display: flex; gap: 60px; max-width: 1200px; }
            @media (max-width: 768px) {
              .privacy-layout { flex-direction: column; gap: 32px; }
            }
          `}} />
          {/* Table of Contents (Sticky sidebar) */}
          <aside style={{ width: "280px", flexShrink: 0, position: "sticky", top: "130px", height: "fit-content", display: "flex", flexDirection: "column", gap: "12px" }} className="hide-on-mobile">
            <h4 style={{ fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--accent)", marginBottom: "16px" }}>
              Navegação
            </h4>
            <a href="#introducao" style={asideLinkStyle}>Introdução</a>
            <a href="#dados-coletados" style={asideLinkStyle}>Dados Coletados</a>
            <a href="#finalidade" style={asideLinkStyle}>Finalidade da Coleta</a>
            <a href="#multi-tenant" style={asideLinkStyle}>Plataforma Multi-Tenant</a>
            <a href="#assinaturas" style={asideLinkStyle}>Assinaturas e Pagamentos</a>
            <a href="#whatsapp" style={asideLinkStyle}>Comunicação via WhatsApp</a>
            <a href="#notificacoes" style={asideLinkStyle}>Notificações</a>
            <a href="#localizacao" style={asideLinkStyle}>Localização</a>
            <a href="#perfis" style={asideLinkStyle}>Perfis de Usuário</a>
            <a href="#permissoes" style={asideLinkStyle}>Permissões do App</a>
            <a href="#seguranca" style={asideLinkStyle}>Armazenamento e Segurança</a>
            <a href="#compartilhamento" style={asideLinkStyle}>Compartilhamento de Dados</a>
            <a href="#responsabilidade" style={asideLinkStyle}>Responsabilidade de Serviços</a>
            <a href="#direitos" style={asideLinkStyle}>Direitos do Usuário</a>
            <a href="#contato" style={asideLinkStyle}>Contato</a>
          </aside>

          {/* Policy Text */}
          <article style={{ flexGrow: 1, maxWidth: "780px" }}>
            <div style={markdownContainerStyle}>
              
              <div id="introducao" style={sectionStyle}>
                <p>
                  O aplicativo <strong>Beautyfi</strong> respeita a privacidade dos usuários e está comprometido com a proteção dos dados pessoais coletados durante a utilização da plataforma.
                </p>
                <p>
                  O Beautyfi é uma plataforma <strong>multi-tenant</strong>, utilizada por diferentes estabelecimentos e profissionais do segmento de beleza e estética, permitindo o gerenciamento de agendamentos, clientes, serviços, assinaturas, comunicação e operações comerciais.
                </p>
                <p>
                  Ao utilizar o aplicativo, o usuário concorda com esta Política de Privacidade.
                </p>
              </div>

              <div id="dados-coletados" style={sectionStyle}>
                <h2>Dados Coletados</h2>
                <p>Durante o uso do aplicativo, poderão ser coletados os seguintes dados pessoais:</p>
                <ul>
                  <li>Nome completo;</li>
                  <li>Telefone;</li>
                  <li>E-mail;</li>
                  <li>Senha (armazenada de forma segura e criptografada);</li>
                  <li>Data de nascimento (opcional);</li>
                  <li>Foto de perfil (opcional);</li>
                  <li>Endereço e localização aproximada, quando autorizado;</li>
                  <li>Informações de agendamentos e histórico de serviços;</li>
                  <li>Dados relacionados a compras, assinaturas e pagamentos;</li>
                  <li>Dados de uso do aplicativo;</li>
                  <li>Informações necessárias para envio de notificações;</li>
                  <li>Informações relacionadas à comunicação via WhatsApp e lembretes automáticos.</li>
                </ul>
              </div>

              <div id="finalidade" style={sectionStyle}>
                <h2>Finalidade da Coleta de Dados</h2>
                <p>Os dados coletados são utilizados para:</p>
                <ul>
                  <li>Permitir cadastro, login e autenticação dos usuários;</li>
                  <li>Gerenciar agendamentos e atendimentos;</li>
                  <li>Permitir a utilização dos recursos pelos estabelecimentos parceiros;</li>
                  <li>Exibir serviços, produtos, horários e profissionais disponíveis;</li>
                  <li>Gerenciar vendas de produtos e serviços;</li>
                  <li>Permitir comunicação entre clientes, profissionais e administradores;</li>
                  <li>Enviar notificações, lembretes e confirmações;</li>
                  <li>Enviar lembretes e comunicações via WhatsApp, quando habilitado;</li>
                  <li>Melhorar a experiência do usuário;</li>
                  <li>Garantir segurança, autenticação e funcionamento da plataforma;</li>
                  <li>Disponibilizar recursos de localização para facilitar atendimentos, busca de unidades ou serviços próximos;</li>
                  <li>Gerenciar planos e funcionalidades contratadas separadamente pelos estabelecimentos.</li>
                </ul>
                <p>Os dados <strong>não são vendidos ou alugados para terceiros</strong>.</p>
              </div>

              <div id="multi-tenant" style={sectionStyle}>
                <h2>Plataforma Multi-Tenant</h2>
                <p>O Beautyfi funciona como uma plataforma compartilhada por múltiplos estabelecimentos independentes.</p>
                <p>Cada estabelecimento parceiro possui acesso apenas às informações relacionadas aos seus próprios clientes, profissionais e operações, respeitando controles de acesso e segurança da informação.</p>
                <p>O Beautyfi atua como fornecedor tecnológico da plataforma, enquanto os estabelecimentos parceiros são responsáveis pelos serviços prestados aos clientes finais.</p>
              </div>

              <div id="assinaturas" style={sectionStyle}>
                <h2>Assinaturas e Pagamentos</h2>
                <p>Alguns recursos do Beautyfi podem envolver:</p>
                <ul>
                  <li>Assinaturas;</li>
                  <li>Cobranças recorrentes;</li>
                  <li>Planos contratados pelos estabelecimentos;</li>
                  <li>Funcionalidades premium contratadas separadamente.</li>
                </ul>
                <p>As assinaturas e cobranças podem ser gerenciadas por plataformas terceiras seguras, como Stripe ou similares.</p>
                <p>O aplicativo não armazena dados completos de cartão de crédito.</p>
                <p>Os valores, condições e periodicidade das cobranças serão informados previamente ao contratante.</p>
                <p><strong>Nota importante sobre assinaturas criadas por profissionais:</strong> Nós fornecemos apenas a infraestrutura tecnológica (a plataforma). A responsabilidade pela prestação do serviço vinculado à assinatura e o recebimento dos valores é integral e exclusiva da empresa (estabelecimento) que fornece e oferta o plano ao cliente final.</p>
              </div>

              <div id="whatsapp" style={sectionStyle}>
                <h2>Comunicação via WhatsApp</h2>
                <p>O Beautyfi poderá utilizar integração com WhatsApp para:</p>
                <ul>
                  <li>Lembretes de agendamento;</li>
                  <li>Confirmações;</li>
                  <li>Avisos importantes;</li>
                  <li>Comunicação entre estabelecimento e cliente.</li>
                </ul>
                <p>O envio dessas mensagens ocorrerá conforme permissões concedidas pelo usuário ou conforme necessidade operacional do serviço contratado pelo estabelecimento.</p>
              </div>

              <div id="notificacoes" style={sectionStyle}>
                <h2>Notificações</h2>
                <p>O aplicativo poderá enviar notificações relacionadas a:</p>
                <ul>
                  <li>Agendamentos;</li>
                  <li>Lembretes;</li>
                  <li>Cobranças;</li>
                  <li>Atualizações da plataforma;</li>
                  <li>Promoções e campanhas dos estabelecimentos;</li>
                  <li>Comunicados importantes.</li>
                </ul>
                <p>O usuário poderá desativar notificações diretamente nas configurações do dispositivo.</p>
              </div>

              <div id="localizacao" style={sectionStyle}>
                <h2>Localização</h2>
                <p>O aplicativo poderá solicitar acesso à localização do dispositivo para funcionalidades como:</p>
                <ul>
                  <li>Identificação de unidades próximas;</li>
                  <li>Melhor experiência em agendamentos;</li>
                  <li>Recursos operacionais relacionados aos serviços contratados.</li>
                </ul>
                <p>A localização será utilizada apenas mediante autorização do usuário.</p>
              </div>

              <div id="perfis" style={sectionStyle}>
                <h2>Perfis de Usuário</h2>
                
                <h3 style={h3Style}>Cliente</h3>
                <p>O perfil de cliente permite:</p>
                <ul>
                  <li>Cadastro e login;</li>
                  <li>Agendamento de serviços;</li>
                  <li>Compra de produtos;</li>
                  <li>Acompanhamento de histórico;</li>
                  <li>Atualização de dados pessoais;</li>
                  <li>Recebimento de notificações e lembretes;</li>
                  <li>Gerenciamento de assinaturas vinculadas ao estabelecimento.</li>
                </ul>

                <h3 style={h3Style}>Administrador / Estabelecimento</h3>
                <p>O perfil administrador permite:</p>
                <ul>
                  <li>Gerenciamento de clientes;</li>
                  <li>Gerenciamento de profissionais e horários;</li>
                  <li>Controle de agendamentos;</li>
                  <li>Gestão de serviços e produtos;</li>
                  <li>Controle financeiro e operacional;</li>
                  <li>Configuração de notificações, campanhas e lembretes;</li>
                  <li>Gerenciamento de funcionalidades contratadas.</li>
                </ul>
              </div>

              <div id="permissoes" style={sectionStyle}>
                <h2>Permissões do Aplicativo</h2>
                <p>O aplicativo poderá solicitar permissões como:</p>
                <ul>
                  <li><strong>Câmera:</strong> para foto de perfil e conteúdos relacionados;</li>
                  <li><strong>Galeria:</strong> para seleção de imagens;</li>
                  <li><strong>Localização:</strong> para funcionalidades baseadas em proximidade;</li>
                  <li><strong>Notificações:</strong> para envio de alertas e lembretes.</li>
                </ul>
                <p>Nenhum acesso ocorre sem consentimento do usuário.</p>
              </div>

              <div id="seguranca" style={sectionStyle}>
                <h2>Armazenamento e Segurança</h2>
                <p>Os dados são armazenados em ambiente seguro, utilizando medidas técnicas e administrativas adequadas para proteção contra acesso não autorizado, perda, alteração ou uso indevido.</p>
                <p>As senhas são armazenadas de forma criptografada.</p>
                <p>Dados financeiros sensíveis são tratados exclusivamente por provedores especializados.</p>
              </div>

              <div id="compartilhamento" style={sectionStyle}>
                <h2>Compartilhamento de Dados</h2>
                <p>Os dados poderão ser compartilhados apenas:</p>
                <ul>
                  <li>Entre o usuário e o estabelecimento ao qual ele estiver vinculado;</li>
                  <li>Com plataformas de pagamento;</li>
                  <li>Com serviços de notificações e comunicação;</li>
                  <li>Quando exigido por obrigação legal ou ordem judicial.</li>
                </ul>
                <p>O Beautyfi não comercializa dados pessoais.</p>
              </div>

              <div id="responsabilidade" style={sectionStyle}>
                <h2>Responsabilidade sobre Serviços Prestados</h2>
                <p>Os serviços, produtos, atendimentos, promoções e demais operações realizadas dentro da plataforma são de responsabilidade exclusiva dos estabelecimentos parceiros.</p>
                <p>O Beautyfi é responsável apenas pela infraestrutura tecnológica e funcionamento da plataforma.</p>
              </div>

              <div id="direitos" style={sectionStyle}>
                <h2>Direitos do Usuário</h2>
                <p>O usuário poderá, a qualquer momento:</p>
                <ul>
                  <li>Solicitar acesso aos seus dados;</li>
                  <li>Atualizar informações cadastrais;</li>
                  <li>Solicitar exclusão da conta;</li>
                  <li>Revogar consentimentos;</li>
                  <li>Solicitar informações sobre tratamento de dados.</li>
                </ul>
                <p>As solicitações poderão ser feitas pelos canais disponibilizados no aplicativo.</p>
              </div>

              <div id="contato" style={sectionStyle}>
                <h2>Contato</h2>
                <p>Para dúvidas, solicitações ou assuntos relacionados à privacidade e proteção de dados:</p>
                <ul>
                  <li>contato@iversion.com.br</li>
                  <li>suporte@iversion.com.br</li>
                </ul>
                <p style={{ marginTop: "24px" }}>
                  <strong>Aplicativo:</strong> Beautyfi<br />
                  <strong>Plataforma:</strong> Multi-tenant para gestão de beleza, estética e serviços relacionados.
                </p>
              </div>

            </div>
          </article>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-col">
            <span className="logo" style={{ fontSize: "24px", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
              <img src="/logo.png" alt="beautyfi Logo" style={{ height: "30px", width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", borderRadius: "8px" }} />
              <div style={{ display: "flex", alignItems: "baseline", fontWeight: "700" }}>
                <span className="logo-beauty" style={{ color: "#fff" }}>beauty</span>
                <span className="logo-fi" style={{ color: "var(--accent)" }}>fi</span>
              </div>
            </span>
            <p className="footer-desc" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
              O software de agendamento e gestão que organiza sua agenda, fideliza clientes e cuida do seu financeiro.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Recursos</h4>
            <ul className="footer-links">
              <li><Link href="/#features" className="footer-link">Notificações WhatsApp</Link></li>
              <li><Link href="/#features" className="footer-link">Lembretes & Pix</Link></li>
              <li><Link href="/#features" className="footer-link">Agenda Online</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Segurança</h4>
            <ul className="footer-links">
              <li><span className="footer-link">100% em Conformidade com LGPD</span></li>
              <li><span className="footer-link">Pagamentos seguros por Stripe</span></li>
              <li><Link href="/politica-de-privacidade" className="footer-link" style={{ color: "var(--accent)" }}>Política de Privacidade</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Suporte</h4>
            <ul className="footer-links">
              <li><span className="footer-link">contato@beautyfi.com.br</span></li>
              <li><span className="footer-link">Suporte no WhatsApp</span></li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom" style={{ color: "rgba(255, 255, 255, 0.4)" }}>
          <p>&copy; {new Date().getFullYear()} beautyfi. Todos os direitos reservados. CNPJ: XX.XXX.XXX/0001-XX</p>
          <p>Feito para empoderar profissionais de beleza do Brasil.</p>
        </div>
      </footer>
    </div>
  );
}

// STYLING PRESETS
const asideLinkStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#475569",
  textDecoration: "none",
  padding: "8px 12px",
  borderRadius: "8px",
  transition: "all 0.2s",
  display: "block",
  lineHeight: "1.4",
};

const sectionStyle: React.CSSProperties = {
  scrollMarginTop: "120px", // Ensures when clicking index anchor link it has padding at the top below sticky nav
};

const h3Style: React.CSSProperties = {
  fontSize: "18px",
  fontFamily: "var(--font-heading)",
  color: "#16294E",
  marginTop: "24px",
  marginBottom: "12px",
  fontWeight: 600,
};

const markdownContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "48px",
  lineHeight: "1.7",
  fontSize: "15px",
  color: "#475569",
};
