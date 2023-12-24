import { useItemsPerPage } from "../store";

// eslint-disable-next-line react/prop-types
const Filter = ({ itemsPerPage }) => {

  const handleInput = (event) => {
    useItemsPerPage.setState({ limit: parseInt(event.target.value) })
  }


  return (
    <div className="filter_wrapper">
      <label>Item per page: </label>
      <input type="number" value={itemsPerPage.toString()} onChange={handleInput} />
    </div>
  )
}

export default Filter