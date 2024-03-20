import "./../scss/stores.scss";

const Stores = () => {
  return (
    <div className="stores--container">
      <div className="stores--item">
        <header className="stores--name">Starbucks</header>
        <div>
          <p className="stores--saved-food">9 food</p>
          <p className="stores--saved-drinks">13 drinks</p>
        </div>
      </div>
    </div>
  );
};
export default Stores;
