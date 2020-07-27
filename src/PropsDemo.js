// import React, { Component } from 'react'

// export default class PropsDemo extends Component {
//     render() {
//         return (
//             <div>
//                 {this.props.title}
//             </div>
//         )
//     }
// }
//函数式组件
import React from 'react'

// export default function PropsDemo(props) {
//     return (
//         <div>
//             {props.title}
//         </div>
//     )
// }
// 解构写法
export default function PropsDemo({title}) {
    return (
        <div>
            {title}
        </div>
    )
}

