import React ,{memo, useEffect,useState}from 'react';
import { Statistic, Row, Col } from 'antd';

import * as echarts from 'echarts'
import "./index.less";
import * as Api from "services/index.js";


const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK


 function Home (props) {

    useEffect(()=>{
        queryUser();
    },[])
    
    const onFinish=()=> {
        console.log('finished!');
      }
      
    const onChange=(val)=> {
        if (4.95 * 1000 < val && val < 5 * 1000) {
          console.log('changed!');
        }
      }
    const  queryUser=async()=> {
        const res=await Api.get('/by-api/bd/fam/list',{type:'1',userId:'111'})
        console.log('res',res);   
    }
    
        return (
            <div className="home-pages">
               <Row gutter={16}>
                    <Col span={12}>
                    <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
                    </Col>
                    <Col span={12}>
                    <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
                    </Col>
                    <Col span={24} style={{ marginTop: 32 }}>
                    <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
                    </Col>
                    <Col span={12}>
                    <Countdown title="Countdown" value={Date.now() + 10 * 1000} onChange={onChange} />
                    </Col>
                </Row>
            </div>
        )
}

export default memo(Home)