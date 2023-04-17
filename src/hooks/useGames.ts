import useData from "./useData"

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

const useGames = () => useData<Game>("/games")

export default useGames
