// 导入要使用的路由
import { Route, Switch, Redirect} from "react-router-dom";

// 导入首页和和城市选择两个组件
import Home from "./pages/Home";
import CityList from "./pages/CityList";
import Map from "./pages/Map";
function App() {
  return (
    <div className="App">
      {/* <Router> */}
        {/* 配置路由 */}
        <Switch>
          {/* </Router> */}
          {/* 路由重定向 */}
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          <Route path='/home' component={Home}></Route>
          <Route path='/citylist' component={CityList}></Route>
          <Route path='/map' component={Map}></Route>
        </Switch>
        
    </div>
    
  );
}

export default App;
