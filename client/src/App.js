import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Plans from "./pages/plans/Plans";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/cart/Cart";
import { useContext } from "react";
import { dataContext } from "./context/dataContext";

function App() {
  const { test } = useContext(dataContext);
  console.log(`Data: ${test}`);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/plans" element={<Plans />} /> */}
        {/* <Route path="/success" element={<Transaction />} /> */}
        {/* <Route path="/cancel" element={<Transaction />} /> */}
      </Routes>
    </div>
  );
}

export default App;
