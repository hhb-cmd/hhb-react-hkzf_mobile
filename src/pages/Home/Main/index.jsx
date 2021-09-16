import React, { Component } from 'react'
// 引入轮播图子组件
import Banner from './Banner'
import GuideMenu from './GuideMenu'
import Groups from './Groups'
import News from './News'
export default class Main extends Component {
    render() {
        return (
            <div>
                {/* 轮播图 */}
                <Banner></Banner>
                {/* 导航菜单 */}
                <GuideMenu></GuideMenu>
                {/* 私房小组 */}
                <Groups></Groups>
                {/* 最新资讯 */}
                <News></News>
            </div>
        )
    }
}

