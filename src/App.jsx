import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Shop from "./pages/Shop";
import Occasions from "./pages/Occasions";
import About from "./pages/About";
import Cart from "./pages/Cart";

export default function App() {
  const path = window.location.pathname;

  return (
    <>
      <Nav />
      {path === "/shop" ? (
        <Shop />
      ) : path === "/occasions" ? (
        <Occasions />
      ) : path === "/about" ? (
        <About />
      ) : path === "/cart" ? (
        <Cart />
      ) : (
        <>
          <Hero />
          <div className="h-px bg-[#E6ECE8] mx-[6%]"></div>
          <Products />
          <Banner />
        </>
      )}
      <Footer />
    </>
  );
}
