import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Hero, Card, Contact, Footer, Header, ProductDetails, ErrorPage } from "./components";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "Addbook",
        element: <Card />,
      },
      {
        path: "browsebooks/:category",
        element: <Contact />,
      },
      {
        path: "/bookdetails/:category/:id",
        element: <ProductDetails />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
      {
        path: "/*",
        element: <Footer />,
      },
      {
        path: "/*",
        element: <Header />,
      },
    ],
  },
]);

// Render the app with RouterProvider
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
