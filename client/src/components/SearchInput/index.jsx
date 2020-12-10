import React, { memo, useState } from "react"
import { container, input, searchbutton } from "./styles.module.css"

const SearchInput = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("")

  const onHandleChange = (event) => {
    setSearchValue(event.target.value)
  }

  const onClickSearch = () => {
    onSearch(searchValue)
  }

  const onEnter = (e) => {
    if (e.key === "Enter") {
      onClickSearch()
    }
  }

  return (
    <div className={container}>
      <input
        className={input}
        value={searchValue}
        onChange={onHandleChange}
        onKeyDown={onEnter}
      />
      <button className={searchbutton} type="button" onClick={onClickSearch}>
        Search
      </button>
    </div>
  )
}
export default memo(SearchInput)
