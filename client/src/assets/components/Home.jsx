import { useState } from "react";
import "./../scss/home.scss";
import RightArrowIcon from "./custom/icons/RightArrowIcon";
import LeftArrowIcon from "./custom/icons/LeftArrowIcon";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) newIndex = 2;
    else if (newIndex >= 3) newIndex = 0;

    setActiveIndex(newIndex);
  };

  return (
    <section className="home--container">
      <button
        className="home--slider-left-btn"
        onClick={() => updateIndex(activeIndex - 1)}>
        <LeftArrowIcon
          fill="none"
          stroke="#eea5a6"
        />
      </button>
      <div className="home--slider">
        <div style={{ transform: `translate(-${activeIndex * 100}%)` }}>
          <p>7 stores</p>
          <p>3 food</p>
          <p>4 drinks</p>
        </div>
        <div style={{ transform: `translate(-${activeIndex * 100}%)` }}>
          <p>
            Your favorite drink is <br />
            Boba
          </p>
        </div>
        <div style={{ transform: `translate(-${activeIndex * 100}%)` }}>
          <p>Your go-to spot is Omomo</p>
        </div>
      </div>
      <button
        className="home--slider-right-btn"
        onClick={() => updateIndex(activeIndex + 1)}>
        <RightArrowIcon
          fill="none"
          stroke="#eea5a6"
        />
      </button>
    </section>
  );
};

export default Home;
