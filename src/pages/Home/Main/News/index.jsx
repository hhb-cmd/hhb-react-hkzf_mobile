import React, { Component } from 'react'
import './index.scss'
import { WingBlank, Flex } from 'antd-mobile'
import axios from 'axios'
export default class News extends Component {
    state = {
        news: []
    }
    async getNews() {
        const { data: res } = await axios.get('http://localhost:8080/home/news', {
            params: {
                area: 'AREA%7C88cff55c-aaa4-e2e0'
            }
        })
        this.setState({
            news: res.body
        })
    }
    componentDidMount(){
        this.getNews()
    }
    // 渲染最新资讯结构
    renderNews(){
        return this.state.news.map(item => (
            <div className="news-item" key={item.id}>
                <div className="imgwrap">
                    <img
                    className="img"
                    src={`http://localhost:8080${item.imgSrc}`}
                    alt=""
                />
            </div>
            <Flex className="content" direction="column" justify="between">
                <h3 className="title">{item.title}</h3>
                <Flex className="info" justify="between">
                    <span>{item.from}</span>
                    <span>{item.date}</span>
                </Flex>
            </Flex>
            </div>
        ))
    }
    render() {
        return (
            <div className='news'>
                <h3 className="group-title">
                        最新资讯
                </h3>
                <WingBlank size='md'>{this.renderNews()}</WingBlank>
            </div>
        )
    }
}
