import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

/*
When Strict Mode is used, React mounts the component,
unmounts it, and then mounts it again. I needed to add a cleanup function to
return 'clearInterval(timer)', or else first interval would keep running even
after the component "restarts." Without the cleanup, it ends up with two
intervals running at the same time, making the count jump by 2 every second
instead of 1. Adding the cleanup makes sure the old timer is killed before
starting a new one.
 */
