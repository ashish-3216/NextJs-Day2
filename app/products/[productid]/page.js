'use client'
import products from "@/JsonDatabase/products.json"
import "@/app/globals.css"
import React from 'react' ;

export default function Product({params}){
    const productid = ( params.productid );
    if(!products[productid]){
        return <div className="prod">Product not found</div>
    }
    return(
        <div className="prod">
            <h1>Product {productid}</h1>
            <p>Product Name : {products[productid].name}</p>
            <p>Product Description : {products[productid].description}</p>
            <p>Product Price : {products[productid].price}</p>
        </div>
    );
}   
