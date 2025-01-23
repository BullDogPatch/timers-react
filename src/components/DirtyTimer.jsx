import { useState, useEffect } from 'react';

const DirtyTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Dirty timer component');
    setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }, []);

  return <p>{count}</p>;
};

export default DirtyTimer;
