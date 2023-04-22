import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react"

import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import useGames from "../hooks/useGames"
import GameCardContainer from "./GameCardContainer"
import { GameQuery } from "../App"

interface Props {
  gamequery: GameQuery
  // selectedGenre: Genre | null
  // selectedPlatform: Platforms | null
}
const gameGrid = ({ gamequery }: Props) => {
  const { data, error, isLoading } = useGames(gamequery)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      {error && <Text color="red"> {error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding={10}>
        {isLoading &&
          skeletons.map(skeleton => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />{" "}
            </GameCardContainer>
          ))}
        {data.map(game => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default gameGrid
