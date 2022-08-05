import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { ItemList } from './ItemList';

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
    };
    inbasket: number;
  
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
    <div>
      <div className='input-div'>
    <input className='home-input' placeholder='Search for products...' name="search" onChange={(event)=>{
    

      fetch(`http://localhost:4000/products?title_like=${event.target.value}`)
      .then(res=>res.json())
      .then(productsFromServer=> setProducts(productsFromServer))

      if(event.target.value==""){
        fetch(`http://localhost:4000/products?_expand=category`)
      .then(res=>res.json())
      .then(productsFromServer=> setProducts(productsFromServer))}

    }}></input>
    </div>
    <ItemList products={products}/>
    </div>
   ) 
}