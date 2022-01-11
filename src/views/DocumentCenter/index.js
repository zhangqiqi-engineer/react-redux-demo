import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown'; //将markdown转化为react
import remarkGfm from 'remark-gfm' // 扩展markdown使用，让你可以在markdown中使用表格等能被编译
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter' //react-syntax-highlighter 代码高亮，可以设置样式
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
const components = {
    code({ node, inline, className, children, ...props }) {
        /*
        	node:
		*/
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter style={ dark } language={ match[1] } PreTag="div" children={ String(children).replace(/\n$/, '') } { ...props } />
        ) : (
            <code className={ className } { ...props } />
        )
    },
    h3(props) { 
        console.log(props)
        return <h3 style={ { color: 'red' } } { ...props } /> 
}

}

function DocumentCenter(props) {
  const [count, setCount] = useState(0);
  const markdown = `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  12. ##### <font color=Red>finalCheckResult、finalTagHit、riskLevel相关说明</font>

  Here is some JavaScript code:
### Hell

~~~js
console.log('It works!')\nHello
~~~
  
  
  `




  return (
    <div>
       <ReactMarkdown components={ components } children={markdown} remarkPlugins={[remarkGfm]} />
    </div>
  );
}

export default connect(state=>state)(DocumentCenter)