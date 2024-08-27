import React from "react";
import { useExchangeData } from "../../hooks/useExchangeData";
import { formatVolume } from "../../utils/formatters";
import "./TopBitcoinExchanges.css";

const TopBitcoinExchanges = () => {
  const { exchanges, isLoading, error } = useExchangeData("BTC", 5);

  if (isLoading) return <div className="loading">Loading exchange data...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <section className="top-exchanges-container">
      <header className="top-exchanges-header">
        <div className="bitcoin-logo">₿</div>
        <h2 className="top-exchanges-title">
          Top 5 Bitcoin
          <span className="highlight">Exchanges</span>
          <small>by Volume</small>
        </h2>
      </header>
      <ul className="exchange-list">
        <li className="exchange-item">
          <span className="item-title">Name</span>
          <span className="item-title2">Volume</span>
          <span className="item-title3"> Unit</span>
        </li>
        {exchanges.map((exchange, index) => (
          <li key={exchange.name + index} className="exchange-item">
            <span className="exchange-name">{exchange.name}</span>
            <span className="exchange-volume">
              {formatVolume(exchange.volume)}
            </span>
            <span className="exchange-unit">{exchange.unit}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TopBitcoinExchanges;
