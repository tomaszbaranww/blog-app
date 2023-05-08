import { useParams, Link, useNavigate } from 'react-router-dom';
import styles from 'styles/PostPage.module.scss';
import { useContext } from 'react';
import { DataContext } from 'context/DataContext';
import api from 'api/posts';

export const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      navigate('/blog-app');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className={styles.postPage}>
      <article className={styles.post}>
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className={styles.postDate}>{post.datetime}</p>
            <p className={styles.postBody}>{post.body}</p>
            <div className={styles.buttons}>
              <Link to={`/blog-app/edit/${post.id}`}>
                <button className={styles.editButton}>Edit Post</button>
              </Link>
              <button onClick={() => handleDelete(post.id)}>Delete Post</button>
            </div>
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>
              <Link to="/blog-app">Go to Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};
