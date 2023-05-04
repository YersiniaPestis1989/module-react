import Header from '../components/app-header'
import Basket from "../components/app-basket";



function ShoppingСart(props){

        return (
            <>
                <Header addBtnToBack={true} addTitle="Корзина с выбранными товарами" addBasket={false} />
                <Basket/>
            </>
        )
   
}

export default ShoppingСart