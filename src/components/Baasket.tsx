import { useEffect, useState } from "react";
import { Porducts, Product } from "./Home";

export function Basket() {
  const [item, setItem] = useState<Porducts>([]);

  useEffect(() => {
    fetch(`http://localhost:4000/products?inbasket_gte=1`)
      .then((res) => res.json())
      .then((productsFromServer) => setItem(productsFromServer));
  }, []);


  function getTotal() {
    let total = 0;
    for (let product of item) {
      total += product.price * product.inbasket;
    }
    return total;
  }

  return (
    <main>
      <section className="basket-container">
        <h2>Your Basket</h2>
        <ul>
          {item.map((product) => (
            <li>
              <article className="basket-container__item">
                <img src={product.image} alt={product.title} width="90" />
                <p>{product.title}</p>
                <p>
                  Qty:
                 
                  <select name="option"  onChange={(e) =>{
                   
                    fetch(`http://localhost:4000/products/${product.id}`, {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ inbasket: Number(e.target.value) }),
                    })
                      .then((res) => res.json())
                      .then((updatedProduct) => {
                        const updatedProducts = item.map((product) =>
                          product.id === updatedProduct.id ? updatedProduct : product

                        );
                        setItem(updatedProducts);
                      });
                    }}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </p>

                {/* <!-- The item total is calculated using the Qty selected value --> */}
                <p>Item total: £{product.price*product.inbasket}</p>
              </article>
            </li>
          ))}
        </ul>
        {/* <!-- Basket total is calculated using each item's total from above --> */}
        <h3>Your total: £{getTotal().toFixed(2)}</h3>
      </section>
    </main>
  );
}
