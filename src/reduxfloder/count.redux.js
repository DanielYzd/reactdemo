//统一管理action和reducer
const firstReducer = (state = 10, action) => {
    switch (action.type) {
      //当我们传入的action的type是add的时候，就给我们的state加1
      case "add":
        return state + 1;
      //当我们传入的action的type是reduce的时候，就给我们的state-1
      case "reduce":
        return state - 1;
      //不是以上的情况，我们就返回旧的state
      default:
        return state;
    }
  };
  const add=()=>({type:'add'})
  const reduce=()=>({type:'reduce'})
  // asyncAdd:setTimeout(()=>({type:'add'}),1000)
  const asyncAdd=()=>dispatch=>{
      setTimeout(()=>{
          dispatch({type:'add'})
      },2000)
  }
  export {firstReducer,add,reduce,asyncAdd}