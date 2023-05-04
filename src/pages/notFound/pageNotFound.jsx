
import { Link } from "react-router-dom"

import "./pageNotFound.css"

function PageNoteFound(){
    return (
        <div className="container">
            <div className="note-found__wrapper">
                <h2 className="note-found__title">404</h2>
                <p className="note-found__text">Страница не найдена</p>
                <Link to="/" className="note-found__link">Главная страница</Link>
            </div>
        </div>
    )
}

export default  PageNoteFound