import React, { Component } from "react";

//编写第一个高阶组件，传递一个组件进去，返回一个新的组件，函数返回的是函数组件
const withLearnReact = Comp => {
  const NewComponent = props => {
    return <Comp {...props} name="daniel"></Comp>; //将原来组件所有属性全部转出去
  };
  return NewComponent;
};
//编写第二个高阶组件，重写生命周期，注意重写生命周期需要class组件，返回的是class组件
const withLifeCycle = Comp => {
  class NewComponent extends Component {
    //重写生命周期
    componentDidMount() {
      console.log("重写生命周期函数");
    }
    render() {
      return <Comp {...this.props}></Comp>;
    }
  }
  return NewComponent;
};
@withLearnReact
@withLifeCycle
class Hoc extends Component {
  render() {
    return (
      <div>
        <h1>体检高阶组件的写法</h1>
        {this.props.title}
        <p>{this.props.name}</p>
      </div>
    );
  }
}
export default Hoc;
