import { useState, useEffect } from "react";
import M from "materialize-css";

const CheckOut = ({ order, resetItem }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [validName, setValidName] = useState(false);
  const [validPhone, setValidPhone] = useState(false);

  const validClass = (id, validOrNot) => {
    let nameBox = document.getElementById(id);
    if (validOrNot) {
      nameBox.classList.add("valid");
      nameBox.classList.remove("invalid");
    } else {
      nameBox.classList.add("invalid");
      nameBox.classList.remove("valid");
    }
  };

  const handleValidate = (e) => {
    if (e.target.id === "name") {
      if (e.target.value !== "") {
        setValidName(true);
        validClass(e.target.id, true);
      } else {
        setValidName(false);
        validClass(e.target.id, false);
      }
    }

    if (e.target.id === "phone") {
      if (
        e.target.value !== "" &&
        e.target.value.length >= 10 &&
        !isNaN(e.target.value)
      ) {
        setValidPhone(true);
        validClass(e.target.id, true);
      } else {
        setValidPhone(false);
        validClass(e.target.id, false);
      }
    }
  };
  return (
    <div id="modal1" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4>Place Your Order</h4>
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <input id="name" type="text" onChange={handleValidate} />
            <label htmlFor="icon_prefix">Name</label>
          </div>
          <div className="input-field col s6">
            <i className="material-icons prefix">phone</i>
            <input id="phone" type="tel" required onChange={handleValidate} />
            <label htmlFor="icon_telephone">Telephone (10 digits)</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">monetization_on</i>
            <input
              id="icon_total"
              type="number"
              value={order
                .reduce(function (total, currentValue) {
                  return total + currentValue.price * currentValue.quantity;
                }, 0)
                .toFixed(2)}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-action modal-close waves-effect btn-flat btn-small"
        >
          Cancel
        </a>
        {validName && validPhone && (
          <a
            href="/"
            className="modal-action modal-close waves-effect btn-flat btn-small"
            onClick={() => resetItem()}
          >
            Complete
          </a>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
