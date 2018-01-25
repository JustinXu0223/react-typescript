/**
 * @component App
 * @description 布局文件
 * @time 2018/1/9
 * @author jokerXu
 */
import * as React from 'react';
import { Link } from 'react-router';
import { Button } from 'antd';
import { LayoutComponent } from '../components';
import './app.less';

const { HeaderComponent, FooterComponent } = LayoutComponent;
export interface Props {
  children: any;
}

class App extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <HeaderComponent />
        <Button className="link-button"><Link to="/">去首页</Link></Button>
        <Button type="primary" className="link-button"><Link to="/demo">去demo</Link></Button>
        <Button className="link-button"><Link to="/404">去error</Link></Button>
        <div>
          {this.props.children}
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default App;
