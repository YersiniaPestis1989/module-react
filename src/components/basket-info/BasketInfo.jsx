import {Link} from 'react-router-dom'

import { useSelector } from 'react-redux'

import './BasketInfo.css'


function BasketInfo(){
    const countProd = useSelector(state => state.productBasked.length)
    const total = useSelector(state => state.total)


    function morph(int, array) {
        return (array = array || ['товар', 'товара', 'товаров']) && array[(int % 100 > 4 && int % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(int % 10 < 5) ? int % 10 : 5]];
    }

    function BasketInfo(){
        return (
            <p className='header__total'>
                <span>{countProd}</span> {morph(countProd)}<br></br>
                на сумму <span>{total}</span> ₽
            </p>
        )
    }

    return (
        <div className='basket__info'>
             {countProd ? <BasketInfo/> : "Ваша корзина пуста"} 

            <Link to="/basket" className={countProd ? "header__basket-active" : "header__basket"}>
                <img srcSet=".././images/ui/icon-basket.svg" alt="Корзина" />
            </Link>
        </div>
    )
}

export default BasketInfo