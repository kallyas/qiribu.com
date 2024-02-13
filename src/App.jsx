import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/error-page";
import Home from "./pages/Home";
import TermsPage from "./pages/terms";
import PrivacyPage from "./pages/privacy";
import CardPolicyPage from "./pages/card-policy";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "terms-conditions",
          element: <TermsPage />,
        },
        {
          path: "privacy-policy",
          element: <PrivacyPage />,
        },
        {
          path: "card-policy",
          element: <CardPolicyPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
