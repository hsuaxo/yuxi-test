import { useState } from "react";
import client from "../client";

export interface BingSearchResult {
  webPages: {
    someResultsRemoved: boolean;
    totalEstimatedMatches: number;
    value: BingWebPageResult[];
  };
}

export interface BingWebPageResult {
  id: string;
  name: string;
  snippet: string;
  language: string;
  thumbnailUrl: string;
  displayUrl: string;
  url: string;
}

interface BingSearchHook {
  search(query: string): void;
  loading: boolean;
  result: BingSearchResult | null;
  error: any;
}

export default (): BingSearchHook => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BingSearchResult | null>(null);
  const [error, setError] = useState<any>(null);

  const search = async (query: string) => {
    setLoading(true);
    try {
      const { data } = await client.get(`search?q=${query}`, {
        params: {
          count: 25,
        },
      });
      setResult(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { search, loading, result, error };
};
