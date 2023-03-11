import { useNavigate } from "react-router-dom";
import SearchBox from "../components/SearchBox";

const HomePage = () => {
  const navigate = useNavigate();

  const search = (query: string) => {
    navigate(`/search?q=${query}`);
  };

  return (
    <div className="flex justify-center relative w-screen h-screen">
      <div className="absolute mt-40">
        <SearchBox onSearch={search} />
      </div>
    </div>
  );
};

export default HomePage;
