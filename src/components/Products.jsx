import Product from "./Product"

function Products({items}) {


  return (
    <section className="content__container">
      <img className="hero" src="../src/assets/poster.png" alt="poster" />
      <ul className="products__container">
        {
          items.map((item, index) => {
            return <Product 
            key={index}
            product={item} />
          })
        }
      </ul>
    </section>
  )
}

export default Products
