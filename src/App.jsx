import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import RefundPolicy from "./pages/RefundPolicy";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/AboutUs";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";
import Packing from "./pages/Packing";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">

      <Header />
      <ScrollToTop />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/packing" element={<Packing />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}
