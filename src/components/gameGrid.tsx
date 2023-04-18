import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react"

import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import useGames from "../hooks/useGames"
import GameCardContainer from "./GameCardContainer"
import { Genre } from "../hooks/useGenres"
import { Platforms } from "../hooks/usePlatforms"

interface Props {
  selectedGenre: Genre | null
  selectedPlatform: Platforms | null
}
const gameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      {error && <Text color="red"> {error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3} padding={10}>
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
