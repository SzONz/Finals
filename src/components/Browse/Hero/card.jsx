import "./hero.css";

function HCard({ title, image }) {
    return (
        <div className="h-genre">
            <img src={image} alt={title} />
            <button className="genre-btn">{title}</button>
        </div>
    );
}

export default HCard;