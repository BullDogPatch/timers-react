import { useState, useEffect } from 'react';

const DirtyTimer = () => {
  console.log('Dirt component render');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Dirty timer effect');
    setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }, []);

  return <p>{count}</p>;
};

export default DirtyTimer;
