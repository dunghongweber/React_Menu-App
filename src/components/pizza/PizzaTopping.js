import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cover from "../../assets/pizza.jpg";

const PizzaTopping = ({ addTopping, pizza, addOrder }) => {
  const toppings = [
    "Ham",
    "Chesse",
    "Beef",
    "Pepperoni",
    "Mushroom",
    "Onion",
    "Green Pepper",
    "Pineapple",
  ];

  return (
    <div>
      <motion.div
        className="pizza-topping container card-panel"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h5 className="selection">Select pizza toppings:</h5>
        <div className="row">
          <div className="col s7">
            {toppings.map((topping) => {
              return (
                <motion.p key={topping} whileHover={{ scale: 1.5, originX: 0 }}>
                  <label>
                    <input
                      type="checkbox"
                      className="filled-in"
                      onClick={() => {
                        addTopping(topping);
                      }}
                    />
                    <span className="black-text">{topping}</span>
                  </label>
                </motion.p>
              );
            })}
          </div>
          <div className="col s5">
            <img
              src={cover}
              alt="pizza-cover"
              className="circle responsive-img right"
            />
          </div>
        </div>

        <div className="button-group">
          <Link to="/pbase">
            <button className="waves-effect btn btn-small">
              <i className="material-icons left">chevron_left</i>
              Back
            </button>
          </Link>

          <Link to="/order" onClick={() => addOrder(pizza)}>
            <button className="waves-effect btn btn-small">
              <i className="material-icons right">chevron_right</i>
              Done
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default PizzaTopping;
