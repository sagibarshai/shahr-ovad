import { createHashRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />, // App עוטף את כל הילדים
    children: [
      { path: "/home", element: <Home /> },
      { path: "/nets", element: <div>nets page</div> },
      { path: "/shower-enclosures", element: <div>מקלחונים</div> },
      { path: "/aluminum", element: <div>Aluminum page</div> },
      { path: "/glass", element: <div>Glass page</div> },
    ],
  },
]);
