import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/shop/Shop";
import { Cake } from "./pages/cake/Cake";
import { Signin } from "./pages/signin/Signin";
import { Treat } from "./pages/treat/Treat";
import { Nav } from "./components/Navbar/Nav";
import { About } from "./pages/About/About";
import { Footer } from "./components/Footer/Footer";
import { BeatLoader} from "react-spinners";

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader">
          <BeatLoader color="#422520" loading={loading} size={30} />
        </div>
      ) : (
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cake" element={<Cake />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/treat" element={<Treat />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};
