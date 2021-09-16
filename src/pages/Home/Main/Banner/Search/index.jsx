import React, { Component } from 'react'
import { Flex } from 'antd-mobile'
import { withRouter } from 'react-router'
import './index.scss'
import axios from 'axios';
class Search extends Component {
    state = {
        curCityName: ''
    }
    componentDidMount() {
        var myCity = new window.BMapGL.LocalCity();
        myCity.get( async city =>{
            const { data: res } = await axios.get(`http://localhost:8080/area/info?name=${city.name}`)
            this.setState({
                curCityName: res.body.label
            })
        });
    }
    render() {
        return (
            <div>
            <Flex className="search-box">
            {/* 左侧白色区域 */}
            <Flex className="search">
              {/* 位置 */}
                <div
                    className="location"
                    onClick={() => this.props.history.push('/citylist')}
                >
                    <span className="name">{this.state.curCityName}</span>
                    <i className="iconfont icon-arrow" />
                </div>

                {/* 搜索表单 */}
                <div
                    className="form"
                    onClick={() => this.props.history.push('/search')}
                >
                    <i className="iconfont icon-seach" />
                    <span className="text">请输入小区或地址</span>
                </div>
                </Flex>
                {/* 右侧地图图标 */}
                <i
                className="iconfont icon-map"
                onClick={() => this.props.history.push('/map')}
                />
            </Flex>
            </div>
        )
    }
}

export default withRouter(Search)