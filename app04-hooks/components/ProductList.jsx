import React, { useEffect, useState ,useCallback} from "react";
import "../components/ProductList.css";
import { useFetch } from "../src/hooks/useFetch";
import ClipLoader from "react-spinners/ClipLoader";



export default function ProductList() {
  const [Url, setUrl] = useState();
  const { data : Products,Loading } = useFetch(Url);


  
if(Loading)
    {
      return <ClipLoader color="red"/>
    }



  return (

    <div>
        <div className="button">
            
            <h2>{Products&&Products.length}</h2>
            <button onClick={()=>setUrl("http://localhost:3000/products/")}>Load All</button>
            <button onClick={()=>setUrl("http://localhost:3000/products?in_stock=true")}>Load In Stock</button>

        </div>
       
        {Products && Products.map((product) => (
       
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
