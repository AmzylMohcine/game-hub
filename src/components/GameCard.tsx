import React from "react"
import { Game } from "../hooks/useGames"
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/Image-url"
import defaultImage from "../assets/no-image-placeholder-6f3882e0.webp"
import Emoji from "./Emoji"

interface Props {
  game: Game
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image ? getCroppedImageUrl(game.background_image) : defaultImage} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom="3">
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {" "}
          {game.name} <Emoji rating={game.rating_top} />{" "}
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
