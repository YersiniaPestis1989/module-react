const initStatesProducts = {
    countProd:0,
    priceItem:0,
    total:0,
    productBasked: [],
}


function reducter(state=initStatesProducts, action){

    switch(action.type){
 
        case "PLACE_ORDER":
        return {
            ...state,
            productBasked: [],
            total: 0
        }

        case "ADD_PROD":
        return {
            ...state,
            countProd: state.productBasked.length,
            total: state.total + action.data.price,
            productBasked: state.productBasked.concat(action.data),
        }
        case "REMOVE_PROD":
        return {
            ...state,
            countProd: state.productBasked.length,
            total: state.productBasked.reduce((acc, item) => {
                if(item.id === action.id){
                    acc -= item.price
                }
                return acc
            }, state.total),
            productBasked: state.productBasked.filter(item => item.id !== action.id)
        }
        case "COUNTER_ADD":
        return {
            ...state,
            productBasked: state.productBasked.map(item => {
                if(item.id === action.idcounter){
                    item.counter = action.couner;
                    item.price += item.priceCounter 
                }
                return item
            }),
            total: state.productBasked.reduce((acc, item) => {return acc += item.price}, 0),
        }

        case "COUNTER_REMOVE":
            console.log(state.productBasked)
        return {
            ...state,
            productBasked: state.productBasked.map(item => {
                if(item.id === action.idcounter){
                    item.counter = action.couner;
                    item.price -= item.priceCounter 
                }
                return item
            }),
            total: state.productBasked.reduce((acc, item) => {
                if(item.id === action.idcounter){
                    acc -= item.priceCounter
                }
                return acc
            }, state.total),
        }
        default:
        return state
    }
}


export default reducter