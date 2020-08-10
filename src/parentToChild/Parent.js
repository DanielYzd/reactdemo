import React,{useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'

export default function Parent() {
    // 定义初始值为null的id，并定义一个函数用来操作id
    const[id,setId]=useState(0)
    const[obj,setobj]=useState({
        name:'yzd',
        address:{
            city:'hangzhou',
            province:'zhejiang',
            other:['binjiang','fuyang'],
            com:{
                name:'zhongwang'
            }
        }
    })
    let handleClick = (id)=>{
        console.log(id)
        setId(id)
        // setId(id)
    }
    const changename=()=>{
        console.log(11)
       obj.name='lxl'
       let ooo = JSON.parse(JSON.stringify(obj))
        setobj(ooo)
    }
    const addother=()=>{
        obj.address.other.push('萧山')
        let ooo = JSON.parse(JSON.stringify(obj))
        setobj(ooo)
    }
    return (
        <div>
            <Child1 handleClick={handleClick} id={id}></Child1>
            <h1>我是来自子组件1的传值{id}</h1>
            <Child2 id={id}></Child2>
            <h1>------------------------------------------</h1>
            <Child3 obj={obj}></Child3>
            <h1>接下来测试props赋值</h1>
            <button onClick={()=>changename()}>修改名字</button>
            <button onClick={()=>addother()}>添加一个地点</button>
        </div>
    )
}
