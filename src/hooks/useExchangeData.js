import { useState, useEffect } from "react";
import volumeData from "../../public/volume.json"; // importing the data from the public folder

export const useExchangeData = (cryptoType = "BTC", limit = 5) => {
  // set up state variables
  const [exchanges, setExchanges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const processExchangeData = () => {
      try {
        setIsLoading(true);

        // filter and sort the data
        const filteredData = volumeData
          .filter((exchange) => exchange.unit === cryptoType)
          .sort((a, b) => b.volume - a.volume)
          .slice(0, limit);

        // shufle the filtered data to mmake it un ordered (it refreshes on every page reload)
        const shuffledData = [...filteredData].sort(() => Math.random() - 0.5);

        setExchanges(shuffledData);
      } catch (err) {
        setError("Error processing exchange data");
      } finally {
        setIsLoading(false);
      }
    };

    processExchangeData();
  }, [cryptoType, limit]);

  return { exchanges, isLoading, error };
};

// 1. It takes in a crypto type (default is BTC) and a limit (default is 5 since we are working with top 5).
// 2. It sets up some state variables to keep track of the exchanges, loading state, and any errors.
// 3. Then it's got this useEffect hook that runs whenever the crypto type or limit changes.
// 4. Inside the useEffect, it filters the volume data based on the crypto type, sorts it by volume (highest first), and limits the results.
// 5. As required in the test, it shuffles the filtered data randomly to make it unordered.
// 6. If anything goes wrong, it'll set an error message.
// 7. Finally, it returns an object with the exchanges, loading state, and any errors.
