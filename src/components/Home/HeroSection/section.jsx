import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Gift, Bookmark } from "lucide-react";
import NrCard from "./card";
import "./hero.css";

function Hero({ data }) {
  const navigate = useNavigate();

  const cards = data || [];
  const [activeCard, setActiveCard] = useState(cards[0]?.id);
  const intervalRef = useRef(null);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const activeIndex = cards.findIndex((card) => card.id === activeCard);

  const startAutoSlide = () => {
    if (!cards.length) return;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setActiveCard((prev) => {
        const currentIndex = cards.findIndex((card) => card.id === prev);
        const nextIndex = (currentIndex + 1) % cards.length;
        return cards[nextIndex].id;
      });
    }, 6000);
  };

  useEffect(() => {
    if (!cards.length) return;

    setActiveCard(cards[0].id);
    startAutoSlide();

    return () => clearInterval(intervalRef.current);
  }, [cards]);

  const handleCardClick = (id) => {
    setActiveCard(id);
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  return (
    <section className="hero">
      <div className="new-release">
        <h3>New Releases</h3>

        <div className="nr-container">
          <div className="hero-slider">
            <div
              className="hero-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {cards.map((card) => (
                <div className="hero-slide" key={card.id}>
                  <div className="nr-img">
                    <img src={card.image} alt={card.title} />

                    <div className="nr-items-container">
                      <div className="nr-items">
                        {card.logo && (
                          <img
                            src={card.logo}
                            alt={card.title}
                            className="nr-game-logo"
                          />
                        )}

                        <p className="nr-status">{card.status}</p>
                        <p className="nr-description">{card.description}</p>
                      </div>

                      <div className="nr-btns">
                        <button
                          className="nr-buy-btn"
                          onClick={() => navigate(`/discovery/${card.id}`)}
                        >
                          {card.isReleased
                            ? card.price === 0
                              ? "Free"
                              : formatter.format(card.price ?? 0)
                            : "Pre-Purchase"}
                        </button>

                        <button className="nr-icon-btn">
                          <Bookmark />
                        </button>

                        <button className="nr-icon-btn">
                          <Gift />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="nr-card-container">
            {cards.map((card) => (
              <NrCard
                key={card.id}
                title={card.title}
                imageSmall={card.imageSmall}
                isActive={card.id === activeCard}
                onClick={() => handleCardClick(card.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;