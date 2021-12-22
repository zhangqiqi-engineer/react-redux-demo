import React ,{memo,useEffect,useState}from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { useLocation } from 'react-router-dom';

const breadcrumbNameMap = {//跟路由路径保持一致
    "/": "首页",
    "/403": "403",
    "/404": "404",
    "/detial": "页面1",
    "/sub-page1": "一级页面",
    "/friendStatus": "页面2",
    "/sub-page2":"二级页面",
};

const Nav =((props) => {
    const [ pathname, setPathname ] = useState('/'); // 当前路由地址

    const location = useLocation();
    useEffect(() => {
        setPathname(location.pathname);
      }, [ location.pathname ]);

    const pathSnippets = pathname.split("/").filter((i) => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}></Link>
                {breadcrumbNameMap[url]}
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <Breadcrumb.Item key="home"><Link to="/">首页</Link></Breadcrumb.Item>
    ].concat(extraBreadcrumbItems);

    return (
        <div className="demo">
            <Breadcrumb style={{ margin: "16px 0" }}>
                {breadcrumbItems}
            </Breadcrumb>
        </div>
    );
});
export default memo(Nav);
