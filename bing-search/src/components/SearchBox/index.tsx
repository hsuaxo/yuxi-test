import { ChangeEvent, KeyboardEvent, useState } from "react";
import logo from "../../assets/img/bing.svg";
import "./styles.scss";

interface SearchBoxProps {
  onSearch(text: string): void;
  text?: string;
  loading?: boolean;
}

const SearchBox = (props: SearchBoxProps) => {
  const [text, setText] = useState(props.text!);
  const { onSearch, loading } = props;

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

  const Logo = <img src={logo} className="w-4" alt="Bing Logo"></img>;

  const Spinner = (
    <i className="fa-solid fa-spinner fa-spin text-blue-800 fa-xl"></i>
  );

  return (
    <div className="search-box border flex items-center shadow-md bg-white rounded-lg p-2 px-3">
      <i className="fa-solid fa-magnifying-glass fa-lg text-blue-800 mr-2.5"></i>
      <input
        type="text"
        value={text}
        className="grow text-lg focus:outline-none"
        placeholder="Ask me anything..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {loading ? Spinner : Logo}
    </div>
  );
};

export default SearchBox;
