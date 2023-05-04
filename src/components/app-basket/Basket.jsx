
import { useSelector, useDispatch} from 'react-redux'

import { useState } from 'react'

import Item from '../card-Item'

import './Basket.css'



function Basket(){

    const totalPrice = useSelector(state => state.total)
    const productBasked = useSelector(state => state.productBasked)

    const dispatch = useDispatch()


    const [placeOrderSelect, setPlaceOrderSelect] = useState(true)

    
    function BasketEmpty(){
        return (
            <div className={placeOrderSelect ? "basket__empty-wrapper" : "basket__placeorder-wrapper"}>
                <h2 className='basket__empty-title'>{placeOrderSelect ? "Ваша корзина пуста" : "Ваш заказ оформлен"}</h2>
            </div>
        )
    }

    function BasketList(){
        return (  
            productBasked.map((item, index) => (
                <Item 
                    key={index}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    counter={item.counter}
                    linktoticket={false}
                />
            ))
        )
    }


    function placeOrder(){
        dispatch({type:"PLACE_ORDER"})
        productBasked.length ? setPlaceOrderSelect(!placeOrderSelect) : setPlaceOrderSelect(placeOrderSelect)
    }


    return (
        <div className='basket'>
        
            <div className='container-content basket__wrapper'>
                <main className='basket__list'>
                    {(productBasked.length) ? <BasketList/> : <BasketEmpty/>}
                </main>
            </div>

            <footer className='basket__footer footer'>
                <div className='container-content footer__wrapper'>
                    <p className='footer__total'>
                         Заказ на сумму:<span className='footer__amount'>{totalPrice} ₽</span> 
                    </p>
                    <button className='basket__btn-placeorder  primary-btn' onClick={placeOrder} disabled={(placeOrderSelect && productBasked.length)  ? false : true}>Оформить заказ</button> 
                </div>
            </footer>
        </div>
    )
}


export default Basket