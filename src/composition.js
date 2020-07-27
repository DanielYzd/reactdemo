import React from "react";

function Dialog(props) {
  return (
    <div style={{border:`5px solid ${props.color||'green'}`}} btn>
      {/* 相当于vue里面的匿名插槽 */}
      {props.children}
      {/* 相当于vue框架中的具名插槽 */}
      {props.btn}
    </div>
  );
}
export default function composition() {
    const confirmBtn = (
        <button onClick={()=>alert('react zhen haowan  ')}>确认</button>
    )
       
  return (
    <div>
      <h1>组件复合写法</h1>
      <Dialog color="pink" btn={confirmBtn}>
        <h2>欢迎来到react学习</h2>
        <p>欢迎大家来到react学习</p>
      </Dialog>
    </div>
  );
}
