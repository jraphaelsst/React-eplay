import { Container } from './styles'

type Props = {
  title: string
  children: JSX.Element
}

const Card = ({ title, children }: Props) => (
  <Container>
    <h2>{title}</h2>
    {children}
  </Container>
)

export default Card
