import { useEffect, useState } from "react";
// import axios from "axios";
import { fetchApi } from "./fetchApi";

export const useFetch = (endPoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Add token if it exists in localStorage
        // const token = localStorage.getItem("token");
        // const headers = token ? { Authorization: `Bearer ${token}` } : {};

        // const res = await axios.get(endPoint, { headers });
        
        const res = await fetchApi.get(endPoint,{ headers }
        )
        setData(res.data.data);
      } catch (err) {
        setError(err.res ? err.res.data.message : "Error loading data");
      }
      setLoading(false);
    };
    fetchData();
  }, [endPoint]);
  return { data, loading, err };
};