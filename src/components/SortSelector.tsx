import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by relevance
      </MenuButton>
      <MenuList marginLeft={10}>
        <MenuItem> Relevance </MenuItem>
        <MenuItem> Date added </MenuItem>
        <MenuItem> name </MenuItem>
        <MenuItem> Realease date </MenuItem>
        <MenuItem> Popularity </MenuItem>
        <MenuItem> Average Rrating </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default SortSelector
