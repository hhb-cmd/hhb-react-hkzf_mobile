import React, { Component } from 'react'

// 引入子组件
import News from './News'
import Profile from './Profile'
import Main from './Main'
import HouseList from './HouseList'
// 引入TabBarUI组件
import { TabBar } from 'antd-mobile'
// 引入路由组件
import { Route, Switch} from 'react-router-dom'
// 引入css文件
import './index.scss'


// TabBar数据

const tabItems = [
    {title:'首页',icon:'icon-ind',path:'/home'},
    {title:'找房',icon:'icon-findHouse',path:'/home/list'},
    {title:'口碑',icon:'icon-infom',path:'/home/news'},
    {title:'我的',icon:'icon-my',path:'/home/profile'}
]

export default class Home extends Component {
    state = {
        // 默认选中的TabBar菜单
        selectedTab: this.props.location.pathname,
    };
    // 更新页面是判断路由是否跳转让对应的TabBar实现高亮
    componentDidUpdate(preProps){
        if(preProps.location.pathname !==  this.props.location.pathname){
            this.setState({
                selectedTab: this.props.location.pathname
            })
        }
    }
    // 渲染TabBarItem
    renderTabBarItem(){
        return tabItems.map(item => ( <TabBar.Item
            title={item.title}
            key={item.title}
            icon={
                <i className={`iconfont ${item.icon}`}></i>
            }
            selectedIcon={
                <i className={`iconfont ${item.icon}`}></i>
            }
            selected={this.state.selectedTab === item.path}
            onPress={() => {
                this.setState({
                    selectedTab: item.path,
                });
                this.props.history.push(item.path)
            }}
        >
        </TabBar.Item>))
    }

    render() {
        return (
            <div className='home'>
                {/* 渲染子路由 */}
                    <Switch>
                        <Route exact path='/home' component={Main}></Route>
                        <Route path='/home/list' component={HouseList}></Route>
                        <Route path='/home/news' component={News}></Route>
                        <Route path='/home/profile' component={Profile}></Route>
                    </Switch>
                <div>
                <TabBar
                    tintColor="#21b97a"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    noRenderContent={true}
                >
                    {this.renderTabBarItem()}
                </TabBar>
            </div>
            </div>
        );
    }
}
