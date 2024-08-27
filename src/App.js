/**
 * Create a unordered list using React that lists the top 5 exchanges by volume of currency type Bitcoin (BTC) in
 * descending order given the api endpoint:
 *   /volume.json
 *
 * Work the way you are most comfortable and treat this as an everyday task. You are allowed to ask questions,
 * look up documentation and search for answers.
 */

import React from "react";
import TopBitcoinExchanges from "./components/TopBitcoinExchanges/TopBitcoinExchanges";
import "./styles.css";

const App = () => {
  return (
   <TopBitcoinExchanges />
  );
};

export default App;
