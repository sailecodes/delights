import { Link, Outlet } from "react-router-dom";
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
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/favorites">Favorites</Link>
        <Link to="/dashboard/stores">Stores</Link>
        <button onClick={onLogout}>Logout</button>
      </nav>
    </main>
  );
};

export default PageLayout;
