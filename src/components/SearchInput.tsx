import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"
import { Genre } from "../hooks/useGenres"
import { useRef } from "react"

interface Props {
  onSearch: (searchText: string) => void
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault()
          if (ref.current) onSearch(ref.current.value)
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input ref={ref} borderRadius={20} placeholder="search games .. " variant="field" />{" "}
        </InputGroup>
      </form>
    </>
  )
}

export default SearchInput
