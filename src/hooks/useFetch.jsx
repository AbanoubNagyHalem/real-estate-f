import { useEffect, useState } from "react";
import { fetchApi } from "./fetchApi";
import { getToken } from "./helpers";

export const useFetch = (endPoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Retrieve token from localStorage or another source
        const token = getToken();
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        // Make the request with headers
        const res = await fetchApi.get(endPoint, { headers });
        setData(res.data.data);
      } catch (err) {
        setError(err.response ? err.response.data.message : "Error loading data");
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [endPoint]);

  return { data, loading, err };
};
