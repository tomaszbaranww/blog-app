import styles from 'styles/SearchPost.module.scss';
import { useContext } from 'react';
import { DataContext } from 'context/DataContext';

export const SearchPost = () => {
  const { search, setSearch } = useContext(DataContext);

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.searchForm}>
      <label htmlFor="search">Search Posts</label>
      <input id="search" type="text" placeholder="Search Posts" value={search} onChange={(e) => setSearch(e.target.value)} />
    </form>
  );
};
