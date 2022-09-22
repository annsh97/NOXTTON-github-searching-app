import { useState, useEffect } from "react";
import Search from "../components/Search";
import { searchRepos } from "../services/githubService";
import RepoList from "../components/RepoList";

import styles from "./index.module.scss";

const Index = (props) => {
  console.log(props);
  const [searchText, setSearchText] = useState(props.searchText);

  const [repos, setRepos] = useState(props.repos);
  const [loading, setLoading] = useState(false);

  const onSearchTextChange = (text) => {
    setSearchText(text);
    if (text) {
      loadRepos(text);
    }
  };

  const loadRepos = async (searchText) => {
    setLoading(true);
    const res = await searchRepos(searchText);
    if (res && res.data) {
      setLoading(false);
      setRepos(res.data.items);
    }
  };

  return (
    <div className={styles.container}>
      <Search searchText={searchText} onSearchTextChange={onSearchTextChange} />
      <RepoList loading={loading} repos={repos} />
    </div>
  );
};

export default Index;
