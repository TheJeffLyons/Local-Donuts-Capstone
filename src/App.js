import "@stripe/stripe-js";
import Header from "./components/Header";
import Home from "./pages/Home";
import Donuts from "./pages/Donuts";
import Drinks from "./pages/Drinks";
import Thankyou from "./pages/Thankyou";
import PlaceOrder from "./pages/PlaceOrder";
import LinkToGithub from "./components/LinkToGithub";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LinkToGithub />
        <Header />

        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="donuts" exact element={<Donuts />} />
            <Route path="drinks" exact element={<Drinks />} />
            <Route path="order" exact element={<PlaceOrder />} />
            <Route path="thanks" exact element={<Thankyou />} />
          </Routes>
        </ScrollToTop>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
