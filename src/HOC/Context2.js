import React, { Component } from "react";

//演示使用上下文Context
let store = {
  name: "TIM",
  from: "神格"
};
//创建上下文
const XdContext = React.createContext();
const { Provider, Consumer } = XdContext;
class Info extends Component {
  render() {
    return (
      <Consumer>
        {store => {
          return (
            <div>
              姓名:{store.name}
              来自:{store.from}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
function ToolBar() {
  return <Info></Info>;
}
export default class Context2 extends Component {
  render() {
    return (
      <div>
        <Provider value={store}>
          <ToolBar></ToolBar>
        </Provider>
      </div>
    );
  }
}
