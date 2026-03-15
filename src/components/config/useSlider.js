import { useState } from "react";

function useSlider(items, itemsPerSlide = 3) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const maxIndex = Math.ceil(items.length / itemsPerSlide) - 1;

    const nextSlide = () => {
        setCurrentIndex(prev => prev < maxIndex ? prev + 1 : 0);
    };

    const prevSlide = () => {
        setCurrentIndex(prev => prev > 0 ? prev - 1 : maxIndex);
    };

    const getSlides = () => {
        const slides = [];

        for (let i = 0; i <= maxIndex; i++) {
            const start = i * itemsPerSlide;
            slides.push(items.slice(start, start + itemsPerSlide));
        }

        return slides;
    };

    return {
        currentIndex,
        nextSlide,
        prevSlide,
        slides: getSlides()
    };
}

export default useSlider;