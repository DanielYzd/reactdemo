import React,{useState} from 'react'

export default function Child1(props) {
    
    const modify = ()=>{
        //这里注意不能直接操作id1，并且传值给父组件的props，react会提示警告
        //所以我们这里采取获取一个随机数值来传给父组件
        let items = [1,23,4,5,6]
        let  item = items[Math.floor(Math.random()*items.length)];
       
        props.handleClick(item)
        // props.handleClick(id1)不能这样传参 会有bug
    }
    return (
        <div>
            <h1>我是子组件1接受的父组件值{props.id}</h1>
            <button onClick={()=>modify()}>点击修改id1的值</button>
        </div>
    )
}
