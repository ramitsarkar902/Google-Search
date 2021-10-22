import { useContext, useState, createContext } from "react";
import axios from "axios";
const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "b077eb11e1msh6f528d33fabb631p13ed7bjsnef4fdee0aff3",
      },
    });

    const data = await res.json();

    setResults(data);
    setLoading(false);
  };
  return (
    <ResultContext.Provider
      value={{ getResults, results, setSearchTerm, searchTerm, loading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
