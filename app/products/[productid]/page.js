'use client'
import products from "@/JsonDatabase/products.json"
import "@/app/globals.css"
import React from 'react' ;

export default function Product({params}){
    const productid = parseInt(params.productid);
    const newId = productid - 1;
    if(!products[newId]){
        return <div className="prod">Product not found</div>
    }
    return(
        <div className="prod">
            <h1>Product {productid}</h1>
            <p>Product Name : {products[newId].name}</p>
            <p>Product Description : {products[newId].description}</p>
            <p>Product Price : {products[newId].price}</p>
        </div>
    );
}   
