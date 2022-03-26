import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header/Header";
import { random } from "./components/uti.js";

function App() {
  const [mouses, setMouses] = useState([]);
  const [cart, setCart] = useState([]);
  const [choose, setChoose] = useState([]);

  const handleAddToCart = (mouse) => {
    const newCart = [...cart, mouse];
    setCart(newCart);
  };

  const chooseOne = (cart) => {
    let newArray = [];
    let num = random(cart.length);
    let selected = cart.find((mouse) => mouse.id === num);

    if (selected) {
      newArray = [selected];
      setChoose(newArray);
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
            <h4 key={item.id}>Name: {item.name}</h4>
          ))}
          <button className="btn btn-primary" onClick={() => chooseOne(cart)}>
            Choose For me
          </button>

          <button
            className="btn btn-danger mt-1"
            onClick={() => {
              setCart([]);
            }}
          >
            Remove all
          </button>
          {choose.map((singleChoose) => (
            <div key={singleChoose.id}>
              <h2>{singleChoose.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
