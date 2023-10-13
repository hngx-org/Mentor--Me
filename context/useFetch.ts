import { useEffect, useState } from "react";

interface ReqOptions {
  url: string | undefined;
  method: "GET" | "POST";
  body?: string | Record<string, any>;
  // headers?: HeadersInit; this is giving a typescript, no time
}

export default async function useFetch<T>(options: ReqOptions) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setErrorMsg(null);

        const response = await fetch(options.url!, {
          method: options.method,
          // headers: options.headers,
          body: options.body && JSON.stringify(options.body),
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const responseData: T = await response.json(); // Generic used because response isn't typed yet
        setData(responseData);
      } catch (err) {
        setErrorMsg("An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [options.url, options.method, options.body]);

  return {
    data,
    loading,
    errorMsg,
  };
}
