import { createHashRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Nets from "../pages/nets";
import Showers from "../pages/showers";
import Aluminum from "../pages/aluminum";
import Glasses from "../pages/glass";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />, // App עוטף את כל הילדים
    children: [
      { path: "/nets", element: <Nets /> },
      { path: "/shower-enclosures", element: <Showers /> },
      { path: "/aluminum", element: <Aluminum /> },
      { path: "/glass", element: <Glasses /> },
    ],
  },
]);
