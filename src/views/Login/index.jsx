import React, { useState, useEffect } from 'react';

function Family() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });
  
    return (
      <div>
        <p>登陆页面</p>
        <button onClick={() => setCount(count + 1)}>
          登陆
        </button>
      </div>
    );
  }
  
  export default React.memo(Family)