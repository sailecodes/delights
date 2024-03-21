import "./../scss/stores.scss";

const Stores = () => {
  return (
    <div className="stores--container">
      <div className="stores--item">
        <header className="stores--name">Starbucks</header>
        <div>
          <p className="stores--saved-food">
            <span>19</span> food
          </p>
          <p className="stores--saved-drinks">
            <span>13</span> drinks
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stores;
