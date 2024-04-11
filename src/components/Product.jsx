

function Product({ product }) {


  return (
    <div className="product__card">
      <h2 className="product__text product__font-weight" >{product.title}</h2>
      <img className="cart-grey" src="../src/assets/cart-grey.png" alt="logo" />
      <p className="product__text">{product.shortDesc}</p>

      <img className="product__img" src={product.cdnUrl} alt="product image" />
      <button className="product__btn" >
        <span className="price"> {product.price}</span> <span className="currency"> sek</span>
      </button>
    </div>
  )
}

export default Product
