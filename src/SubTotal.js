import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
function SubTotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal (0 items):
              <strong>0</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" name="" value="" />
              This order Contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button type="">Proceed to checkout</button>
    </div>
  );
}

export default SubTotal;
