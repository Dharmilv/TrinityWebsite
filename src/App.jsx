import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sponsors from "./pages/Sponsers";

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/sponser',
      element: <Sponsors />
    },

  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}