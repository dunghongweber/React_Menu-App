import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cover from "../../assets/wings.jpg";

const WingSauce = ({ wings, selectWings, addOrder, resetItem }) => {
  const sauceSelection = [
    "Bufallo",
    "Asian Zing",
    "Spicy Garlic",
    "Sweet & Sour",
    "House Special",
  ];

  return (
    <motion.div
      className="wing-sauce container  card-panel"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h5 className="selection">Select Sauce for your wings:</h5>
      <div className="row">
        <div className="col s7">
          {sauceSelection.map((sauce) => {
            return (
              <motion.p key={sauce} whileHover={{ scale: 1.5, originX: 0 }}>
                <label>
                  <input
                    className="with-gap"
                    name="group1"
                    type="radio"
                    onClick={() => selectWings(sauce)}
                  />
                  <span className="black-text">{sauce}</span>
                </label>
              </motion.p>
            );
          })}
        </div>
        <div className="col s5">
          <img
            src={cover}
            alt="wings-cover"
            className="circle responsive-img right"
          />
        </div>
      </div>

      {wings.sauce && (
        <Link
          to="/order"
          onClick={() => {
            addOrder(wings);
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

export default WingSauce;
