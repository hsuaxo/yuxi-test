import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useBingSearch } from "../bing";
import SearchBox from "../components/SearchBox";
import SearchResultList from "../components/SearchResultList";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const { search, loading, result, error } = useBingSearch();

  const handleSearch = (query: string) => {
    search(query);
  };

  useEffect(() => {
    const query = searchParams.get("q");
    if (query) search(query);
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
          loading={loading}
        />
      </div>
      <SearchResultList result={result} />
    </>
  );
};

export default SearchPage;
