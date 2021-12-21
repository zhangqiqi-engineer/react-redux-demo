import Login from "../views/Login";
import Home from "../views/Home";
import Family from "../views/Family";
import NoFound from "../views/NoFound";
import FriendStatus from "../views/FriendStatus";
import Welcome from "../views/Welcome";
import { SmileOutlined, CrownOutlined, TabletOutlined,AlignLeftOutlined,SnippetsOutlined } from '@ant-design/icons';

// 用于menu导航的展示
export const mainRoutersMenu=[
    {
        path:'/',
        component:Home,
        exact:true,
        isShow:true,
        title:'首页',  
        icon:<SmileOutlined/>
    },
    {
        path:'/detial',
        component:Family, 
        exact:true,
        isShow:true,
        title:'功能1', 
        icon:<CrownOutlined/>
    },
    {
        path:'/friendStatus',
        component:FriendStatus, 
        exact:true,
        isShow:true,
        title:'功能2', 
        icon:<TabletOutlined/>
    },
    {
        path:'/admin',
        component:FriendStatus, 
        exact:true,
        isShow:true,
        title:'功能3', 
        icon:<AlignLeftOutlined />,
        routes: [
            {
              path: '/sub-page1',
              title: '一级页面',
              icon: <SnippetsOutlined />,
              component: Welcome,
            },
            {
              path: '/sub-page2',
              title: '二级页面',
              icon: <SnippetsOutlined />,
              component: Welcome,
            },
          ],
    },
    {
        path:'/404',
        component:NoFound
    },
];
export const mainRouters=[
    {
        path:'/',
        component:Home,
        exact:true,
        isShow:true,
        title:'首页',  
        icon:<SmileOutlined/>
    },
    {
        path:'/detial',
        component:Family, 
        exact:true,
        isShow:true,
        title:'功能1', 
        icon:<CrownOutlined/>
    },
    {
        path:'/friendStatus',
        component:FriendStatus, 
        exact:true,
        isShow:true,
        title:'功能2', 
        icon:<TabletOutlined/>
    },
    {
        path: '/sub-page1',
        component:Welcome, 
        exact:true,
        isShow:true,
        title:'一级页面', 
        icon:<TabletOutlined/>
    },
    {
        path: '/sub-page2',
        component:Welcome, 
        exact:true,
        isShow:true,
        title:'二级页面', 
        icon:<TabletOutlined/>
    },
    {
        path:'/404',
        component:NoFound
    },
];

export const adminRouters=[
    {
        path:'/login',
        component:Login,
        isShow:false,
        title:'登陆',     
    },
    
]