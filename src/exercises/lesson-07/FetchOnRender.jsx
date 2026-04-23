import './Lesson07Styles.css';
import { useEffect, useState } from 'react';
import { getPosts } from './api.js';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      setError(null);

      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <p className="loading">Loading posts...</p>;

  if (error) return <p className="error">{error}</p>;

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        <ul>
          {posts.map(({ id, title, body }) => {
            return (
              <li key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
