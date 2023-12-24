/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {

  return (
    <div className="product_card_wrapper">
      <div className="product_card">
        <div className="product_card_name">{product.name}</div>
        <div className="product_card_price">{product.price}</div>
      </div>
    </div>
  )
}

export default ProductCard