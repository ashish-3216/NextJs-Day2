import products from "@/JsonDatabase/products.json"
import "@/app/globals.css"
export default function Products(){
    return(
        <div className="products">
            <h1>Products</h1>
            <div className="product-list">
                {products.map((product)=>{
                    return(
                        <div className="product-card" key={product.id}>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
