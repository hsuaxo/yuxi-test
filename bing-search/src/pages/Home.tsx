import { useNavigate } from "react-router-dom";
import SearchBox from "../components/SearchBox";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    // REDIRECT QUERY TO SEARCH PAGE
    navigate(`/search?q=${query}`);
  };

  return (
    <div className="flex justify-center relative w-screen h-screen">
      <div className="absolute mt-40">
        <span className="text-2xl text-blue-800 font-medium block ml-1 mb-2">
          Bing Search API
        </span>
        <SearchBox onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default HomePage;
