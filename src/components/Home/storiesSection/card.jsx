function SCard({ title, image, info }) {
  return (
    <div className="s-card">
      <div className="s-image">
        <img src={image} alt={title} />
      </div>

      <div className="s-items">
        <p className="s-title">{title}</p>
        <p className="s-info">{info}</p>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
}

export default SCard;