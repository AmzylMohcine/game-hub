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
  rating: number
  metacritic: number
  background_image: string
  parent_platforms: { platform: Platform }[]
}

const useGames = (selectedGenre: Genre | null, selectefPlatform: Platforms | null) =>
  useData<Game>(
    "/games",
    {
      params: { genres: selectedGenre?.id, platforms: selectefPlatform?.id }
    },
    [selectedGenre?.id, selectefPlatform?.id]
  )

export default useGames
