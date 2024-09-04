import AboutUs from "./pages/AboutUs/AboutUs";
import Events from "./pages/Events/events";
import EventsInside from "./pages/events_insider/evein";
import Home from "./pages/HomePage/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sponser from "./pages/Sponser/Sponser";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/event",
    element: <Events />,
  },
  {
    path: "/eve",
    element: <EventsInside />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/sponser",
    element: <Sponser />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
