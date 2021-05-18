import {createStore} from "redux"
import {Rohit} from "./reducer"


var store  = createStore(Rohit,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.dispatch({
    type:"Login"
})

// store.dispatch({
//     type:"Logout"
// })
store.dispatch({
    type:'Oder'
})
console.log("My Store" , store.getState())
export default store

