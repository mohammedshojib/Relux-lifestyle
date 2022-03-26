import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header/Header";
import QandA from "./components/QandA";

function App() {
  const [mouses, setMouses] = useState([]);
  const [cart, setCart] = useState([]);

  const ChooseOne = () => {
    const random = Math.floor(Math.random() * cart.length);
    const choosed = [cart[random]];
    setCart(choosed);
  };
  const ChooseAgain = () => {
    setCart([]);
  };

  const handleAddToCart = (mouse) => {
    if (cart.length >= 4) {
      alert("only 4 product can added");
    } else {
      const newCart = [...cart, mouse];
      setCart(newCart);
    }
  };

  useEffect(() => {
    fetch("mouse.json")
      .then((res) => res.json())
      .then((data) => setMouses(data));
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="product-container">
          {mouses.map((mouse) => (
            <Card
              key={mouse.id}
              data={mouse}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="cart-container">
          <h3>Selected Mouse</h3>
          {cart.map((item) => (
            <p key={item.id}>
              <b>Name:</b> {item.name}
            </p>
          ))}
          <button className="btn btn-primary" onClick={ChooseOne}>
            Choose For me
          </button>

          <button className="btn btn-danger mt-1" onClick={ChooseAgain}>
            Remove all
          </button>
        </div>
        <QandA></QandA>
      </div>
    </div>
  );
}
export default App;
