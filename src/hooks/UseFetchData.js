import { useState, useEffect } from "react";
import axios from "axios";

function useFetchData(url, method = "GET", data = null, headers = null) {
    const [responseData, setResponseData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const config = {
                    method,
                    url,
                    headers,
                };

                // Include body only for POST, PUT, or PATCH requests
                if (method === "POST" || method === "PUT" || method === "PATCH") {
                    config.data = data;
                }

                const response = await axios(config);

                // Check if the response has data, and set it to state
                if (response && response.data) {
                    setResponseData(response.data);

                } else {
                    throw new Error("Empty response from server");
                }
            } catch (err) {
                // Handle any errors that happen during the request

                setError(err.message || "An error occurred");
            } finally {
                setLoading(false);  // Set loading to false after the request is finished
            }
        };

        if (url) {
            fetchData();
        }
    }, [url, method, data, headers]);

    return { data: responseData, loading, error };
}

export default useFetchData;