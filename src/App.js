import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import {mainRouters} from "./routers/index"
import Frame from './components/LayoutDemo/index'
import store from './store.js';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Frame>
      <Switch>
       {/* <Route path='/admin' render={routeProps=><LayoutDemo {...routeProps}/>} /> */}
        {mainRouters.map((item)=>{
          return <Route key={item.path} {...item}/>
        })}
        <Redirect to="/404"/>
      </Switch>
      </Frame>
    </Router>
    </Provider>
  );
}

export default App;
