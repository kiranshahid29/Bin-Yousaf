import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Frontend/ONE/Home";
import Footer from "./Frontend/Main Components/Footer";
import Header from "./Frontend/Main Components/Header";
import BlackBoski from "./Frontend/TWO/BlackBoski";
import NavigationBar from "./Frontend/Main Components/NavigationBar";
import BlackBoskiDesign from "./Frontend/THREE/BlackBoskiDesign";
import CartTwo from "./Frontend/FOUR/CartTwo";
import CheckOut from "./Frontend/FIVE/CheckOut";

function App() {
  return (
    <div className="Bin Yousaf">
      <Header />
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="BlackBoski" element={<BlackBoski />} />
          <Route path="/BlackBoski/blackBoskiDesign" element={<BlackBoskiDesign/>}/>
          <Route path="/viewCart" element={<CartTwo/>}></Route>
          <Route path="/checkOut" element={<CheckOut/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
