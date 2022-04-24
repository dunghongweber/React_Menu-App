import { Link } from "react-router-dom";
import PizzaPic from "../assets/pizza3.jpg";
import SandwichPic from "../assets/sandwich2.jpg";
import WingsPic from "../assets/wings2.jpg";
import { motion } from "framer-motion";
import coverPic from "../assets/cover2.jpg";
import { useState, useEffect } from "react";

const Home = () => {
  const menuItems = [
    {
      name: "Pizza",
      pic: PizzaPic,
      animationTime: 0.5,
      description:
        "Pick your own pizza base and modify youbr pizza with all the toppings you prefer",
    },
    {
      name: "Sandwich",
      pic: SandwichPic,
      animationTime: 1,
      description:
        "Choose from our variety of selection for sandwich, best choice for quick breakfast",
    },
    {
      name: "Chicken Wings",
      pic: WingsPic,
      animationTime: 1.5,
      description:
        "Decide which sauce and spiciness is suited for you, our wings are perfect for a game night!",
    },
  ];

  const buttonLayout = (
    <motion.button
      className="btn btn-small"
      whileHover={{
        scale: 1.2,
        transition: {
          duration: 0.2,
          repeat: 3,
        },
      }}
    >
      <i className="material-icons right">add_shopping_cart</i>
      Order
    </motion.button>
  );

  const orderButton = (cond) => {
    if (cond === "Pizza") {
      return <Link to="/pbase">{buttonLayout}</Link>;
    } else if (cond === "Sandwich") {
      return <Link to="/sandwich">{buttonLayout}</Link>;
    } else {
      return <Link to="/wings">{buttonLayout}</Link>;
    }
  };

  const [cover, setCover] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setCover(false);
    }, 1000);
  }, []);

  return (
    <motion.div
      className="homepage"
      exit={{ x: "-1000vh" }}
      transition={{ ease: "easeInOut" }}
    >
      {cover && (
        <motion.div
          className="row"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img src={coverPic} className="col s12 cover-height" alt="cover" />
        </motion.div>
      )}

      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="center"
      >
        Pizza
        <svg
          width="58"
          height="56"
          viewBox="0 0 58 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="pizzamaze">
            <circle
              id="base-cirle"
              cx="26"
              cy="30"
              r="25"
              fill="#C9BC8F"
              fillOpacity="0.5"
              stroke="#E6D4BA"
              strokeWidth="0.5"
            />
            <circle id="yellow-circle" cx="32" cy="26" r="25" fill="#E0C565" />
            <motion.path
              id="left-m"
              d="M18 45.5L21.5 13L33 33"
              stroke="black"
              strokeWidth="5"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
            />
            <motion.path
              id="right-m"
              d="M47 45.5L43.5 13L32 33"
              stroke="black"
              strokeWidth="5"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
            />
          </g>
        </svg>
        aze's Menu
      </motion.h1>

      <div className="menu-list container">
        {menuItems.map((item) => {
          return (
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 + item.animationTime, delay: 1 }}
              className="col s12 m8 offset-m2 l6 offset-l3"
              key={item.name}
            >
              <div className="card-panel z-depth-4">
                <div className="row valign-wrapper">
                  <div className="col m3 s5">
                    <img
                      src={item.pic}
                      alt=""
                      className="circle responsive-img"
                    />
                  </div>
                  <div className="col m9 s7">
                    <span className="black-text row">
                      <h6>{item.name}</h6> {item.description}
                    </span>
                    <div className="row">
                      <div className="col m6 s12">{orderButton(item.name)}</div>
                      <div className="col m8 s2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Home;
