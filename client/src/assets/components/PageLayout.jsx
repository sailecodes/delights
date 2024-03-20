import { NavLink, Outlet } from "react-router-dom";
import "./../scss/pageLayout.scss";

const PageLayout = () => {
  const onLogout = () => {
    console.log("Logging out");
  };

  return (
    <main className="page-layout--container">
      <header className="page-layout--header">Delights</header>
      <Outlet />
      <nav className="page-layout--nav">
        <NavLink
          to="/dashboard"
          end>
          Home
        </NavLink>
        <NavLink to="/dashboard/favorites">Favorites</NavLink>
        <NavLink to="/dashboard/stores">Stores</NavLink>
        <button onClick={onLogout}>Logout</button>
      </nav>
    </main>
  );
};

export default PageLayout;
