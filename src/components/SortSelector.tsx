import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
  OnSelectOrder: (sortOrder: string) => void
  sortOrder: string
}
const SortSelector = ({ OnSelectOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "name" },
    { value: "-released", label: "Realease date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rrating" }
  ]

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList marginLeft={10}>
        {sortOrders.map(order => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => {
              OnSelectOrder(order.value)
            }}
          >
            {" "}
            {order.label}{" "}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
