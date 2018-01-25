/**
 * @component Layout
 * @description 头部组件
 * @time 2018/1/9
 * @author jokerXu
 */
import * as React from 'react';
import './Header.less';

const logo = require('../../assets/images/logo.svg');

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <div className="title">
        <img src={logo} className="logo" alt="logo"/>
        <h2>Welcome to React</h2>
      </div>
      <p className="intro">
        这是头部文件
      </p>
    </div>
  );
};

export default HeaderComponent;