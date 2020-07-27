import React,{useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

export default function Parent() {
    // 定义初始值为null的id，并定义一个函数用来操作id
    const[id,setId]=useState(0)
    let handleClick = (id)=>{
        console.log(id)
        setId(id)
        // setId(id)
    }
    return (
        <div>
            <Child1 handleClick={handleClick} id={id}></Child1>
            <h1>我是来自子组件1的传值{id}</h1>
            <Child2 id={id}></Child2>
        </div>
    )
}
