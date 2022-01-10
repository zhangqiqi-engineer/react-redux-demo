import React,{ useState, useEffect } from 'react';
import {connect} from 'react-redux';
import { PlusOutlined } from '@ant-design/icons';
import UserModal from './userModal.jsx';
import { Table,Button,Divider } from 'antd';
import * as Api from "services/index.js";

const genderList ={"man":"男","woman":"女","other":"其他"};
 function UserManagement(props) {
    const [data, setData] = useState([]);
    const [visible,setVisible] = useState(false);
    const [isNew,setIsNew] = useState(false);
    const [record,setRecord] = useState({});


    useEffect(() => {
        queryList();
      },[]);

    const queryList = async()=>{
        const res = await Api.post('/api/employee/list',{});
        setData(res)

      }

    const deletehandle=() => {

    }
    const edit=()=>{
      console.log('edit')

      setVisible(true);
      setRecord(record);
      setIsNew(false);
    }
    const add=()=>{
      console.log('!!!')
      setVisible(true);
      setRecord({});
      setIsNew(true);
    }
    const columns = [
        {
          title: '用户名',
          dataIndex: 'user_name',
          key: 'user_name',
        },
        {
          title: '性别',
          dataIndex: 'gender',
          key: 'gender',
          render: text => <>{genderList[text]}</>,
        },
        {
          title: '邮箱',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: '电话',
          key: 'phone',
          dataIndex: 'phone',
        },
        {
            title: '操作',
            key: 'id',
            dataIndex: 'id',
            render: (text,record) => <>
            <Button type="link" onClick={()=>edit(record)}>编辑</Button>
            <Divider type="vertical" />
            <Button type="link" onClick={()=>deletehandle(record.id)}>删除</Button>
            </>,
        },
      ];

        return (
            <div>
               <div id="div1">
         
                    <Button type="primary" className='mb_10' onClick={()=>add()}><PlusOutlined />新增</Button>
                    <Table columns={columns} dataSource={data} />
                    <UserModal visible={visible} onClose={() => setVisible(false)} detial={record} isNew={isNew}>
                    </UserModal>
           
                </div> 
            </div>
        )
    
}

export default connect(state=>state.product)(UserManagement);