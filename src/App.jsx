import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/shop/Shop";
import { Signin } from "./pages/signin/Signin";
import { Nav } from "./components/Navbar/Nav";
import { About } from "./pages/About/About";
import { Footer } from "./components/Footer/Footer";
import { BeatLoader } from "react-spinners";
import { Signup } from "./pages/signin/Signup";
import { Contact } from "./pages/Contact/Contact";
import { Cart } from "./pages/cart/Cart";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // This useEffect will trigger whenever the location changes
  useEffect(() => {
    setLoading(true); // Set loading to true whenever a new page is requested
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay (simulating content loading)
    }, 1000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [location]);

  // Check if the current path is '/signin'
  const isSignInPage = location.pathname === "/signin";
  const isSignUpPage = location.pathname === "/signup";

  return (
    <>
      {loading ? (
        <div className="preloader">
          <BeatLoader color="#422520" loading={loading} size={30} />
        </div>
      ) : (
        <>
          {/* Conditionally render Nav based on the current route */}
          {!isSignInPage && !isSignUpPage && <Nav />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {!isSignInPage && !isSignUpPage && <Footer />}
        </>
      )}
    </>
  );
};
