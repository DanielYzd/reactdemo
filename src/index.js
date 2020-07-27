import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import LifeCycle from "./LifeCycle";
import * as serviceWorker from "./serviceWorker";
// import App1 from './App1'
// import Purememo from './Purememo'
// import Composition from "./composition";
// import Hoc from './HOC/Hoc'
// import Context1 from './HOC/Context1'
// import Context2 from './HOC/Context2'
import FirstRedux from "./reduxfloder/FirstRedux";
// import store from "./reduxfloder/store";
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import {firstReducer} from './reduxfloder/count.redux'

import Parent from './parentToChild/Parent.js'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//演示生命周期
// ReactDOM.render(
//   <React.StrictMode>
//     <LifeCycle />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
//演示Antd组件库
// ReactDOM.render(<App1 />, document.getElementById("root"));
//演示PureComponent和React.memo()
// ReactDOM.render(<Purememo />, document.getElementById("root"));
//演示组件复合写法
// ReactDOM.render(<Composition />, document.getElementById("root"));
//演示高阶组件
// ReactDOM.render(<Hoc title="react 教练员" />, document.getElementById("root"));
//不使用上下文情况
// ReactDOM.render(<Context1/>, document.getElementById("root"));
//使用Context上下文
// ReactDOM.render(<Context2/>, document.getElementById("root"));
// 学习redux
// ReactDOM.render(<FirstRedux></FirstRedux>, document.getElementById("root"));
// const render=()=>{
//     ReactDOM.render(<FirstRedux></FirstRedux>, document.getElementById("root"))
// }
// render()
// store.subscribe(render)
const store = createStore(firstReducer,applyMiddleware(thunk,logger));
// ReactDOM.render(
//   <Provider store={store}>
//     <FirstRedux></FirstRedux>
//   </Provider>,
//   document.getElementById("root")
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//演示子组件给父组件传值
ReactDOM.render(<Parent/>, document.getElementById("root"));
serviceWorker.unregister();
