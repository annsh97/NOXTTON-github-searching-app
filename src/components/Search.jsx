import TextInput from "../components/shared/TextInput";

import styles from "./search.module.scss";

const Search = (props) => {
  const { searchText, onSearchTextChange } = props;

  return (
    <div className={styles.search}>
      <TextInput
        label="Repo Search"
        value={searchText}
        onChange={(value) => onSearchTextChange(value)}
        className={styles.searchInput}
      />
    </div>
  );
};

export default Search;
