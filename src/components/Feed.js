import { Post } from 'components/Post';

export const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};
