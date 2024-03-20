import { Link, Outlet } from "react-router-dom";
import "./../scss/pageLayout.scss";

const PageLayout = () => {
  const onLogout = () => {
    console.log("Logging out");
  };

  return (
    <div className="page-layout--container">
      <header className="page-layout--header">Delights</header>
      <Outlet />
      <nav className="page-layout--nav">
        <Link>Home</Link>
        <Link>Favorites</Link>
        <Link>Stores</Link>
        <button onClick={onLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default PageLayout;
