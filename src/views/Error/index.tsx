/**
 * @component Error
 * @description 错误页
 * @time 2017/11/22
 * @author jokerXu
 **/
import * as React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router';
import './index.less';

const Error = () => (
    <div className="error-container" >
      <p />
      <div>
        <h2>404</h2>
        <p>抱歉,你访问的页面不存在</p>
        <Button type="primary">
          <Link to="/">返回首页</Link>
        </Button>
      </div>
  </div>
);

export default Error;
