import { createBrowserRouter as Router, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

function App() {

  const routes = Router([
    {
      path: "/",
      element: <Layout>App</Layout>
    },
  ]);

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
