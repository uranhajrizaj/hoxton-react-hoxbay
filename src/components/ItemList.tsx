import { Link } from "react-router-dom";
import { Product } from "./Home";

export function ItemList({products}:{products:Product[]}){
    return (
        <main>
        <section className="products-container main-wrapper">
          <ul className="products-container__list">
              {products.map(product=>
            <li >
              <Link to={`/products/${product.id}`}>
                <article className="product-item">
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                  <h3>{product.title}</h3>
                </article>
              </Link>
            </li>
            )}
          </ul>
        </section>
      </main>
    )
}