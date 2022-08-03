import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Porducts } from "./Home";
import { ItemList } from "./ItemList";

export function CategoryDetailes() {
    const[products,setProducts]=useState<Porducts>([])
    const params = useParams();
    useEffect(()=>{
        fetch(`http://localhost:4000/products?_expand=category&categoryId=${params.id}`)   
        .then(res=>res.json())
        .then(productsFromServer=>setProducts(productsFromServer))
    },[])
  return (
    <ItemList products={products}/>
  );
}