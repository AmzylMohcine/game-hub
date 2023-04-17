import { HStack, Image, ListItem, Text, List, Spinner } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/Image-url"

const GenreList = () => {
  const { data, isLoading, error } = useGenres()
  const skeletons = [1, 2, 4, 5]

  return (
    <List>
      {isLoading &&
        skeletons.map(skeleton => (
          <HStack paddingY="5px">
            {" "}
            <Spinner key={skeleton} />
          </HStack>
        ))}
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
