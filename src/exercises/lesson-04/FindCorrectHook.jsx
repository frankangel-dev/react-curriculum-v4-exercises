import { useRef } from 'react';

export default function FindCorrectHook() {
  const initialCount = 0;
  const clickCountRef = useRef(initialCount);
  const buttonTextRef = useRef(null);

  function handleClick() {
    clickCountRef.current += 1;

    buttonTextRef.current.textContent = `${clickCountRef.current} Clicks`;
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button ref={buttonTextRef} onClick={handleClick}>
        {initialCount} Clicks
      </button>
    </div>
  );
}
