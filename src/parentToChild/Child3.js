import React from 'react'

export default function Child3(props) {
    console.log(props)
    const {obj} =props
    return (
        <div>
            <label>姓名</label>
            <div>{obj.name}</div>
            <label>地址</label>
            <div>{obj.address.city}</div>
            <div>{obj.address.province}</div>
            {obj.address.other.map(item=>{
                return<h1 key={item}>{item}</h1>
            })}
            <div>公司</div>
            <div>{obj.address.com.name}</div>
        </div>
    )
}
