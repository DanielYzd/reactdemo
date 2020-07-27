import React, { Component } from "react";
import PropsDemo from "./PropsDemo";
import ConditionLoop from "./ConditionLoop";
import logo from "./logo512.png";
import "./App.css";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg1: "11111111111",
      count: 0,
      inputval: "我是input的初始值" //绑定input的value的属性值
    };
  }
  // state={
  //   msg1:"11111111"
  // }
  componentWillMount() {}
  componentDidMount() {
    // this.setState({
    //   count:this.state.count+1
    // },()=>{
    //   console.log(this.state.count)
    // })
    //如果依赖上次
    this.setState(
      (prevState, prevProps) => {
        return { count: prevState.count + 1 };
      },
      () => {
        console.log(this.state.count, "这里是后输出的");
      }
    );
    console.log(this.state.count, "这里是先输出的");
  }
  //绑定input的onChange事件
  handleChange = e => {
    this.setState({
      inputval: e.target.value
    });
  };
  render() {
    const message = "大家好我是daniel";
    return (
      <div>
        <h3>你好。。我是重写</h3>
        {/* 变量渲染 */}
        <h3>{message}</h3>
        <h1>{this.state.msg1}</h1>
        <h2>{this.state.count}</h2>
        {/* 组件属性传递 */}
        <PropsDemo title="我是父组件的title,我们"></PropsDemo>
        {/* 条件渲染和数据循环渲染 */}
        <ConditionLoop title="条件渲染"></ConditionLoop>
        <img
          src={logo}
          style={{ width: "240px", height: "240px" }}
          className="logo"
          alt=""
        />
        <h1>实现react对于input的双向数据绑定</h1>
        <input
          type="text"
          value={this.state.inputval}
          onChange={this.handleChange}
        ></input>
        {this.state.inputval}
      </div>
    );
  }
}
