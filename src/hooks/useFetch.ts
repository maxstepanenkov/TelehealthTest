import { useMemo, useState } from "react";
import { fetchQuestions } from "../fetch-api";

export const useFetch = (url: string, method: string) => {
  const [questions, setQuestions] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useMemo(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetchQuestions({
          url,
          method,
        });
        setQuestions(() => [...response.data]);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    })();
  }, [url, method]);

  return [questions, loading, error];
};
