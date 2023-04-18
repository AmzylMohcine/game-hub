import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms, { Platforms } from "../hooks/usePlatforms"

interface Props {
  OnSelectefPlatform: (platform: Platforms) => void
  selectedPlatform: Platforms | null
}
const PlatformSelector = ({ OnSelectefPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms()

  if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map(platform => (
          <MenuItem
            key={platform.id}
            onClick={() => {
              OnSelectefPlatform(platform)
            }}
          >
            {" "}
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
