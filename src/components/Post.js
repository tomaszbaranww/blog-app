import { Link } from 'react-router-dom';
import styles from 'styles/Post.module.scss';

export const Post = ({ post }) => {
  return (
    <article className={styles.post}>
      <Link to={`/blog-app/post/${post.id}`}>
        <h2>{post.title}</h2>
        <p className={styles.postDate}>{post.datetime}</p>
      </Link>
      <p className={styles.postBody}>{post.body.length <= 90 ? post.body : `${post.body.slice(0, 90)}...`}</p>
    </article>
  );
};
