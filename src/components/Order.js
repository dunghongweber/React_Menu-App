import { Link } from "react-router-dom";
import { useEffect } from "react";
import DisplayOrder from "./DisplayOrder";
import { motion } from "framer-motion";
import CheckOut from "./CheckOut";

import M from "materialize-css";

const Order = ({ order, resetItem, removeOrder }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <motion.div
      className="order container card-panel"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h5 className="selection center">Your Order</h5>
      {order.length !== 0 ? (
        <DisplayOrder order={order} removeOrder={removeOrder}></DisplayOrder>
      ) : (
        <div>
          <h5 className="black-text  center">...your cart is empty...</h5>
        </div>
      )}

      <div className="button-group">
        <Link to="/" onClick={() => resetItem()}>
          <button className="waves-effect btn btn-small">
            <i className="material-icons left">chevron_left</i>
            More Food!
          </button>
        </Link>
        {order.length !== 0 && (
          <a
            className="waves-effect btn-small btn modal-trigger"
            href="#modal1"
          >
            <i className="material-icons right">check_circle</i>
            Checkout
          </a>
        )}

        <CheckOut order={order} resetItem={resetItem}></CheckOut>
      </div>
    </motion.div>
  );
};

export default Order;
