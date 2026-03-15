import { Bookmark } from "lucide-react";

function FeaturedCard({ title, image, tags, price }) {
    return (
        <div className="f-card">
            <div className="f-image">
                <img src={image} alt={title} />
            </div>

            <div className="f-card-container">
                <div className="f-card-up">
                    <p className="f-title">{title}</p>

                    <div className="f-game-tags">
                        {tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="f-card-bot">
                    <button className="f-buy">
                    {price === 0 ? "Free" : `$${price.toFixed(2)}`}
                    </button>
                    <button className="f-bookmark">
                        <Bookmark />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FeaturedCard;