
import Header from '../components/app-header'
import Cards from '../components/cards'

function Showcase(props){
 
     return (
        <>
            <Header addBtnToBack={false} addTitle="Наша продукция" addBasket={true} />
            <Cards data={props.data}/>
        </>
    )
         
}

export default Showcase