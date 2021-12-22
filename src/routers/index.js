import Login from "../views/Login";
import Home from "../views/Home";
import Family from "../views/Family";
import NoFound from "../views/NoFound";
import FriendStatus from "../views/FriendStatus";
import Welcome from "../views/Welcome";
import { SmileOutlined, CrownOutlined, TabletOutlined,AlignLeftOutlined,SnippetsOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';

// 用于menu导航的展示
export const mainRoutersMenu=[
    {
        path:'/',
        element:<Home/>,
        exact:true,
        isShow:true,
        title:'首页',  
        icon:<SmileOutlined/>
    },
    {
        path:'detial',
        element:<Family/>, 
        exact:true,
        isShow:true,
        title:'功能1', 
        icon:<CrownOutlined/>
    },
    {
        path:'friendStatus',
        element:<FriendStatus/>, 
        exact:true,
        isShow:true,
        title:'功能2', 
        icon:<TabletOutlined/>
    },
    {
        path:'admin',
        element:<Outlet/>,
        exact:true,
        isShow:true,
        title:'功能3', 
        icon:<AlignLeftOutlined />,
        children: [
            {
              path: 'sub-page1',
              title: '一级页面',
              icon: <SnippetsOutlined />,
              element: <Welcome/>,
              exact:true,
              isShow:true,
                
            }, 
            {
                path: 'sub-page2',
                title: '二级页面',
                icon: <SnippetsOutlined />,
                element: <Welcome/>,
                exact:true,
                isShow:true,
              },   
          ],
    },
    {
        path:'404',
        element:<NoFound/>
    },
];
export const mainRouters=[
    {
        path:'/',
        element:<Home/>,
        exact:true,
        isShow:true,
        title:'首页',  
        icon:<SmileOutlined/>
    },
    {
        path:'detial',
        element:<Family/>, 
        exact:true,
        isShow:true,
        title:'功能1', 
        icon:<CrownOutlined/>
    },
    {
        path:'friendStatus',
        element:<FriendStatus/>, 
        exact:true,
        isShow:true,
        title:'功能2', 
        icon:<TabletOutlined/>
    },
    {
        path: 'sub-page1',
        element:<Welcome/>, 
        exact:true,
        isShow:true,
        title:'一级页面', 
        icon:<TabletOutlined/>
    },
    {
        path: 'sub-page2',
        element:<Welcome/>, 
        exact:true,
        isShow:true,
        title:'二级页面', 
        icon:<TabletOutlined/>
    },
    {
        path:'404',
        element:<NoFound/>
    },
];

export const adminRouters=[
    {
        path:'/login',
        element:<Login/>,
        isShow:false,
        title:'登陆',     
    },
    
]