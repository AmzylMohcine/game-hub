import { Badge } from "@chakra-ui/react"

interface Props {
  score: number
}
const CriticScore = ({ score }: Props) => {
  return (
    <Badge fontSize={"14px"} paddingX={2} borderRadius="4px" colorScheme={score >= 90 ? "green" : score >= 80 ? "yellow" : score < 50 ? "red" : ""}>
      {score}
    </Badge>
  )
}

export default CriticScore
