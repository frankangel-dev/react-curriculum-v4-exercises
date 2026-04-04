// src/exercises/lesson-03/BugProps.jsx

import { useState } from 'react';

export default function BugProps({ name = 'friend' }) {
  const [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// I fixed this by moving the message into React state using the useState hook.
// Previously, the message was a regular variable and by using state, React is notified
// when the message changes via setMessage, triggering a re-render to update the UI with the new greeting.
