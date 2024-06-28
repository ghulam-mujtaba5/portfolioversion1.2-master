import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Resume from "./pages/Resume";
import DesktopPortfolio from "./pages/DesktopPortfolio";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { initGA, pageview } from "./lib/gtag"; // Correct relative path to gtag.js

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    initGA(); // Initialize Google Analytics on component mount

    // Scroll to top when navigation action is not "POP"
    const handleScrollTop = () => {
      if (location.action !== "POP") {
        window.scrollTo(0, 0);
      }
    };

    // Set page title and meta description based on pathname
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

    handleScrollTop(); // Scroll to top effect

    pageview(window.location.pathname); // Log pageview for Google Analytics
  }, [pathname, location.action]);

  return (
    <>
      <SpeedInsights />
      <Routes>
        <Route path="/" element={<DesktopPortfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
