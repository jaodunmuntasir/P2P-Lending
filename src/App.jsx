import React, { useState, useCallback } from "react";
import TitleSlide from "./Slides/Slide1";
import SecondSlide from "./Slides/Slide2";
import ThirdSlide from "./Slides/Slide3";
import FourthSlide from "./Slides/Slide4";
import FifthSlide from "./Slides/Slide5";
import SixthSlide from "./Slides/Slide6";
import SeventhSlide from "./Slides/Slide7";
import EighthSlide from "./Slides/Slide8";
import NinthSlide from "./Slides/Slide9";
import TenthSlide from "./Slides/Slide10";
import EleventhSlide from "./Slides/Slide11";
import TwelfthSlide from "./Slides/Slide12";
import ThirteenthSlide from "./Slides/Slide13";
import FourteenthSlide from "./Slides/Slide14";
import FifteenthSlide from "./Slides/Slide15";
import SixteenthSlide from "./Slides/Slide16";
import SeventeenthSlide from "./Slides/Slide17";
import EighteenthSlide from "./Slides/Slide18";
import NineteenthSlide from "./Slides/Slide19";
import TwentiethSlide from "./Slides/Slide20";
import TwentyFirstSlide from "./Slides/Slide21";
import TwentySecondSlide from "./Slides/Slide22";
import TwentyThirdSlide from "./Slides/Slide23";
import TwentyFourthSlide from "./Slides/Slide24";
import TwentyFifthSlide from "./Slides/Slide25";
import FinalSlide from "./Slides/Slide26";
// import './App.css'

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    TitleSlide,
    SecondSlide,
    ThirdSlide,
    FourthSlide,
    FifthSlide,
    SixthSlide,
    SeventhSlide,
    EighthSlide,
    NinthSlide,
    TenthSlide,
    EleventhSlide,
    TwelfthSlide,
    ThirteenthSlide,
    FourteenthSlide,
    FifteenthSlide,
    SixteenthSlide,
    SeventeenthSlide,
    EighteenthSlide,
    NineteenthSlide,
    TwentiethSlide,
    TwentyFirstSlide,
    TwentySecondSlide,
    TwentyThirdSlide,
    TwentyFourthSlide,
    TwentyFifthSlide,
    FinalSlide,
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      }
    },
    [nextSlide, prevSlide]
  );

  const CurrentSlide = slides[currentSlide];

  return (
    <div className="h-full w-full" tabIndex={0} onKeyDown={handleKeyDown}>
      <CurrentSlide />
      <div className="fixed bottom-4 right-4 flex gap-2">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-blue-500 text-white rounded"
          disabled={currentSlide === 0}
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-blue-500 text-white rounded"
          disabled={currentSlide === slides.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
