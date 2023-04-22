import { HStack, Image, ListItem, Text, List, Spinner, Button, Heading } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/Image-url"

interface Props {
  onSelecteGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}
const GenreList = ({ onSelecteGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres()
  const skeletons = [1, 2, 4, 5, 6, 7, 8, 9, 10]

  return (
    <List>
      <Heading fontSize="xl" marginBottom="3">
        {" "}
        Genres{" "}
      </Heading>
      {isLoading &&
        skeletons.map(skeleton => (
          <HStack key={skeleton} paddingY="5px">
            {" "}
            <Spinner key={skeleton} />
          </HStack>
        ))}
      {data.map(genre => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} objectFit="cover" />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              variant="link"
              fontSize="lg"
              onClick={() => {
                onSelecteGenre(genre)
              }}
              whiteSpace="normal"
              textAlign="left"
            >
              {" "}
              {genre.name}
            </Button>
          </HStack>{" "}
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
