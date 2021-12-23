import { BrowserRouter, Route,Navigate,Routes,Outlet } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import {mainRouters,adminRouters} from "routers/index"
import Layout from 'components/Layout/index'
import store from 'store/index';
function App() {
 const routerRender=(routers)=>{
  return routers?.map((item)=>{
    return <Route key={item.path} {...item}>{item.children&&item.children.length>0? routerRender(item.children):null}</Route>
  })
 }

  return (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>    
              {/* 渲染登陆路由 */}
              {adminRouters.map((item)=>{
                  return <Route key={item.path} {...item}></Route>
              })} 
              <Route path="/" element={<Layout><Outlet /></Layout>}>
              {routerRender(mainRouters)}
              </Route> 
               <Route path="*" element={<Navigate to="/404"/>} /> 
            </Routes>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
