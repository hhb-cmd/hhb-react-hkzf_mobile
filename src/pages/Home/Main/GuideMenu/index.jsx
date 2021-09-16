import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import './index.scss'
import {withRouter} from 'react-router-dom'
import Nav1 from '../../../../assets/images/nav-1.png'
import Nav2 from '../../../../assets/images/nav-2.png'
import Nav3 from '../../../../assets/images/nav-3.png'
import Nav4 from '../../../../assets/images/nav-4.png'

// 导航菜单数据
const navs = [
    {
        id: 1,
        img: Nav1,
        title: '整租',
        path: '/home/list'
    },
    {
        id: 2,
        img: Nav2,
        title: '合租',
        path: '/home/list'
    },
    {
        id: 3,
        img: Nav3,
        title: '地图找房',
        path: '/map'
    },
    {
        id: 4,
        img: Nav4,
        title: '去出租',
        path: '/rent'
    }
]

class GuideMenu extends Component {

    // 渲染导航菜单结构
    renderNavs () {
        return navs.map(item => (
            <Flex.Item key={item.id} onClick={() => this.props.history.push(item.path)}>
                <img src={item.img} alt="" />
                <h2>{item.title}</h2>
            </Flex.Item>
        ))
    } 

    render() {
        return (
            <div>
                {/* 导航菜单 */}
                <Flex className='nav'>
                    {this.renderNavs()}
                </Flex>
            </div>
        )
    }
}

export default withRouter(GuideMenu)