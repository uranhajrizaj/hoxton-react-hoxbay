import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product, Porducts } from "./Home";

export function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);

  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/products/${params.id}`)
      .then((res) => res.json())
      .then((productFromServer) => setProduct(productFromServer));
  }, []);
  if (!product) {
    return <h1>Loading...</h1>;
  }
  return (
    <main>
      <section className="product-detail main-wrapper">
        <img src={product.image} alt={product.title} />
        <div className="product-detail__side style=border-color: var(--yellow);">
          <h3></h3>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>£{product.price}</p>
          {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
          <button
         onClick={ function(event) {
          let newinbasket = product.inbasket + 1;
          fetch(`http://localhost:4000/products/${product.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ inbasket: newinbasket }),
          })
          event.currentTarget.disabled = true;
        } 
      }
          >
            Add to basket
          </button>
        </div>
      </section>
    </main>
  );
}


