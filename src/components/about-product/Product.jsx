
import { useParams } from "react-router-dom";

import products from "../../data/data"

import Header from '../app-header'

import Item from '../card-Item'

import './Product.css'

function AboutProduct(){

    const params = useParams()

    const getElementByParameters = (item) => {
        return Number(item.id) === Number(params.id)
    }

    const aboutElement = products.find(getElementByParameters)
      
    return (
       
       <div className="adobeproduct">
            <Header
                 addBtnToBack={true} 
                 addTitle={false}
                 addBasket={true}
            />

           <div className="container">
                <main>
                    <Item
                        id={aboutElement.id}
                        img={".././images/cards/" + aboutElement.img}
                        name={aboutElement.name}
                        description={aboutElement.description}
                        price={aboutElement.price}
                        weight={aboutElement.weight}
                    />
                </main>
                </div>
           </div>
     
    )
}

 export default AboutProduct