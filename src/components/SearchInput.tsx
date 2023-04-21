import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { BsSearch } from "react-icons/bs"

const SearchInput = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input borderRadius={20} placeholder="search games .. " variant="field" />{" "}
      </InputGroup>
    </>
  )
}

export default SearchInput