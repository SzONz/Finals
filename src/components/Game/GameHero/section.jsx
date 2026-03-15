import "./gamehero.css";
import { useState } from "react";

function GameHero({ game }) {

    const [index, setIndex] = useState(0);
    const [activeImage, setActiveImage] = useState(game.hero);

    const images = game.gallery;

    const imagesPerSlide = 4;

    const slides = [];
    for (let i = 0; i < images.length; i += imagesPerSlide) {
        slides.push(images.slice(i, i + imagesPerSlide));
    }

    const next = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

  return (
    <section className="game-hero">

      <h3 className="game-hero__title">{game.title}</h3>

      <div className="game-hero__container">

        <div className="game-hero__media">

            <div className="game-hero__main-image">
                <img src={activeImage} alt={game.title}/>
            </div>

            <div className="game-hero__gallery">

                <div className="game-hero__gallery-slider">

                    <div
                        className="game-hero__gallery-arrow game-hero__gallery-arrow-left"
                        onClick={prev}
                    >
                        ◀
                    </div>

                    <div className="game-hero__gallery-viewport">
                        <div
                            className="game-hero__gallery-track"
                            style={{ transform: `translateX(-${index * 100}%)` }}
                        >
                            {slides.map((slide, i) => (
                                <div className="game-hero__gallery-slide" key={i}>
                                    {slide.map((img, j) => (
                                        <img
                                            key={j}
                                            src={img}
                                            alt=""
                                            onClick={() => setActiveImage(img)}
                                            className={activeImage === img ? "active" : ""}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className="game-hero__gallery-arrow game-hero__gallery-arrow-right"
                        onClick={next}
                    >
                        ▶
                    </div>

                </div>

            </div>

        </div>

      </div>

    </section>
  );
}

export default GameHero;