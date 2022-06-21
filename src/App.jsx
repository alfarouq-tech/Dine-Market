import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartData,
  fetchProductsData,
  sendCartData,
} from "./store/store-actions";
import Layout from "./components/layout/Layout";
import Navigation from "./components/layout/Navigation";
// import ProductDetails from "./pages/ProductDetails";
// import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/UI/ScrollToTop";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import NotFound from "./pages/NotFound";

const Products = React.lazy(() => import("./pages/Products"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
function App() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.cart.isVisible);
  const cart = useSelector((state) => state.cart);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <ScrollToTop />
        <Navigation />
        {isVisible && <Cart />}
        <AnimatePresence exitBeforeEnter>
          <Routes key={location.key} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="products/*" element={<Products />} />
            <Route
              path="productDetails/:productId"
              element={<ProductDetails />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Suspense>
    </Layout>
  );
}

export default App;
