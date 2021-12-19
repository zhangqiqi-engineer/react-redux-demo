import React from 'react';
import * as echarts from 'echarts'
import "./index.less";
import * as Api from "../../services/index.js";



export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.queryUser();
    }
    async queryUser() {
        const res=await Api.get('/by-api/bd/fam/list',{type:'1',userId:'111'})
        console.log('res',res);   
    }
    
    render() {
        return (
            <div className="home-pages">
              这里是首页
            </div>
        )
    }
}
