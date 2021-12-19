import Login from "../views/Login";
import Home from "../views/Home";
import Family from "../views/family";
import NoFound from "../views/NoFound";
import FriendStatus from "../views/FriendStatus";

export const mainRouters=[
    {
     path:'/login',
     component:Login,
     isShow:false,
     title:'登陆',
     
    },
    {
     path:'/404',
     component:NoFound
    },
    {
        path:'/',
        component:Home,
        exact:true,
        isShow:true,
        title:'首页',  
        icon:'area-chart' 
    },
    {
        path:'/detial',
        component:Family, 
        exact:true,
        isShow:true,
        title:'详情', 
        icon:'shop'
        },
        {
            path:'/friendStatus',
            component:FriendStatus, 
            exact:true,
            isShow:true,
            title:'详情1', 
            icon:'shop'
            }
];

export const adminRouters=[
    {
     path:'/admin',
     component:Home,
     exact:true,
    },{
    path:'/admin/detial',
    component:Family, 
    exact:true,

    }
]