import { useNavigate } from "react-router-dom";
import SearchBox from "../components/SearchBox";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/search?q=${query}`);
  };

  return (
    <div className="flex justify-center relative w-screen h-screen">
      <div className="absolute mt-40">
        <SearchBox onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default HomePage;
