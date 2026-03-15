import { Monitor, Trash } from "lucide-react";

function CartCard({ item }){

    function removeItem(){

        const stored = JSON.parse(localStorage.getItem("cart")) || [];

        const updated = stored.filter(i => i.title !== item.title);

        localStorage.setItem("cart", JSON.stringify(updated));

        window.location.reload();
    }

    return(
        <div className="cart-card">

        <div className="cart-left">

        <div className="cart-image">
            <img src={item.image} alt={item.title} />
        </div>

        <div className="cart-info">
            <p className="cart-title">{item.title}</p>
            <p className="cart-platform"><Monitor/></p>
        </div>

        </div>

            <div className="cart-right">
            <p className="cart-price">${item.price.toFixed(2)}</p>
            <p className="delete" onClick={removeItem}><Trash /></p>
        </div>

        </div>
    )
}

export default CartCard