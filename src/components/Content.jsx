import ProductCard from "./ProductCard"

/* eslint-disable react/prop-types */
const Content = ({ products }) => {

  return (
    <div className="content_wrapper">
      {products.map((item, index) => (
        <ProductCard key={index} product={item} />
      ))}
    </div>
  )
}

export default Content