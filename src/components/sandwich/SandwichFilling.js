import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cover from "../../assets/sandwich.jpg";

const SandwichFilling = ({ sandwich, selectSandwich, addOrder, resetItem }) => {
  const sandwichSelection = [
    "Italian BLT",
    "Roasted Steak",
    "Oven Turkey",
    "Meat Ball",
  ];

  return (
    <motion.div
      className="sandwich-filling container card-panel"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h5 className="selection">Select Sandwich Type:</h5>
      <div className="row">
        <div className="col s7">
          {sandwichSelection.map((filling) => {
            return (
              <motion.p key={filling} whileHover={{ scale: 1.5, originX: 0 }}>
                <label>
                  <input
                    className="with-gap"
                    name="group1"
                    type="radio"
                    onClick={() => selectSandwich(filling)}
                  />
                  <span className="black-text">{filling}</span>
                </label>
              </motion.p>
            );
          })}
        </div>
        <div className="col s5">
          <img
            src={cover}
            alt="sandwich-cover"
            className="circle responsive-img right"
          />
        </div>
      </div>

      {sandwich.filling && (
        <Link
          to="/order"
          onClick={() => {
            addOrder(sandwich);
            resetItem();
          }}
        >
          <motion.button
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            className="waves-effect btn-small btn"
          >
            <i className="material-icons right">forward</i>
            Next
          </motion.button>
        </Link>
      )}
    </motion.div>
  );
};

export default SandwichFilling;
