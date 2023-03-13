import { BingSearchResult } from "../../bing/hooks/search";
import WebPageResult from "../WebPageResult";

interface SearchResultListProps {
  result: BingSearchResult | null;
}

const SearchResultList = (props: SearchResultListProps) => {
  const { result } = props;

  // ASSEMBLE A WebPageResult (IF ANY) LIST
  const WebPages = () => {
    if (result && result.webPages) {
      const { webPages } = result;

      return (
        <>
          {webPages.value.map((item) => (
            <WebPageResult result={item} key={item.id} />
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
