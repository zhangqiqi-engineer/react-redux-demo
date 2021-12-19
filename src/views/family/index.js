import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Family(props) {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked 111{count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={()=>{props.dispatch({type:"Read_All",})}}>已读</button>
    </div>
  );
}

export default connect(state=>state)(Family)