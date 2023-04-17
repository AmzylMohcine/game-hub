import React, { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

export interface Genre {
  id: number
  name: string
}

export interface FetchGenres {
  const: number
  results: Genre[]
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([])
  const [error, setError] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    apiClient
      .get<FetchGenres>("/genres", { signal })
      .then(res => {
        setGenres(res.data.results)
      })
      .catch(err => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })
    return () => controller.abort()
  }, [])

  return { error, genres }
}

export default useGenres
