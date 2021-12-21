import React,{memo,useState}from 'react';
import {FullscreenExitOutlined,FullscreenOutlined} from '@ant-design/icons';
import {exitFullScreen,requestFullScreen} from '../../utils/index';

const Fullscreen=()=>{
    const [isFull,setIsFull] = useState(false);
    const toggleFullScreen =()=>{
        !isFull ? requestFullScreen():exitFullScreen();
        setIsFull(!isFull);
    };

    return(
        <>
            {
                isFull?<FullscreenExitOutlined style={{fontSize:20}} onClick={toggleFullScreen}/>:
                <FullscreenOutlined style={{fontSize:20}} onClick={toggleFullScreen}/>
            }
        </>
    )
}
export default memo(Fullscreen);
