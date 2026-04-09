// src/exercises/lesson-03/BugMutatedState.jsx

import { useState } from 'react';
export default function BugMutatedState() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// I fixed this by using the setCount function instead of trying to change the count variable
// directly. React needs us to use the setter so it knows the state changed and can
// re-render the page with the new number.
