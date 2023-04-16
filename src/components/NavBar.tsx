import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"

const navBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"} />
      <Text> Search to be added .. </Text>
    </HStack>
  )
}

export default navBar
