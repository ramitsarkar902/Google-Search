import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../context/ResultContextProvider";
import { Loading } from "./Loading";

export const Results = () => {
  const { results, loading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  if (loading) return <Loading />;

  switch (location.pathname) {
    case "/search":

    case "/images":

    case "/news":

    case "/videos":

    default:
      return "Error...";
  }
};
