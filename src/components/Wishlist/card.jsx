import { Monitor, ChevronDown } from "lucide-react";
import { useState } from "react";

function WCard({title, price, image}){

    const [open, setOpen] = useState(false);
    const [option, setOption] = useState("For my account");

    const options = [
    "For my account",
    "For my account: private",
    "This is a gift"
    ];

    return(
        <div className="WCard">

        <div className="wishlist-left">

            <div className="wishlist-image">
                <img src={image} alt="" />
            </div>

            <div className="wishlist-info">
                <p className="wishlist-title">{title}</p>
                <p className="wishlist-price">${price}</p>

                <div className="wishlist-dropdown">

                    <button
                    className="wishlist-dropdown-btn"
                    onClick={()=>setOpen(!open)}
                    >
                    {option} <ChevronDown size={16}/>
                    </button>

                    {open && (
                    <div className="wishlist-dropdown-menu">

                            {options.map(o => (
                            <button
                            key={o}
                            onClick={()=>{
                            setOption(o);
                            setOpen(false);
                            }}
                            >
                            {o}
                            </button>
                            ))}

                    </div>
                    )}

                </div>
            </div>

        </div>

        <div className="wishlist-right">

            <p className="wishlist-platform"><Monitor/></p>

            <button className="wishlist-add">
            Add to cart
            </button>

        </div>

        </div>
    )
}

export default WCard