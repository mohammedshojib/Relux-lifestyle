import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header/Header";

function App() {
  const [mouses, setMouses] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (mouse) => {
    const newCart = [...cart, mouse];
    setCart(newCart);
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
          <h3>Cart</h3>
          {cart.map((item) => (
            <h4 key={item.id}>Name: {item.name}</h4>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
