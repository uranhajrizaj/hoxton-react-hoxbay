import { Porducts } from "./Home";

export function Basket({porducts} : {porducts: Porducts}){
    return (
        <main>
  <section className="basket-container">
    <h2>Your Basket</h2>
    <ul>
      {/* <!-- Basket Item --> */}
      {porducts.map(product=>
      <li>
        <article className="basket-container__item">
          <img
            src={product.image}
            alt={product.title}
            width="90"
          />
          <p>{product.title}</p>
          <p>
            Qty:
            <select>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>
          </p>
          {/* <!-- The item total is calculated using the Qty selected value --> */}
          <p>Item total: £109.95</p>
        </article>
      </li>
      }
      {/* <!--  --> */}
    </ul>
    {/* <!-- Basket total is calculated using each item's total from above --> */}
    <h3>Your total: £109.95</h3>
  </section>
</main>
    )
}