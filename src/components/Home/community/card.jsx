function CCard({ image, review, username, playtime, price }) {
    const discount =
    price?.original && price?.final
        ? Math.round(((price.original - price.final) / price.original) * 100)
        : null;

    return(
        <div className="C-container">
            <div className="C-image">
                <img src={image} alt="" />

            {price && (
            <div className="C-price">

                {discount && price.final !== 0 && (
                <span className="C-discount">-{discount}%</span>
                )}

                <div className="from-to">
                {price.original && (
                    <span className="C-from">
                    ${price.original?.toFixed(2)}
                    </span>
                )}

                <span className="C-to">
                    {price.final === 0 ? "Free" : `$${price.final?.toFixed(2)}`}
                </span>
                </div>

            </div>
            )}
            </div>

            <div className="C-reviews">
                <div className="reviews-top">
                    <p className="review">{review}</p>
                </div>

                <div className="reviews-bot">
                    <button className="rb-btn">Read Entire Review</button>

                    <div className="r-user">
                        <div className="r-pfp">
                            <img src="./images/pfp.jpg" alt="" />
                        </div>

                        <div className="r-user-info">
                            <p className="r-username">{username}</p>
                            <p className="r-playtime">
                                Played {playtime} hrs at review time
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CCard;