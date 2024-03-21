import { useState } from "react";
import "./../scss/home.scss";
import RightArrowIcon from "./custom/icons/RightArrowIcon";
import LeftArrowIcon from "./custom/icons/LeftArrowIcon";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) newIndex = 3;
    else if (newIndex >= 4) newIndex = 0;

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
          <p>Welcome back, Lu!</p>
        </div>
        <div style={{ transform: `translate(-${activeIndex * 100}%)` }}>
          <p>
            Did you know your favorite drink is <br />
            <span>Boba</span>?
          </p>
        </div>
        <div style={{ transform: `translate(-${activeIndex * 100}%)` }}>
          <p>
            Hmm, your belly always craves <br />
            <span>Pho</span>.
          </p>
        </div>
        <div style={{ transform: `translate(-${activeIndex * 100}%)` }}>
          <p>
            Guess what? Your go-to spot is <span> Omomo</span>!
          </p>
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
