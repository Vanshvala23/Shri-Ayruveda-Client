import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopRoute = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to the top left corner whenever the path changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything visually
};

export default ScrollToTopRoute;