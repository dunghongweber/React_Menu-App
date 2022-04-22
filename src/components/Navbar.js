import { Link } from "react-router-dom";
import { useEffect } from "react";

import M from "materialize-css";

const NavBar = ({ order }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Pizza Maze
          </a>
          <a href="!#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Menu</Link>
            </li>
            <li>
              <Link to="/order">
                <i className="material-icons left">shopping_cart</i>
                {order.length !== 0 && (
                  <span className="new badge red" data-badge-caption="items">
                    {order.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/">
            <i className="material-icons left text-pink">restaurant_menu</i>
            MENU
          </Link>
        </li>
        <li>
          <Link to="/order">
            <i className="material-icons left text-pink">shopping_cart</i>
            CART
            {order.length !== 0 && (
              <span className="new badge red" data-badge-caption="items">
                {order.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
