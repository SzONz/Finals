import { Monitor, TabletSmartphone, Gamepad2, RectangleGoggles } from "lucide-react";

function FCard({ title, image, price, platform, discount }) {

    const platformIcons = {
        window: <Monitor />,
        mobile: <TabletSmartphone />,
        console: <Gamepad2 />,
        vr: <RectangleGoggles />
    };

    const finalPrice = price - (price * discount / 100);

    return(
        <div className="filter-games-card">
            <div className="filter-image">
                <img src={image} alt={title} />
            </div>

            <div className="filter-card-items">
                <p className="filter-platform">
                    {platform.map((p, index) => (
                        <span key={index}>{platformIcons[p]}</span>
                    ))}
                </p>

                <p className="filter-title">{title}</p>
                <div className="filter-price">

                {discount > 0 ? (
                    <>
                        <div className="filter-price-values">
                            <span className="filter-original">
                                ${price.toFixed(2)}
                            </span>

                            <span className="filter-final">
                                ${finalPrice.toFixed(2)}
                            </span>
                        </div>
                        <div className="filter-sale">-{discount}%</div>
                    </>
                ) : (
                    <span className="filter-final">
                        {price === 0 ? "Free" : `$${price.toFixed(2)}`}
                    </span>
                )}

                </div>
            </div>
        </div>
    )
}

export default FCard;