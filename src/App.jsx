import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import LandingPage from "./components/LandingPage";
import ContactUs from "./components/ContactUs";
import BlogDetail from "./components/BlogDetail";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <div className="bg-primary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
