import { useState } from "react";
import "./community.css";
import CCard from "./card";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Community({ data }) {

  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  const [slides] = useState(() => {
    const shuffledGames = shuffle(data).slice(0, 3);

    return shuffledGames.map((game) => {
      const review =
        game.reviews[Math.floor(Math.random() * game.reviews.length)];

      return {
        ...game,
        selectedReview: review,
      };
    });
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev < slides.length - 1 ? prev + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : slides.length - 1
    );
  };

  return (
    <section className="highlight">
      <h3>Community Recommends</h3>

      <div className="highlight-wrapper">
        <button className="arrow left" onClick={prevSlide}>
          <ChevronLeft />
        </button>

        <div className="highlight-slider">
          <div
            className="highlight-container"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((game) => (
              <div className="highlight-slide" key={game.id}>
                <CCard
                  image={game.image}
                  price={game.price}
                  review={game.selectedReview.review}
                  playtime={game.selectedReview.playtime}
                  username={game.selectedReview.username}
                />
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={nextSlide}>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Community;