/**
 * @component Home
 * @description 首页
 * @time 2018/1/25
 * @author jokerXu
 */
import * as React from 'react';

export interface Props {
}

class Home extends React.Component<Props, {}> {

  public state: {
    info?: string;
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      info: '点我啊'
    };
  }

  clickHandler = () => {
    const {info} = this.state;
    const result = Object.is('点我啊', info) ? '让你点就点' : '点我啊';
    this.setState({info: result});
  }

  render() {
    const {info} = this.state;
    return (
      <div className="home-container">
        <h2>欢迎你来到首页</h2>
        <h3 onClick={this.clickHandler}>{info}</h3>
      </div>
    );
  }
}

export default Home;