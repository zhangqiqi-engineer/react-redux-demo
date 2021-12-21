import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import {mainRouters,adminRouters} from "./routers/index"
import Layout from './components/Layout/index'
import store from './store.js';
function App() {
//  const routerRender=(routers)=>{
//   routers.map((item)=>{
//     return <Route key={item.path} {...item}>{item.routers&&item.routers.length>0? routerRender(item.routers):null}</Route>
//   })
//  }

  return (
    <Provider store={store}>
      <Router>
        <Switch>
              {adminRouters.map((item)=>{
                return <Route key={item.path} {...item}/>
              })}
          <Layout>
            <Switch>
            {/* <Route path='/admin' render={routeProps=><LayoutDemo {...routeProps}/>} /> */}  
              {/* {routerRender(mainRouters)} */}
              {mainRouters.map((item)=>{
                return <Route key={item.path} {...item}></Route>
              })}
              <Redirect to="/404"/>
            </Switch>
          </Layout>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
