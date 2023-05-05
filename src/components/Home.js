import { Feed } from 'components/Feed';
import { useContext } from 'react';
import { DataContext } from 'context/DataContext';
import { SearchPost } from 'components/SearchPost';

export const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext);
  return (
    <>
      <SearchPost />
      <main>
        {isLoading && <p>Loading posts...</p>}
        {!isLoading && fetchError && <p>{fetchError}</p>}
        {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults} /> : <p>No posts to display.</p>)}
      </main>
    </>
  );
};
