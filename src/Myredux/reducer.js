export function Rohit(state = {}, {type, payload }) {
    console.log("action");
    switch (type) {
        case "Initialise": {
            state = { ...state }
            if (localStorage.token) {
                state['isloggedin'] = true    
            }
            return state
        }
        case "Login": {
            state = { ...state }
            state['isloggedin'] = true
            return state
        } 
        case "Oder": {
            state = { ...state }
            state['oderplace']=payload
            return state
        }            
        case "OderList": {
            state = { ...state }
            state['MyOder']=payload
            return state
        }
         default:return state  
    }
}