import React from "react"
import useGenres from "../hooks/useGenres"

const GenreList = () => {
  const { error, genres } = useGenres()
  return (
    <ul>
      {genres.map(genre => (
        <li> {genre.name}</li>
      ))}
    </ul>
  )
}

export default GenreList
