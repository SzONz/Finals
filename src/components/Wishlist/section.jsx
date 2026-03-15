import './wishlist.css'
import WCard from './card'
import { useState } from "react"
import { ChevronDown } from "lucide-react"

function WishlistMain(){

    const [wishlist, setWishlist] = useState([]);

    const [sort, setSort] = useState("A-Z")
    const [openSort, setOpenSort] = useState(false)

    const sortOptions = [
    "A-Z",
    "Z-A",
    "Price: Low to High",
    "Price: High to Low"
    ]

    useState(() => {
        const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(stored);
    });

    return(
        <section>
            <div className="wishlist-upper">

                <h3>My Wishlist</h3>

                <div className="wishlist-sort">

                    <button
                    className="wishlist-sort-button"
                    onClick={() => setOpenSort(!openSort)}
                    >
                        <p>Sort:</p> {sort}
                        <ChevronDown size={16}/>
                    </button>

                    {openSort && (
                        <div className="wishlist-sort-options">

                            {sortOptions.map(option => (
                                <button
                                key={option}
                                onClick={()=>{
                                    setSort(option)
                                    setOpenSort(false)
                                }}
                                >
                                    {option}
                                </button>
                            ))}

                        </div>
                    )}

                </div>

            </div>

            <div className="wishlist-card-container">
            {wishlist.map((item,index)=>(
                <WCard
                    key={index}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                />
            ))}
            </div>

        </section>
    )
}

export default WishlistMain