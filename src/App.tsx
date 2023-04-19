import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/gameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"
import { Platforms } from "./hooks/usePlatforms"
import SortSelector from "./components/SortSelector"

export interface GameQuery {
  genre: Genre | null
  platform: Platforms | null
}
function App() {
  // store selected genre
  // can have a genre or null Genre | null
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  // const [selectedPlatform, setSelectedPlaform] = useState<Platforms | null>(null)
  const [gamequery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <>
      <Grid templateAreas={{ base: `"nav" "main"`, /* lg = > 1024px*/ lg: `"nav nav" "aside main"` }} templateColumns={{ base: "1fr", lg: "200px 1fr" }}>
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList selectedGenre={gamequery.genre} onSelecteGenre={genre => setGameQuery({ ...gamequery, genre })} />
          </GridItem>
        </Show>

        <GridItem area="main">
          <HStack spacing={5} paddingLeft={10}>
            <PlatformSelector selectedPlatform={gamequery.platform} OnSelectefPlatform={platform => setGameQuery({ ...gamequery, platform })} />
            <SortSelector />
          </HStack>
          <GameGrid gamequery={gamequery} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
