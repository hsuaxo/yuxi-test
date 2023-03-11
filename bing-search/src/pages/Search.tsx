import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useBingSearch } from "../bing";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { search, loading, result, error } = useBingSearch();

  useEffect(() => {
    search("microsoft");
  }, []);

  return <></>;
};

export default SearchPage;
