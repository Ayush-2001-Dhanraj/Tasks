import styles from "./faq.module.css";

import SearchBar, { SearchColor } from "../../components/searchBar";

export default function FAQ() {
  return (
    <div className={styles.FAQ}>
      <div className={styles.searchContainer}>
        <p>Hello! How can we help??</p>
        <SearchBar fullWidth color={SearchColor.WHITE} />
      </div>
    </div>
  );
}
