import React from 'react';
import {connect} from 'react-redux' 

 function FriendStatus(props) {
    console.log("props",props.isAllRead)

        return (
            <div>
               <div id="div1">
                    <p>初始化的内容</p>
                    <p>初始化的内容</p>
                </div> 
            </div>
        )
    
}

export default connect(state=>state)(FriendStatus);