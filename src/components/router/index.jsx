import { createBrowserRouter, Navigate } from "react-router-dom";
import { AboutContainer } from "../AboutContainer/AboutContainer";
import ResumeContainer from "../ResumeContainer";
import PortfolioContainer from "../PortfolioContainer";
import BlogContainer from "../BlogContainer";
import ContactContainer from "../ContactContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/about" replace />,
  },
  {
    path: "/about",
    element: <AboutContainer />,
  },
  {
    path: "/resume",
    element: <ResumeContainer />,
  },
  {
    path: "/portfolio",
    element: <PortfolioContainer />,
  },
  {
    path: "/blogs",
    element: <BlogContainer />,
  },
  {
    path: "/contact",
    element: <ContactContainer />,
  },
]);

export default router;
