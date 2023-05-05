import { useState, useEffect, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styles from 'styles/EditPost.module.scss';
import { DataContext } from 'context/DataContext';
import { format } from 'date-fns';
import api from 'api/posts';

export const EditPost = () => {
  const [editPostTitle, setEditPostTitle] = useState('');
  const [editPostBody, setEditPostBody] = useState('');
  const { posts, setPosts } = useContext(DataContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'd MMMM yyyy p');
    const updatedPost = { id, title: editPostTitle, datetime, body: editPostBody };

    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map((post) => (post.id === id ? { ...response.data } : post)));
      setEditPostTitle('');
      setEditPostBody('');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (post) {
      setEditPostTitle(post.title);
      setEditPostBody(post.body);
    }
  }, [post, setEditPostTitle, setEditPostBody]);

  return (
    <main>
      {post && (
        <>
          <h2>Edit Post</h2>
          <form onSubmit={(e) => e.preventDefault()} className={styles.editPostForm}>
            <label htmlFor="postTitle">Title:</label>
            <input id="postTitle" type="text" required value={editPostTitle} onChange={(e) => setEditPostTitle(e.target.value)} />

            <label htmlFor="postBody">Post: </label>
            <textarea id="postBody" required value={editPostBody} onChange={(e) => setEditPostBody(e.target.value)} />
            <button type="submit" onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      )}
      {!post && (
        <>
          <h2>Post not found</h2>
          <p>
            <Link to="/">Go to Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
};
