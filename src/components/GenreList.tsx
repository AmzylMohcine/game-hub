import { HStack, Image, ListItem, Text, List } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/Image-url"

const GenreList = () => {
  const { error, data } = useGenres()
  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Text fontSize="lg"> {genre.name}</Text>
          </HStack>{" "}
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
