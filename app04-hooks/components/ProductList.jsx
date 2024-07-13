import React, { useEffect, useState } from "react";
import "../components/ProductList.css";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [Count, setCount] = useState(0);
  const [Url, setUrl] = useState();
  const fetchUrl = () =>
    fetch(Url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setCount(data.length);
      });
    
  console.log(products);

  useEffect(() => {
    fetchUrl()
  }, [fetchUrl()]);


  return (

    <div>
        <div className="button">
            
            <h2>{Count}</h2>
            <button onClick={()=>setUrl("http://localhost:3000/products/")}>Load All</button>
            <button onClick={()=>setUrl("http://localhost:3000/products?in_stock=true")}>Load In Stock</button>

        </div>
       
        {products && products.map((product) => (
       
          <div className="product-list">
            <div className="card" key={product.id}>
              <div className="progress-bar">{product.id}</div>
              <p className="title">{product.name.length > 15? product.name.slice(0.15) : product.name}</p>
              <div className="product-row">
                <p className="price">{product.price}</p>
                <p className="stock-status">{product.in_stock=="true"?"Instock":"OutStock"}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
