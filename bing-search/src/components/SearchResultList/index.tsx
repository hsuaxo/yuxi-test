import { BingSearchResult } from "../../bing/hooks/search";
import WebPageResult from "../WebPageResult";

interface SearchResultListProps {
  result: BingSearchResult | null;
}

const SearchResultList = (props: SearchResultListProps) => {
  const { result } = props;

  const WebPages = () => {
    if (result && result.webPages) {
      const { webPages } = result;
      return (
        <>
          {webPages.value.map((item) => (
            <WebPageResult result={item} />
          ))}
        </>
      );
    }
    return <></>;
  };

  return (
    <div className="py-2 px-3.5">
      <WebPages />
    </div>
  );
};

export default SearchResultList;