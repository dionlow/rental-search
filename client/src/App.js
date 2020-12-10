import React, { useState } from "react"
import { container, formContainer, headerText } from "./styles.module.css"

import List from "./components/List"
import SearchInput from "./components/SearchInput"
import PaginationControls from "./components/PaginationControls"

const App = () => {
  const [query, setQuery] = useState(null)
  const [pageIndex, setPageIndex] = useState(0)

  const onSearch = (searchValue) => {
    setQuery(searchValue)
    setPageIndex(0) // resets page index on new search
  }

  const onNextPage = () => {
    setPageIndex(pageIndex + 1)
  }

  const onPreviousPage = () => {
    setPageIndex(Math.max(pageIndex - 1, 0))
  }

  return (
    <div className={container}>
      <div className={formContainer}>
        <h1 className={headerText}>Rent Location Search</h1>
        <SearchInput onSearch={onSearch} />
        <PaginationControls
          onNextPage={onNextPage}
          onPreviousPage={onPreviousPage}
          currentPage={pageIndex}
        />
        <List query={query} pageIndex={pageIndex} />
        {/* Caching and prefetching next page */}
        <div style={{ display: "none" }}>
          <List query={query} pageIndex={pageIndex + 1} />
        </div>
      </div>
    </div>
  )
}

export default App
