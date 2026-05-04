import './Lesson07Styles.css';
import { getSinglePost } from './api.js';
import { useState } from 'react';

export default function FetchOnClick() {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getSinglePost(1);
      setPost(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={fetchPost}>
        Get post
      </button>
      {error && <p className="error">{error}</p>}
      <div className="content">
        {loading
          ? 'Loading...'
          : post && (
              <ul>
                <li>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </li>
              </ul>
            )}
      </div>
    </div>
  );
}
