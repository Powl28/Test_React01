import { Item } from "./Item";
import { useCart } from "../context/CartContext";
import CreateItemCart from "./CreateItemCart";




export const Cart = () => {

    const {products,total,formatMoney  } = useCart();


   

  return (
    <div>
        
        <h1 style={{ textAlign: "center" }}>
        {products.length > 0
          ? `ยอดชำระเงินรวม : ${formatMoney(total)} บาท`
          : "ไม่มีสินค้าในตะกร้า"}
      </h1>                
        <CreateItemCart/>



        { products.map((data)=> <Item key={data.id} {...data}/> )}
    </div>
  );
};
