/* eslint-disable react/prop-types */
import { useCurrentPage } from "../store"

const Pagination = ({ currentPage, meta }) => {

  const handleSetPage = (input) => {
    useCurrentPage.setState((state) => {
      if (state.page + input > meta.totalPage) {
        return { page: meta.totalPage }
      } else if (state.page + input < 1) {
        return { page: 1 }
      } else {
        return { page: state.page + input }
      }
    })
  }

  return (
    <div>
      <div className="pagination_wrapper">
        <div className="pagination_sub" onClick={() => handleSetPage(-1)}>-</div>
        <div>{currentPage}</div>
        <div className="pagination_add" onClick={() => handleSetPage(1)}>+</div>
      </div>
    </div>
  )
}

export default Pagination