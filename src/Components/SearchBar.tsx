import React from "react"

interface SearchBarProps {
  searchName: string
  setSearchName: (value: string) => void
}
const SearchBar: React.FC<SearchBarProps> = ({
  searchName,
  setSearchName
}) => (
  <input
    value={searchName}
    onChange={(e: any) => {
      setSearchName(e.target.value)
    }}
  />
)

export default SearchBar