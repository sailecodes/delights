import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Login from "./assets/components/Login";
import Register from "./assets/components/Register";
import PageLayout from "./assets/components/PageLayout";
import Home from "./assets/components/Home";
import Favorites from "./assets/components/Favorites";
import Stores from "./assets/components/Stores";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "stores",
        element: <Stores />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
