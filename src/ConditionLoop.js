import React, { Component } from "react";

export default class ConditionLoop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTitle: true,
      goods: [
        { title: "11", price: 11.2 },
        { title: "12", price: 11.2 },
        { title: "13", price: 11.2 },
        { title: "14", price: 11.2 },
        { title: "15", price: 11.2 }
      ]
    };
    // setTimeout(() => {
    //   this.setState({
    //     showTitle: false
    //   });
    // }, 3000);
    //事件绑定改变this指向的第一种写法
    // this.showTitleFunc=this.showTitleFunc.bind(this)
  }
  //事件绑定调用的第一种方法和第三种事件绑定调用的方法
  showTitleFunc() {
    this.setState({
      showTitle: false
    });
  }
  //事件绑定第二种方法利用箭头函数
  //   showTitleFunc = () => {
  //     this.setState({
  //       showTitle: false
  //     });
  //   };
  render() {
    //   条件渲染第二种写法
    //   let result=this.state.showTitle?<h2>{this.props.title}</h2>:null
    //   条件渲染第三种写法
    let result;
    if (this.state.showTitle) {
      result = <h2>{this.props.title}</h2>;
    } else {
      result = null;
    }
    return (
      <div>
        <h1>数据条件渲染和数据循环渲染展示</h1>
        {/* 事件绑定改变this指向的第一种写法 直接绑定 */}
        {/* <button onClick={this.showTitleFunc.bind(this)}>不显示title</button> */}
        {/* 事件绑定第一种和第二种写法 */}
        {/* <button onClick={this.showTitleFunc}>不显示title</button> */}
        {/* 事件绑定第三种写法 */}
        <button onClick={() => this.showTitleFunc()}>不显示title</button>
        {/* 条件渲染第一种写法 */}
        {/* {this.state.showTitle ? <h2>{this.props.title}</h2> : null} */}
        {/* 条件渲染第二种写法 */}
        {result}
        {/* 数据循环渲染 */}
        <ul>
          {this.state.goods.map(item => {
            return (
              <li key={item.title}>
                <span>课程名称：{item.title}</span>----
                <span>价格：{item.price}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
