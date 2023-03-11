import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useBingSearch } from "../bing";
import SearchBox from "../components/SearchBox";
import SearchResultList from "../components/SearchResultList";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { search, loading, result, error } = useBingSearch();

  const handleSearch = (query: string) => {
    search(query);
  };

  useEffect(() => {
    search("microsoft");
  }, []);

  return (
    <>
      <div className="border-b sticky top-0 p-3">
        <SearchBox onSearch={handleSearch} loading={loading} />
      </div>
      <SearchResultList result={result} />
    </>
  );
};

export default SearchPage;
