import Button from '../Button'
import Tag from '../Tag'

import { formataPreco } from '../ProductsList'
import { useGetFeaturedGameQuery } from '../../services/api'

import { Imagem, Precos, Titulo } from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do Dia</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            de <span>{formataPreco(game.prices.old)}</span>
            <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta!"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
