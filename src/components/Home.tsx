import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

export type Product={
    id: number;
    title: string;
    price: number;
    description: string;
    categoryId: number;
    image: string;
    category: {
        id: number;
        name: string;
    }
  
  }
  
  export type Porducts= Product[]

export function Home(){
    const [products,setProducts]=useState<Porducts >([])
    useEffect(()=>{
      fetch(`http://localhost:4000/products?_expand=category`)
      .then(res=>res.json())
      .then(productsFromServer=> setProducts(productsFromServer))
    },[])
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