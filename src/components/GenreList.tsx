import useGenres, { Genre } from "../hooks/useGenres"

const GenreList = () => {
  const { error, data } = useGenres()
  return (
    <ul>
      {data.map(genre => (
        <li> {genre.name}</li>
      ))}
    </ul>
  )
}

export default GenreList
