import "./hero.css";

function HeroCard({ title, imageSmall, isActive, onClick }) {
  return (
    <div
      className={`nr-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {isActive && <div className="nr-card-progress" />}

      <div className="nr-card-img-container">
        <img src={imageSmall} alt={title} />
      </div>

      <div className="nr-card-text">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default HeroCard;