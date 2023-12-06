import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Ação"
              to="/categories#action"
            >
              Ação
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Esportes"
              to="/categories#sport"
            >
              Esporte
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Simulação"
              to="/categories#simulation"
            >
              Simulação
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Luta"
              to="/categories#fight"
            >
              Luta
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar as Categorias"
              to="/categories"
            >
              Categorias
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos Em Breve"
              to="/#coming-soon"
            >
              Em breve
            </Link>
          </li>
          <li>
            <Link title="Clique aqui para acessar as Promoções" to="/#on-sale">
              Promoções
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; e-Play todos os direitos reservados.</p>
    </div>
  </Container>
)

export default Footer
