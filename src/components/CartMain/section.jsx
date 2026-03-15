import './cart.css'
import CartCard from './card'
import { useState, useEffect } from "react";

function Cart(){
    const [cartItems, setCartItems] = useState([]);

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(stored);
    }, []);

    return(
        <section>

            <div className="cart-upper">
                <h3>Your Shopping Cart</h3>
                <p className="cart-total">{cartItems.length} Items</p>
            </div>

            <div className="cart-bot">

            <div className="cart-card-container">

                {cartItems.map(item => (
                <CartCard key={item.id} item={item}/>
                ))}

            </div>

            <div className="cart-amount">

                <p className="estimate">
                Estimated Total: ${total.toFixed(2)}
                </p>

                <p className="taxes">
                Sales tax will be calculated during checkout where applicable
                </p>

                <button className="payment">
                Continue Payment
                </button>

            </div>

            </div>

        </section>
    )
}

export default Cart