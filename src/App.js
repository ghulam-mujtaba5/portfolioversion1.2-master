import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Resume from "./pages/Resume";
import DesktopPortfolio from "./pages/DesktopPortfolio";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "Ghulam Mujtaba - Software Engineer Portfolio";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Ghulam Mujtaba - Software Engineer Portfolio";
        metaDescription = "Software Engineer based in Lahore, Pakistan, with expertise in AI, Data Science, and Web Development. Currently pursuing a Bachelor's degree in Software Engineering from COMSATS University Islamabad.I am committed to developing innovative solutions through the integration of emerging technologies.Explore my portfolio to see projects like the Book Shop Billing Application and My Portfolio Project, showcasing expertise in Java, Java FX, Maven, Spring Framework, HTML, CSS, JavaScript, React, and more.Join me on my journey to create impactful solutions that shape the future of technology.";
        break;
      case "/resume":
        title = "Ghulam Mujtaba - Software Engineer Resume";
        metaDescription = "Software Engineer based in Lahore, Pakistan, with expertise in AI, Data Science, and Web Development. Currently pursuing a Bachelor's degree in Software Engineering from COMSATS University Islamabad.I am committed to developing innovative solutions through the integration of emerging technologies.Explore my portfolio to see projects like the Book Shop Billing Application and My Portfolio Project, showcasing expertise in Java, Java FX, Maven, Spring Framework, HTML, CSS, JavaScript, React, and more.Join me on my journey to create impactful solutions that shape the future of technology.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
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
