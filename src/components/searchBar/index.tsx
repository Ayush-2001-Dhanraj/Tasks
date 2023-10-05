import { AiOutlineSearch } from "react-icons/ai";
import styles from "./searchBar.module.css";
import getURIFromIcon from "../../utility/getURIFromIcon";

export enum SearchColor {
  BLACK = "Black",
  WHITE = "White",
}

interface SearchBarInterface {
  fullWidth?: boolean;
  placeholder?: string;
  color?: SearchColor;
}

export default function SearchBar({
  fullWidth,
  placeholder,
  color = SearchColor.BLACK,
}: SearchBarInterface) {
  return (
    <input
      type="search"
      className={`${styles.searchInput} ${fullWidth ? styles.fullWidth : ""} ${
        color === SearchColor.WHITE ? styles.onBlack : ""
      }`}
      placeholder={placeholder || "Search..."}
      style={{ backgroundImage: getURIFromIcon(<AiOutlineSearch />) }}
    />
  );
}
