import Product from "./Product"
import items from "../assets/data.js"

function Products({items}) {
console.log(items);


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
