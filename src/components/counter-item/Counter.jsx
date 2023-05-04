
import {useRef} from "react"

import { useDispatch } from 'react-redux'

import './Counter.css'

function Counter({id, counter}){

    const ref = useRef();
    const dispatch = useDispatch()
   
    function addCounterHundler(e){
        e.stopPropagation()
        ref.current.textContent++

        dispatch({
            type:"COUNTER_ADD",
            couner: parseInt(ref.current.textContent),
            idcounter:id,
        })
    }

    function removeCounterHundler(e){
        e.stopPropagation()
        if(ref.current.textContent > 1){
            ref.current.textContent--
   
            dispatch({
                type:"COUNTER_REMOVE",
                couner: parseInt(ref.current.textContent),
                idcounter:id
            })
        }
    }


    return (
        <div className="basket__counter-wrapper">
            <button onClick={removeCounterHundler} className="basket__counter-button"></button>
                x<span ref={ref} className="basket__counter-num">{counter}</span>
            <button onClick={addCounterHundler} className="basket__counter-button"></button>
        </div>
    )
}


export default Counter