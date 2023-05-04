
import { useDispatch, useSelector } from "react-redux"

import { useNavigate } from "react-router-dom"

import Counter from '../counter-item/'

import "./CardItem.css"



function CardItem({id, img, name, description, price, weight, counter, linktoticket}){
    const dispatch = useDispatch()
    const productBasked = useSelector(state => state.productBasked)

    const navigate = useNavigate();
  
    
    function showcaseToTicketLink(){
        if(linktoticket) navigate(`/about/${id}`)
    }

    function basketToTicketLink(){
        if(!linktoticket) navigate(`/about/${id}`)
    }
   

    function RenderButton(){
        return (
            <button className="product__btn-add" id={id}  onClick={productAdd}>В корзину
            </button>
        )
    }


    function linkToBasket(e){
        e.stopPropagation()
        navigate('/Basket');
    }


    function RenderSetButtons(){
        return (
            <div className="product__set-btn">
                <button className='product__link-basket' onClick={(linkToBasket)}>
                    <img srcSet="./images/ui/icon-basket.svg" alt="Корзина" />
                </button>
                <button id={id}   onClick={productRemove} className="product__btn-remove">Удалить из корзины</button>
            </div>
        )
    }

    let buttonElements = <RenderButton/>
    productBasked.forEach(item => {
        if(item.id === id && item.disabled === true){
            buttonElements = <RenderSetButtons/>
        }
    })
    


    function productAdd(e){
            e.stopPropagation()
            dispatch({
                type:"ADD_PROD",
                data: { id:id, img:img, name:name, price:price, priceCounter: price, counter:1, disabled:true},
            })
    }

    function productRemove(e){

        e.stopPropagation()

        dispatch({
            type:"REMOVE_PROD",
            id: id,
        })
    }

    return (
  
            <section className="products__item" onClick={showcaseToTicketLink}>
                <div className="product__image" onClick={basketToTicketLink}>
                    <img src={img} alt={name} />
                </div>
                <h2 className="product__title" onClick={basketToTicketLink}>{name}</h2>
                <p className="product__text">{description}</p>

                <Counter priseItem={price} counter={counter} id={id} />

                <div className="product__features">
                    
                    <span className="product__price">{price} ₽</span>
                    <span>&nbsp;/&nbsp;</span>
                    <span className="product__weight">{weight}</span>

                    {buttonElements}
                </div>
             
                
            </section>
      
    )
}

export default CardItem