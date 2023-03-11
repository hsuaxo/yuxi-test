import { BingWebPageResult } from "../../bing/hooks/search";

interface WebPageResultProps {
  result: BingWebPageResult;
}

const WebPageResult = (props: WebPageResultProps) => {
  const { result } = props;

  return (
    <div className="flex items-center w-3/5 mb-3">
      <div className="w-4/5">
        <a
          className="text-lg text-blue-800 font-medium hover:underline inline-block"
          href={result.url}
          target="_blank"
        >
          {result.name}
        </a>
        <span className="text-green-700 block">{result.displayUrl}</span>
        <span className="text-gray-500 text-sm block">{result.snippet}</span>
      </div>
      {result.thumbnailUrl && (
        <div>
          <img
            className="rounded-lg w-28 ml-2"
            src={result.thumbnailUrl}
            alt="Thumbnail"
          />
        </div>
      )}
    </div>
  );
};

export default WebPageResult;
