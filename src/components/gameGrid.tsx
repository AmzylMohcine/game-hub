import React, { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { Text } from "@chakra-ui/react"

interface Game {
  id: number
  name: string
  rating: number
}
interface FetchGames {
  count: number
  results: Game[]
}
const gameGrid = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    apiClient
      .get<FetchGames>("/games")
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.message))
  }, [])
  return (
    <>
      {error && <Text color="red"> {error}</Text>}
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  )
}

export default gameGrid
