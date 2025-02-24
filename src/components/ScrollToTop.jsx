import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation(); // This hook gives access to the current location (route)

  useEffect(() => {
    // Scroll to top whenever location (route) changes
    window.scrollTo(0, 0);
  }, [location]); // Run this effect whenever the location changes

  return null; // This component doesn't need to render anything
};

export default ScrollToTop;
