import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";
const breadcrumbNameMap = {//跟路由路径保持一致
    "/": "首页",
    "/403": "403",
    "/404": "404",
    "/detial": "页面1",
    "/sub-page1": "功能3 / 一级页面",
    "/friendStatus": "页面2",
    "/sub-page2":"功能3 / 二级页面",
};

const Nav = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split("/").filter((i) => i);
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
export default Nav;
