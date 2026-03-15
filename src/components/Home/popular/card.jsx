function PCard({ game }) {
  return (
    <div className="p-item">
      <div className="p-image">
        <img src={game.image} alt={game.title} />
      </div>
      <div className="p-info">
        <p className="p-title">{game.title}</p>
        <p className="p-price">
          {game.price === 0 ? "Free" : `$${game.price}`}
        </p>
      </div>
    </div>
  );
}

export default PCard;