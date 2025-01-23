import { useState, useEffect } from 'react';

const CleanTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Clean timer component');

    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      console.log('This log is clearing the timer and cleaning up');
      clearInterval(interval);
    };
  });

  return <p>{count}</p>;
};

export default CleanTimer;
