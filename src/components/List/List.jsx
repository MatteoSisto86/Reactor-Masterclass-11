import Card from "./Card"

export default function List({children}){
    return (
        <div className="container">
            <div className="row">
                {children}
            </div>
        </div>
    )
}


List.Card = Card;