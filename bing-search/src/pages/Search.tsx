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
    // GET SPELL CHECK SUGGESTIONS
    const suggestion = await bingSpellCheck.check(text);
    //
    if (suggestion) {
      // SEARCH FOR SUGGESTIONS INSTEAD
      setSuggestedQuery(suggestion);
      bingSearch.search(suggestion);
    } else {
      // IF NO SUGGESTIONS, SEARCH FOR RAW QUERY
      setSuggestedQuery("");
      bingSearch.search(text);
    }
    // SAVE RAW QUERY
    setQuery(text);
  };

  const searchWithRawQuery = () => {
    // SEARCH FOR RAW QUERY IN SPITE OF SUGGESTIONS
    bingSearch.search(query);
    setSuggestedQuery("");
  };

  useEffect(() => {
    // SEARCH FOR QUERY STRING TEXT
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
        {/* SHOW SUGGESTED QUERY (IF ANY) */}
        {suggestedQuery && (
          <div className="text-sm px-1 mt-3">
            Showing results for&nbsp;
            <span className="font-medium">{suggestedQuery}</span>. Search
            for&nbsp;
            {/* GIVE OPTION TO SEARCH FOR RAW QUERY ANYWAY */}
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
