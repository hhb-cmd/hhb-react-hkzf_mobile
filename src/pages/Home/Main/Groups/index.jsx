import React, { Component } from 'react'
import axios from 'axios'
import './index.scss'
import { Flex, Grid } from 'antd-mobile'

export default class Groups extends Component {
    state = {
        groups: []
    }

    async getGroups() {
        const { data: res } = await axios.get('http://localhost:8080/home/groups', {
            params: {
                area: 'AREA%7C88cff55c-aaa4-e2e0'
            }
        })
        this.setState({
            groups: res.body
        })
    }
    componentDidMount(){
        this.getGroups()
    }
    render() {
        return (
                <div className="group">
                    <h3 className="group-title">
                        租房小组 <span className="more">更多</span>
                    </h3>
                    <Grid
                        data={this.state.groups}
                        columnNum={2}
                        square={false}
                        hasLine={false}
                        renderItem={item => (
                        <Flex className="group-item" justify="around" key={item.id}>
                            <div className="desc">
                            <p className="title">{item.title}</p>
                            <span className="info">{item.desc}</span>
                            </div>
                            <img src={`http://localhost:8080${item.imgSrc}`} alt="" />
                        </Flex>
                        )}
                    />
                </div>
        )
    }
}
