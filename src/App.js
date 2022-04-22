import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Order from "./components/Order";
import PizzaBase from "./components/pizza/PizzaBase";
import PizzaTopping from "./components/pizza/PizzaTopping";
import SandwichFilling from "./components/sandwich/SandwichFilling";
import WingSauce from "./components/wings/WingSauce";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [order, setOrder] = useState([]);
  const [pizza, setPizza] = useState({
    base: "",
    toppings: [],
    type: "pizza",
    price: 9.99,
    quantity: 1,
  });
  const [sandwich, setSandwich] = useState({
    filling: "",
    type: "sandwich",
    price: 3.99,
    quantity: 1,
  });
  const [wings, setWings] = useState({
    sauce: "",
    type: "wings",
    price: 5.99,
    quantity: 1,
  });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (newTopping) => {
    let toppingList;
    if (!pizza.toppings.includes(newTopping)) {
      toppingList = [...pizza.toppings, newTopping];
    } else {
      toppingList = pizza.toppings.filter((t) => t !== newTopping);
    }
    setPizza({ ...pizza, toppings: toppingList });
  };

  const selectSandwich = (filling) => {
    setSandwich({ ...sandwich, filling });
  };

  const selectWings = (sauce) => {
    setWings({ ...wings, sauce });
  };

  const resetItem = () => {
    setPizza({
      base: "",
      toppings: [],
      type: "pizza",
      price: 9.99,
      quantity: 1,
    });
    setSandwich({ filling: "", type: "sandwich", price: 3.99, quantity: 1 });
    setWings({ sauce: "", type: "wings", price: 5.99, quantity: 1 });
  };

  const addOrder = (item) => {
    if (
      item.type === "sandwich" &&
      order.some((it) => it.filling === item.filling)
    ) {
      order.find((it) => it.filling === item.filling).quantity += 1;
    } else if (
      item.type === "wings" &&
      order.some((it) => it.sauce === item.sauce)
    ) {
      order.find((it) => it.sauce === item.sauce).quantity += 1;
    } else {
      setOrder([...order, item]);
    }
  };

  const removeOrder = (item) => {
    setOrder(order.filter((e) => e !== item));
  };

  return (
    <Router>
      <div className="App">
        <NavBar order={order}></NavBar>

        <div className="content container">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/pbase">
              <PizzaBase addBase={addBase} pizza={pizza}></PizzaBase>
            </Route>
            <Route path="/ptopping">
              <PizzaTopping
                addTopping={addTopping}
                pizza={pizza}
                addOrder={addOrder}
              ></PizzaTopping>
            </Route>

            <Route path="/sandwich">
              <SandwichFilling
                sandwich={sandwich}
                selectSandwich={selectSandwich}
                addOrder={addOrder}
                resetItem={resetItem}
              ></SandwichFilling>
            </Route>

            <Route path="/wings">
              <WingSauce
                wings={wings}
                selectWings={selectWings}
                addOrder={addOrder}
                resetItem={resetItem}
              ></WingSauce>
            </Route>
            <Route path="/order">
              <Order
                order={order}
                resetItem={resetItem}
                removeOrder={removeOrder}
              ></Order>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
