import { ChangeEvent, KeyboardEvent, useState } from "react";
import "./styles.scss";

interface SearchBoxProps {
  onSearch(text: string): void;
}

const SearchBox = (props: SearchBoxProps) => {
  const [text, setText] = useState("");
  const { onSearch } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setText(value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (key.toUpperCase() === "ENTER") {
      onSearch(text);
    }
  };

  return (
    <div className="search-box border flex items-center shadow-lg bg-white rounded-lg p-2 px-3">
      <i className="fa-solid fa-magnifying-glass fa-lg text-indigo-500 mr-2.5"></i>
      <input
        type="text"
        value={text}
        className="grow text-lg focus:outline-none"
        placeholder="Ask me anything..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBox;
