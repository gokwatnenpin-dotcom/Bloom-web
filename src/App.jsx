import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Shop from "./pages/Shop";
import Occasions from "./pages/Occasions";
import About from "./pages/About";
import Cart from "./pages/Cart";

function useRoute() {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setRoute(path);
    window.scrollTo(0, 0);
  };

  return { route, navigate };
}

export default function App() {
  const { route, navigate } = useRoute();
  const pages = {
    "/shop": <Shop onNavigate={navigate} />,
    "/occasions": <Occasions onNavigate={navigate} />,
    "/about": <About onNavigate={navigate} />,
    "/cart": <Cart onNavigate={navigate} />,
  };

  return (
    <>
      <Nav onNavigate={navigate} />
      {pages[route] || (
        <>
          <Hero onNavigate={navigate} />
          <div className="h-px bg-[#E6ECE8] mx-[6%]"></div>
          <Products onNavigate={navigate} />
          <Banner />
        </>
      )}
      <Footer onNavigate={navigate} />
    </>
  );
}
