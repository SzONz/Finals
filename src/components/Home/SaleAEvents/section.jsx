import { useState, useRef, useEffect } from "react";
import './SAE.css'
import SAECard from './card'
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SAE({ title, items }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const wrapperRef = useRef(null);
    const containerRef = useRef(null);

    const itemsPerSlide = 3;
    const maxIndex = Math.ceil(items.length / itemsPerSlide) - 1;

    const nextSlide = () => {
        setCurrentIndex(prev => prev < maxIndex ? prev + 1 : 0);
    };

    const prevSlide = () => {
        setCurrentIndex(prev => prev > 0 ? prev - 1 : maxIndex);
    };

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                const firstCard = containerRef.current.children[0];
                const cardWidth = firstCard.offsetWidth;
                const gap = 20;
                setSlideWidth((cardWidth + gap) * itemsPerSlide);
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <section className="SAE">
            <h3>{title}</h3>

            <div className="slider-wrapper">
                <button className="arrow left" onClick={prevSlide}>
                    <ChevronLeft />
                </button>

                <div className="SAE-container-wrapper" ref={wrapperRef}>
                    <div
                        className="SAE-container"
                        ref={containerRef}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`
                        }}
                    >
                        {Array.from({ length: Math.ceil(items.length / itemsPerSlide) }).map((_, i) => {
                            const start = i * itemsPerSlide;
                            const slideItems = items.slice(start, start + itemsPerSlide);

                            return (
                                <div className="SAE-slide" key={i}>
                                    {slideItems.map(item => (
                                    <SAECard
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        original={item.original}
                                        newPrice={item.new}
                                        date={item.date}
                                    />
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button className="arrow right" onClick={nextSlide}>
                    <ChevronRight />
                </button>
            </div>
        </section>
    );
}

export default SAE;