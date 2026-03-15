import { Gift, Bookmark, ShoppingCart } from "lucide-react";
import { useState } from "react";
import "./GameHero/gamehero.css";

function GameSideBar({ game }) {

    const [openCheckout, setOpenCheckout] = useState(false);

    const original = game.price?.original;
    const discount = game.price?.discount;
    const final = game.price?.final ?? game.price;

    function addToWishlist(){

        const stored = JSON.parse(localStorage.getItem("wishlist")) || [];

        const exists = stored.find(item => item.title === game.title);

        if(!exists){

            stored.push({
                title: game.title,
                price: game.price?.final ?? game.price,
                image: game.banner
            });

            localStorage.setItem("wishlist", JSON.stringify(stored));
        }
    }

    function addToCart(){

        const stored = JSON.parse(localStorage.getItem("cart")) || [];

        const exists = stored.find(item => item.title === game.title);

        if(!exists){

            stored.push({
                title: game.title,
                price: game.price?.final ?? game.price,
                image: game.banner
            });

            localStorage.setItem("cart", JSON.stringify(stored));
        }
    }

    return(
        <>
        <aside className="game-sidebar">

            <div className="game-hero__info">

                <div className="game-hero__banner">
                    <img src={game.banner} alt={game.title} />
                </div>

                <div className="game-hero__meta">
                    <p className="game-hero__reviews">
                        Reviews: <span>Very Positive (25,905)</span>
                    </p>

                    <p className="game-hero__release">
                        Release Date: <span>{game.releaseDate}</span>
                    </p>

                    <p className="game-hero__publisher">
                        Developer: <span>{game.developer}</span>
                    </p>

                    <p className="game-hero__developer">
                        Publisher: <span>{game.publisher}</span>
                    </p>
                </div>

                <div className="game-hero__price">
                    {discount && <p className="game-hero__sale">-{discount}%</p>}
                    {original && <p className="game-hero__original">${original}</p>}
                    <p className="game-hero__final">${final}</p>
                </div>

                <div className="game-hero__deadline">
                    <p>Offer ends {game.deadline ?? "Soon"} @ 1:00am</p>
                </div>

                <div className="game-hero__actions">

                    <div className="game-hero__action-upper">

                        <button
                        className="game-hero__buy"
                        onClick={() => setOpenCheckout(true)}
                        >
                        Buy Now
                        </button>

                        <button
                        className="game-hero__cart"
                        onClick={addToCart}
                        >
                        <ShoppingCart />
                        </button>

                    </div>

                    <div className="game-hero__action-bottom">

                        <button className="game-hero__gift">
                            <Gift />
                        </button>

                        <button
                        className="game-hero__wishlist"
                        onClick={addToWishlist}
                        >
                            <Bookmark/>
                        </button>

                    </div>

                </div>

            </div>

        </aside>


        {openCheckout && (
        <div className="checkout-overlay">

            <div className="checkout-modal">

                <h2>Checkout</h2>

                <p className="checkout-game">{game.title}</p>
                <p className="checkout-price">${final}</p>

                <form className="checkout-form">

                    <input
                    type="text"
                    placeholder="Cardholder Name"
                    required
                    />

                    <input
                    type="text"
                    placeholder="Card Number"
                    maxLength="16"
                    required
                    />

                    <div className="checkout-row">

                        <input
                        type="text"
                        placeholder="MM/YY"
                        maxLength="5"
                        required
                        />

                        <input
                        type="text"
                        placeholder="CVC"
                        maxLength="3"
                        required
                        />

                    </div>

                    <button
                    type="submit"
                    className="checkout-pay"
                    >
                        Pay ${final}
                    </button>

                    <button
                    type="button"
                    className="checkout-close"
                    onClick={() => setOpenCheckout(false)}
                    >
                    Cancel
                    </button>

                </form>

            </div>

        </div>
        )}

        </>
    );
}

export default GameSideBar;