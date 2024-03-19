import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageLayout from "./assets/components/PageLayout";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [],
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
