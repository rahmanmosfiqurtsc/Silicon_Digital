import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import Homepage from "../pages/Homepage";
import Services from "../pages/Services";
import ServicesDetails from "../pages/ServiceDetails";
import PortfolioPage from "../pages/PortfolioPage";
import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout/>,
    children: [
      {
        index: true,
        element: <Homepage/>,
      },
      {
        path: "service",
        element: <Services/>,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
    ],
  },
]);

