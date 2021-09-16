import React, { Component } from 'react'
import './index.scss'
export default class Map extends Component {

    // 创建地图实例
    // 注意：react中访问全局对象必须使用window
    componentDidMount(){
        const map = new window.BMapGL.Map("container");
        const point = new window.BMapGL.Point(116.404, 39.915);
        map.centerAndZoom(point, 15); 
    }

    render() {
        return (
            <div className='map'>
                <div id='container'>
                
                </div>
            </div>
            
        )
    }
}
