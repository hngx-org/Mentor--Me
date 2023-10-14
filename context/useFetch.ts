import { useEffect, useState } from "react";

interface ReqOptions {
  url: string | undefined;
  method: "GET" | "POST";
  body?: string | Record<string, any>;
  // headers?: Record<string, string>;
}

export default function useFetch<T>(options: ReqOptions) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(options.url!, {
          method: options.method,
          body: options.body && JSON.stringify(options.body),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const result: T = await response.json();
        setData(result);
        // console.log(result);
      } catch (error) {
        console.log(error);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
}
