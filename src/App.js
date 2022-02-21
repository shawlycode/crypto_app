import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./Coin";

function App() {
  const [coins, SetCoins] = useState([]);
  const [search, SetSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        SetCoins(res.data);
        // console.log(res.data)
      })
      .catch((error) => console.log(error));
  }, []);
  const handleChange = (e) => {
    SetSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h2 className="coin-text">Search for a Currency</h2>
        <form className="form">
          <input
            className="coin-input"
            type="text"
            placeholder="enter your currency here"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            market={coin.total_volume}
            volume={coin.market_cap}
          />
        );
      })}
    </div>
  );
}

export default App;
