import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()

  if (actionGames && sportGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList
          id="action"
          title="Ação"
          background="black"
          games={actionGames}
        />
        <ProductsList
          id="sport"
          title="Esporte"
          background="gray"
          games={sportGames}
        />
        <ProductsList
          id="simulation"
          title="Simulação"
          background="black"
          games={simulationGames}
        />
        <ProductsList
          id="fight"
          title="Luta"
          background="gray"
          games={fightGames}
        />
        <ProductsList
          id="rpg"
          title="RPG"
          background="black"
          games={rpgGames}
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
