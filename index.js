const redux = require('redux');
const createStore = redux.createStore
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

function restockCake(qty=1){
    return {
        type : CAKE_RESTOCKED,
        payload : qty
    }
}
function orderCake(){
    return{
        type : CAKE_ORDERED,
        payload : 1
    }
}

initialState = {
    numOfCakes : 10,
    anotherProperty : 2
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state, 
                numOfCakes : state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return{
                 ...state,
                 numOfCakes : state.numOfCakes + action.payload
            }
            default :
            return state
    }
}

const store = createStore(reducer)
console.log("InitialState:",store.getState())
const unsubscribe = store.subscribe(()=>{console.log("Update State:", store.getState())})
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake())
unsubscribe()



