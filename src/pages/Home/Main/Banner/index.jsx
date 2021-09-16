import React, { Component } from 'react'
import Search from './Search'
// 引入轮播图组件
import { Carousel } from 'antd-mobile'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080'

export default class Banner extends Component {
    state = {
        swipers: [],
        isSwipersLoading: false
    }
    // 请求轮播图数据
    async getSwipers () {
        const { data: res } = await axios.get('/home/swiper')
        this.setState({swipers : res.body, isSwipersLoading: true})
    }
    componentDidMount () {
        this.getSwipers()
    }
    // 渲染轮播图结构
    renderSwipers () {
        return this.state.swipers.map(val => (
            <img
                src={`http://localhost:8080${val.imgSrc}`}
                alt=""
                key={val.id}
                style={{ width: '100%', verticalAlign: 'top', height: '212px' }}
            />
    ))
    }
    render () {
        return (
            <div className='index'>
                {
                    this.state.isSwipersLoading? (<Carousel autoplay infinite>
                    {this.renderSwipers()}
                    </Carousel>): ('')
                }
                <Search></Search>
            </div>
        );
    }
}
