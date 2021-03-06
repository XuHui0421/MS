import React from 'react';
// import {Card, Form } from 'antd';
import './index.less';

const { AMap } = window;

export default class BikeMap extends React.Component {
  constructor() {
    super();
    this.state = {
      map: null,
    };
  }


  componentWillMount() {
    console.log(window.AMap);
  }

  componentDidMount() {
    this.initMap();
  }

  initMap = () => {
    const map = new AMap.Map('container', {
      center: [121.6616, 31.140982],
      zoom: 14,
    });
    console.log(this.state.map);
    this.setState({ map });

    const markerList = [];
    for (let i = 0; i < 5; i++) {
      markerList.push(
        new AMap.Marker({
          position: new AMap.LngLat(
            121.6616 + Math.random() * 0.01, 31.140982 + Math.random() * 0.01
          ), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          title: '迪士尼',
        })
      );
    }

    map.add(markerList);
    const path = [
      [121.651987, 31.153176],
      [121.686319, 31.154645],
      [121.671127, 31.134958],
      [121.648725, 31.135472],
    ];

    // 创建折线实例
    const Polygon = new AMap.Polygon({
      path,
      strokeColor: '#1791fc',
      strokeWeight: 6,
      fillOpacity: 0.4,
      fillColor: '#1791fc',
    });

    // 将折线添加至地图实例
    map.add(Polygon);

    map.on('click', (ev) => {
      // 触发事件的对象 触发事件的地理坐标，AMap.LngLat 类型 触发事件的像素坐标，AMap.Pixel 类型 触发事件类型
      const { target, lnglat, pixel, type } = ev;
      console.log(target, lnglat, pixel, type);
    });
  }

  render() {
    return (
      <div>
        <div id="container" />
      </div>
    );
  }
}
