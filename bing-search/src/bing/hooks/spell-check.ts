import { useState } from "react";
import client from "../client";

interface BingSpellCheckResult {
  correctionType: string;
  flaggedTokens: [
    {
      offset: number;
      token: string;
      type: string;
      suggestions: [{ suggestion: string; score: number }];
    }
  ];
}

interface BingSpellCheckHook {
  check(text: string): Promise<string | undefined>;
  loading: boolean;
  error: any;
}

export default (): BingSpellCheckHook => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const check = async (text: string): Promise<string | undefined> => {
    setLoading(true);
    try {
      const { data } = await client.get<BingSpellCheckResult>(
        `spellcheck?text=${text}`,
        {
          params: { mode: "spell" },
        }
      );
      if (data.flaggedTokens.length) {
        data.flaggedTokens.forEach((flaggedToken) => {
          const { token, suggestions } = flaggedToken;
          if (flaggedToken.suggestions.length) {
            text = text.replace(token, suggestions[0].suggestion);
          }
        });
        return text;
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { check, loading, error };
};
