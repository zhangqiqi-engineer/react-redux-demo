import Login from "views/Login";
import Home from "views/Home";
import Family from "views/Family";
import NoFound from "views/NoFound";
import UserManagement from "views/UserManagement";
import Welcome from "views/Welcome";
import Translate from "views/Translate";
import DocumentCenter from "views/DocumentCenter";
import FlowChart from "views/FlowChart";
import Register from "views/Register";
import { SmileOutlined, CrownOutlined, FileMarkdownOutlined,ApartmentOutlined,AlignLeftOutlined,TabletOutlined,SnippetsOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';

// 用于menu导航的展示
export const mainRoutersMenu=[
    {
        path:'/',
        isShow:true,
        title:'首页',  
        icon:<SmileOutlined/>
    },
    {
        path:'roleManagement',
        isShow:true,
        title:'角色管理', 
        icon:<CrownOutlined/>
    },
    {
        path:'userManagement',
        isShow:true,
        title:'用户管理', 
        icon:<TabletOutlined/>
    },
    {
        path:'admin',
        isShow:true,
        title:'功能3', 
        icon:<AlignLeftOutlined />,
        children: [
            {
              path: 'admin/sub-page1',
              title: '文本编辑',
              icon: <SnippetsOutlined />,         
            }, 
            {
                path: 'admin/sub-page2',
                title: '汉译英',
                icon: <SnippetsOutlined />,
              },   
          ],
    },
    {
        path:'documentCenter',
        isShow:true,
        title:'文档中心', 
        icon:<FileMarkdownOutlined/>
    },
    {
        path:'flowChart',
        isShow:true,
        title:'可视化流程图', 
        icon:<ApartmentOutlined />
    },

];
export const mainRouters=[
    {
        path:'/',
        element:<Home/>,
        exact:true,
        title:'首页',  
        icon:<SmileOutlined/>
    },
    {
        path:'roleManagement',
        element:<Family/>, 
        exact:true,
        title:'角色管理', 
        icon:<CrownOutlined/>
    },
    {
        path:'userManagement',
        element:<UserManagement/>, 
        exact:true,
        title:'用户管理', 
        icon:<TabletOutlined/>
    },
    {
        path:'admin',
        element:<Outlet/>,
        exact:true,
        title:'功能3', 
        icon:<AlignLeftOutlined />,
        children: [
            {
                path: 'sub-page1',
                title: '文本编辑',
                icon: <SnippetsOutlined />,
                element: <Welcome/>,
                exact:true,
                
            }, 
            {
                path: 'sub-page2',
                title: '汉译英',
                icon: <SnippetsOutlined />,
                element: <Translate/>,
                exact:true,
                },   
            ],
        
    },  
    {
        path:'documentCenter',
        element:<DocumentCenter/>, 
        exact:true,
        title:'文档中心', 
        icon:<FileMarkdownOutlined />
    },
    {
        path:'flowChart',
        element:<FlowChart/>, 
        exact:true,
        title:'可视化流程图', 
        icon:<ApartmentOutlined />
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
        title:'登录',     
    },
    {
        path:'/register',
        element:<Register/>,
        isShow:false,
        title:'注册',     
    },
    
]