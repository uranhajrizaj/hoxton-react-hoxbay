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
    <ItemList products={products}/>
   ) 
}