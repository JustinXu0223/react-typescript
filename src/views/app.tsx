/**
 * @component App
 * @description 布局文件
 * @time 2018/1/9
 * @author jokerXu
 **/
import * as React from 'react';
import { Link } from 'react-router';
import { Button } from 'antd';
import './app.less';
const logo = require('../assets/images/logo.svg');

export interface Props {
    children: any,
}

class App extends React.Component<Props, {}> {
    constructor(props: Props){
        super(props);
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button type="primary" className="link-button"><Link to="/demo">去demo</Link></Button>
        <Button className="link-button"><Link to="/sxsd">去error</Link></Button>
        <div>
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
