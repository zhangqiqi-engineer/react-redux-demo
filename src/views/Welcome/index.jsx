import React ,{memo,useState,useEffect}from 'react';
import E from 'wangeditor'

function Welcome() {   
  useEffect(()=>{
    const editor = new E('#div1')
    editor.config.height = 500
   
    editor.create()
    editor.config.onchange = function (newHtml) {
      console.log("change 之后最新的 html", newHtml);
    };
  },[])

    return (
      <div>
        <div id="div1"></div>
        
      </div>
    );
  }
  
  export default React.memo(Welcome)