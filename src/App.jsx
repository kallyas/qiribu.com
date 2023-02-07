import { createBrowserRouter as Router, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/error-page";

function App() {

  const routes = Router([
    {
      path: "/",
      element: <Layout>App</Layout>,
      errorElement: <ErrorPage />
      
    },
    {
      path: "contact",
      element: <Contact />,
      // errorElement: <ErrorPage />
    }
  ]);

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
