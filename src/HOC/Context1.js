import React, { Component } from "react";

//没使用上下文的情况，每一层都要将上层传入的组件属性全量传下去
//先创建一个数据源
let store = {
  name: "TIM",
  from: "神格"
};
// function Info(props){
//     return(
//         <div>
//             姓名:{props.name}
//             来自:{props.from}
//         </div>
//     )
// }
class Info extends Component {
  render() {
    return (
      <div>
        姓名:{this.props.name}
        来自:{this.props.from}
      </div>
    );
  }
}
function ToolBar(props) {
  return <Info {...props}></Info>;
}
export default class Context1 extends Component {
  render() {
    return (
      <div>
        <ToolBar name={store.name} from={store.from}></ToolBar>
      </div>
    );
  }
}
