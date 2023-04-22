import bullsEy from "../assets/bulls-eye.webp"
import thumbs from "../assets/thumbs-up.webp"
import meh from "../assets/meh.webp"
import { Image, ImageProps } from "@chakra-ui/react"

interface Props {
  rating: number
}
const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = { 3: { src: meh, alt: "meh", boxSize: "25px" }, 4: { src: thumbs, alt: "thumbs", boxSize: "25px" }, 5: { src: bullsEy, alt: "bullsEy", boxSize: "35px" } }

  return <Image {...emojiMap[rating]} marginTop={1} />
}

export default Emoji
