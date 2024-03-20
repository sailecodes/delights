import "./../scss/favorites.scss";
import { FaBowlFood } from "react-icons/fa6";
import { GiBoba } from "react-icons/gi";

const Favorites = () => {
  return (
    <div className="favorites--container">
      <FavoriteItem
        company="Starbucks"
        type="Drink"
        name="Caramel Frappe"
        detailsArr={["Venti", "No whip", "Extra caramel drizzle"]}
      />
      <FavoriteItem
        company="In N Out"
        type="Food"
        name="3x3"
        detailsArr={["Grilled onions", "No pickles"]}
      />
    </div>
  );
};

const FavoriteItem = ({ company, type, name, detailsArr }) => {
  return (
    <div className="favorites--item">
      <header className="favorites--item-header">
        <p>{company}</p>
        {type === "Food" ? <FaBowlFood size={24} /> : <GiBoba size={32} />}
      </header>
      <p className="favorites--item-name">{name}</p>
      <ul className="favorites--item-details">
        {detailsArr.map((detail) => (
          <li key={name + detail}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
