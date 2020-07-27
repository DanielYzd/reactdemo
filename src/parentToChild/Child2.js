import React from 'react'

export default function Child2(props) {
    return (
        <div>
            {/* 这里其实就实现了react兄弟组件通信 */}
            {/* 父组件定义函数，接受一个参数，来自子组件
            子组件1 通过事件修改一个值，通过props里父组件的函数传参，从而父组件拿到子组件变化的值
            父组件再将拿到的值传给子组件2 */}
            <h1>我是子组件2接受父组件传过来的id值{props.id}
            ,<br></br>其实这里就是兄弟组件传给我父组件的值</h1>
        </div>
    )
}
