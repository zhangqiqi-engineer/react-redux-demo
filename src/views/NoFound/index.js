import React from 'react';
import { Result, Button } from 'antd';

function NoFound() {   
    return (
      <div>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary">Back Home</Button>}
        />
      </div>
    );
  }
  
  export default React.memo(NoFound)