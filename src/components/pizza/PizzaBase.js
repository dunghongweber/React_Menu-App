import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cover from "../../assets/pizza.jpg";

const PizzaBase = ({ addBase, pizza }) => {
  const baseSelection = ["Classic", "Thin Crust", "Thin & Crispy"];

  return (
    <div>
      <motion.div
        className="pizzabase container card-panel"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h5 className="selection">Select pizza base:</h5>
        <div className="row">
          <div className="col s7">
            {baseSelection.map((base) => {
              return (
                <motion.p key={base} whileHover={{ scale: 1.5, originX: 0 }}>
                  <label>
                    <input
                      className="with-gap"
                      name="group1"
                      type="radio"
                      onClick={() => addBase(base)}
                    />
                    <span className="black-text">{base}</span>
                  </label>
                </motion.p>
              );
            })}
          </div>
          <div className="col s5 right">
            <img
              src={cover}
              alt="pizza-cover"
              className="circle responsive-img right"
            />
          </div>
        </div>

        {pizza.base && (
          <Link to="/ptopping">
            <motion.button
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              className="waves-effect btn btn-small"
            >
              <i className="material-icons right">forward</i>
              Next
            </motion.button>
          </Link>
        )}
      </motion.div>
    </div>
  );
};

export default PizzaBase;
