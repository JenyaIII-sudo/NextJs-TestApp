import React, { useState, useEffect } from "react";
import Axios from "axios";
import Layout from "../components/Layout";

import Prices from "../components/Prices";

const Index = () => {
  const [state, setState] = useState();
  const getCoins = async () => {
    const response = await Axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    setState(response.data.bpi);
  };

  useEffect(() => {
    getCoins();
  }, []);
  console.log(state);

  return (
    <Layout>
      <div>
        <h1>Welcome to BitzPrice</h1>
        <p>Check current Bitcoin rate</p>
        <Prices state={state} />
      </div>
    </Layout>
  );
};

export default Index;
