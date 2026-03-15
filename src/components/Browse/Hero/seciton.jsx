import "./hero.css";
import HCard from "./card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useSlider from "../../config/useSlider";
import genres from "../../../data/Browse/Hero/genres.json";

function HeroSection() {

    const {
        currentIndex,
        nextSlide,
        prevSlide,
        slides
    } = useSlider(genres.data, 4)

    return (
        <section className="b-hero">

            <h3>Popular Genre</h3>

            <div className="slider">

                <button className="arrow left" onClick={prevSlide}>
                    <ChevronLeft />
                </button>

                <div className="slider-viewport">
                    <div
                        className="slider-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide, i) => (
                            <div className="slide" key={i}>
                                {slide.map((item) => (
                                    <HCard
                                        key={item.id}
                                        title={item.title}
                                        image={item.image}
                                    />
                                ))}
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

export default HeroSection;