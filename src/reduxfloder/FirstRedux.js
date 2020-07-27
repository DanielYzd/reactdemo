import React, { Component } from "react";
import store from "./store";
import { connect } from "react-redux";
import {add,reduce,asyncAdd} from './count.redux'

// // 返回数据的方法 供我们connect使用，他会帮我们把数据转换成props
// const mapStateToProps = state => {
//   return {
//     count: state
//   };
// };
// // 返回dispatch方法 的方法，供我们connect使用，他会帮我们把我们的dispatch转换成我们的属性
// const mapDispatchToProps = dispatch => {
//   return {
//     add: () => {
//       dispatch({ type: "add" });
//     },
//     reduce: () => {
//       dispatch({ type: "reduce" });
//     }
//   };
// };
@connect(
  // state => {
  //     return { count: state };
  // }
  state => ({ count: state }),
  {add,reduce,asyncAdd} 
//   dispatch => ({
//     add: () => dispatch({ type: "add" }),
//     reduce: () => dispatch({ type: "reduce" })
//   })
//因为redux默认只支持同步的写法，所以上面的返回dispatch的方法可以简写成下面的代码
// {
//     add:()=>({type:'add'}),
//     reduce:()=>({type:'reduce'}),
//     // asyncAdd:setTimeout(()=>({type:'add'}),1000)
//     asyncAdd:()=>dispatch=>{
//         setTimeout(()=>{
//             dispatch({type:'add'})
//         },2000)
//     }
// }
)
class FirstRedux extends Component {
  render() {
    return (
      <div>
        <h1>学习redux,编写第一个redux累加器</h1>
        {/* redux 写法*/}
        {/* 通过我们的store的getState方法可以获取到我们的状态数据 */}
        {/* {store.getState()} */}
        {/* react-redux获取状态的写法 */}
        {this.props.count}
        {/* <button onClick={() => store.dispatch({ type: "add" })}>+1</button>
        <button onClick={() => store.dispatch({ type: "reduce" })}>-1</button> */}
        <button onClick={() => this.props.add()}>+1</button>
        <button onClick={() => this.props.reduce()}>-1</button>
        <button onClick={() => this.props.asyncAdd()}>延迟加1</button>
      </div>
    );
  }
}
// export default connect(mapStateToProps,mapDispatchToProps)(FirstRedux)
export default FirstRedux;
