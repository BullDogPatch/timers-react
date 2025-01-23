import { useState, useEffect } from 'react';

const DirtyTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Dirty timer component');
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return <p>{count}</p>;
};

export default DirtyTimer;
