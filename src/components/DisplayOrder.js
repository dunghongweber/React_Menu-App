const DisplayOrder = ({ order, removeOrder }) => {
  return (
    <div className="display-order container black-text">
      {order.reverse().map((o) => {
        if (o.type === "pizza") {
          return (
            <div key={Math.random()} className="order-item">
              <h6>
                <button
                  className="btn-floating red btn-small"
                  onClick={() => removeOrder(o)}
                >
                  <i className="material-icons">delete_forever</i>
                </button>
                Pizza
              </h6>
              <div className="row">
                <div className="col s6">
                  <p>
                    <strong>Base: </strong>
                    <br />
                    {o.base}
                  </p>
                </div>
                <div className="col s6">
                  <p>
                    <strong>Price: </strong>
                    <br />${o.price}
                  </p>
                </div>
                <div className="col s12">
                  <p>
                    <strong>Toppings:</strong>
                    <br />
                    {o.toppings.toString().split(",").join(" | ")}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <strong>Quantity: {o.quantity}</strong>
                </div>
              </div>
            </div>
          );
        } else if (o.type === "sandwich") {
          return (
            <div key={Math.random()} className="order-item">
              <h6>
                <button
                  className="btn-floating red btn-small"
                  onClick={() => removeOrder(o)}
                >
                  <i className="material-icons">delete_forever</i>
                </button>{" "}
                Sandwich
              </h6>

              <div className="row">
                <div className="col s6">
                  <p>
                    <strong>Type: </strong>
                    <br />
                    {o.filling}
                  </p>
                </div>
                <div className="col s6">
                  <p>
                    <strong>Price: </strong>
                    <br />${o.price}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <strong>Quantity: {o.quantity}</strong>
                </div>
              </div>
            </div>
          );
        } else if (o.type === "wings") {
          return (
            <div key={Math.random()} className="order-item">
              <h6>
                <button
                  className="btn-floating red btn-small"
                  onClick={() => removeOrder(o)}
                >
                  <i className="material-icons">delete_forever</i>
                </button>
                Chicken Wings
              </h6>

              <div className="row">
                <div className="col s6">
                  <p>
                    <strong>Sauce: </strong>
                    <br />
                    {o.sauce}
                  </p>
                </div>
                <div className="col s6">
                  <p>
                    <strong>Price: </strong>
                    <br />${o.price}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <strong>Quantity: {o.quantity}</strong>
                </div>
              </div>
            </div>
          );
        }
        return <div>No Item</div>;
      })}
    </div>
  );
};

export default DisplayOrder;
