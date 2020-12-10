import React from "react"
import { paginationControls, button as buttonClass } from "./styles.module.css"

// TODO add ability to disable when at edge cases (0 and max amount)
const PaginationControls = ({ currentPage, onPreviousPage, onNextPage }) => (
  <div className={paginationControls}>
    <button
      disabled={currentPage < 1}
      className={buttonClass}
      onClick={onPreviousPage}
      type="button"
    >
      Previous
    </button>
    <button className={buttonClass} onClick={onNextPage} type="button">
      Next
    </button>
  </div>
)

export default PaginationControls
