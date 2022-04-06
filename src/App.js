import "@stripe/stripe-js"
import Header from "./components/Header";
import Home from "./pages/Home";
import Donuts from "./pages/Donuts";
import Drinks from "./pages/Drinks";
import Thankyou from "./pages/Thankyou";
import PlaceOrder from "./pages/PlaceOrder";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Goodbye from "./pages/Goodbye";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header />
        </div>
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="donuts" exact element={<Donuts />} />
            <Route path="drinks" exact element={<Drinks />} />
            <Route path="order" exact element={<PlaceOrder />} />
            <Route path="thanks" exact element={<Thankyou />} />
            <Route path="goodbye" exact element={<Goodbye />} />
          </Routes>
        </ScrollToTop>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
