import "../Food/foodCard.css";
import addItemIcon from "../../assets/Images/AddItemIcon.jpg";

export const FoodCard = ({imageUrl, name, desc, price, buttonFunction}) => {
    return (
        <div className='wrapper'>
            <div className='foodCard'>
                <div className='body'>
                    <div className="upper">
                        <img src={imageUrl} className="image"/>
                        <div className="text">
                            <h2 className="title">{name}</h2>
                            <p className="description">{desc}</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <img src={addItemIcon} className="button" onClick={buttonFunction}/>
                        <div className="price">{price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}