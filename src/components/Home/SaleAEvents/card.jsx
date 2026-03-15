import { Link } from "react-router-dom";
import { Bookmark } from "lucide-react";
import './SAE.css'

function SAECard({ id, title, image, original, newPrice, date }) {
    
    const discount = Math.round(((original - newPrice) / original) * 100);

    return(
        <Link to={`/discovery/${id}`} className="SAE-card-link">
            <div className="SAE-card">
                <div className="SAE-img-container">
                    <img src={image} alt={title}/>
                    <button className="SAE-wishlist"><Bookmark/></button>
                </div>

                <div className="SAE-items">
                    <div className="SAE-texts">
                        <p className="SAE-title">{title}</p>
                        <p className="SAE-deadline">Offer ends {date} @ 1:00am</p>
                    </div>

                    <div className="SAE-buttons">
                        <p className="SAE-original">${original.toFixed(2)}</p>

                        <button className="SAE-price">
                            <span>-{discount}%</span>
                            <p>${newPrice.toFixed(2)}</p>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default SAECard;