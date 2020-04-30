import React, { useState } from "react";

const Prices = ({ state }) => {
  const [coins, setCoins] = useState({
    currency: "USD",
  });

  console.log("PROP", state);

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          Bitcoin rate for{" "}
          {state ? state[coins.currency].description : "Loading..."} :
          <span className="badge badge-primary">
            {state ? state[coins.currency].code : "Loading..."}
          </span>
          <strong>{state ? state[coins.currency].rate : "Loading..."}</strong>
        </li>
      </ul>
      <br />
      <select
        onChange={(e) => setCoins({ currency: e.target.value })}
        className="form-control"
      >
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export default Prices;
