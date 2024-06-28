import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Resume from "./pages/Resume";
import DesktopPortfolio from "./pages/DesktopPortfolio";
import { initGA, pageview } from "./lib/gtag"; // Import Google Analytics functions from gtag.js

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    // Initialize Google Analytics
    initGA();

    // Function to set page title and meta description based on pathname
    const setPageInfo = () => {
      let title = "Ghulam Mujtaba - Software Engineer Portfolio";
      let metaDescription =
        "Software Engineer based in Lahore, Pakistan, with expertise in AI, Data Science, and Web Development. Currently pursuing a Bachelor's degree in Software Engineering from COMSATS University Islamabad. I am committed to developing innovative solutions through the integration of emerging technologies.";

      switch (pathname) {
        case "/":
          title = "Ghulam Mujtaba - Software Engineer Portfolio";
          metaDescription +=
            " Explore my portfolio to see projects like the Book Shop Billing Application and My Portfolio Project, showcasing expertise in Java, Java FX, Maven, Spring Framework, HTML, CSS, JavaScript, React, and more. Join me on my journey to create impactful solutions that shape the future of technology.";
          break;
        case "/resume":
          title = "Ghulam Mujtaba - Software Engineer Resume";
          metaDescription +=
            " Explore my resume to learn about my expertise and experience in AI, Data Science, and Web Development.";
          break;
        default:
          break;
      }

      document.title = title; // Set document title

      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription; // Set meta description
      }
    };

    setPageInfo(); // Call setPageInfo initially

    // Log pageview for Google Analytics on route change
    pageview(window.location.pathname);

    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Set up listener for route changes to update page info and track pageview
    const unlisten = history.listen(() => {
      setPageInfo();
      pageview(window.location.pathname);
      window.scrollTo(0, 0);
    });

    // Clean up listener on component unmount
    return () => {
      unlisten();
    };
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<DesktopPortfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
