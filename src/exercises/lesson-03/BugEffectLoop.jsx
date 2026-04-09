//src/exercises/lesson-03/BugEffectLoop.jsx

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  return <p>Count: {count}</p>;
}

// Explanation:
// I used an empty dependency array [] so the effect only runs once when the component mounts.
// If I left it out, the setCount would trigger a re-render, which would run the effect again,
// creating an infinite loop. Also, using the functional update (prev => prev + 1) ensures
// I'm always working with the most recent state value without creating a dependency on the
// state variable itself.
