import React, { useState, useEffect } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = 'Home Page';
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the Home page of your website.</p>

      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default Home;
