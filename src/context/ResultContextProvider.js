import { useContext, useState, createContext } from "react";
import axios from "axios";
const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setLoading(true);

    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: `${baseUrl}${type}`,
      headers: {
        "x-user-agent": "desktop",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "b077eb11e1msh6f528d33fabb631p13ed7bjsnef4fdee0aff3",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setResults(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    setLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, setSearchTerm, loading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
