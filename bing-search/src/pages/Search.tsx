import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useBingSearch, useBingSpellCheck } from "../bing";
import SearchBox from "../components/SearchBox";
import SearchResultList from "../components/SearchResultList";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [suggestedQuery, setSuggestedQuery] = useState("");
  const bingSearch = useBingSearch();
  const bingSpellCheck = useBingSpellCheck();

  const handleSearch = async (text: string) => {
    const suggestion = await bingSpellCheck.check(text);
    if (suggestion) {
      setSuggestedQuery(suggestion);
      bingSearch.search(suggestion);
    } else {
      setSuggestedQuery("");
      bingSearch.search(text);
    }
    setQuery(text);
  };

  const searchWithRawQuery = () => {
    bingSearch.search(query);
    setSuggestedQuery("");
  };

  useEffect(() => {
    if (query) bingSearch.search(query);
  }, []);

  return (
    <>
      <div className="border-b bg-white sticky top-0 p-3">
        <span className="text-2xl text-blue-800 font-medium leading-none block ml-1 mb-2.5">
          Bing Search API
        </span>
        <SearchBox
          text={searchParams.get("q") || ""}
          onSearch={handleSearch}
          loading={bingSpellCheck.loading || bingSearch.loading}
        />
        {suggestedQuery && (
          <div className="text-sm px-1 mt-3">
            Showing results for&nbsp;
            <span className="font-medium">{suggestedQuery}</span>. Search
            for&nbsp;
            <span
              className="text-blue-800 font-medium cursor-pointer hover:underline"
              onClick={searchWithRawQuery}
            >
              {query}
            </span>
            ?
          </div>
        )}
      </div>
      <SearchResultList result={bingSearch.result} />
    </>
  );
};

export default SearchPage;
