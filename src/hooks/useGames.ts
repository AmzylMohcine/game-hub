import { GameQuery } from "../App"
import useData from "./useData"
import { Genre } from "./useGenres"
import { Platforms } from "./usePlatforms"

export interface Platform {
  id: number
  name: string
  slug: string
  background_image: string
}
export interface Game {
  id: number
  name: string
  metacritic: number
  background_image: string
  parent_platforms: { platform: Platform }[]
  rating_top: number
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.searchText }
    },
    [gameQuery]
  )

export default useGames
