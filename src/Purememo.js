// import React, { Component,PureComponent } from "react";
import React, { Component } from "react";

//可以使用pureComponent缩写代替生命周期
// class Title extends PureComponent {
// //   shouldComponentUpdate(nextProps) {
// //     return nextProps.title !== this.props.title;
// //   }
//   render() {
//     console.log("我是title组件");
//     return <div>标题:{this.props.title}</div>;
//   }
// }
// 使用react.memo()代替以上title组件，让函数式组件也拥有上面PureComponent的功能

const Title = React.memo(props => {
    console.log("我是title组件");
  return <div>标题： {props.title}</div>;
});
class Count extends Component {
  render() {
    console.log("我是条数组件");
    return <div>条数:{this.props.count}</div>;
  }
}

export default class Purememo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "study react",
      count: 0
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>今天讲解PureComponent</h1>
        <Title title={this.state.title}></Title>
        <Count count={this.state.count}></Count>
      </div>
    );
  }
}
