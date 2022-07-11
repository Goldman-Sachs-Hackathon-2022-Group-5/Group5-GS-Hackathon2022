import "../Food/foodCard.css";
import addItemIcon from "../../assets/Images/AddItemIcon.jpg";

export const FoodCard = ({imageUrl, name, desc, price, buttonFunction}) => {
    return (
            <div className='foodCard'>
                <div className='body'>
                    <img src={imageUrl} className="image" alt=""/>
                    <div className="details">
                        <div className="text">
                            <h2 className="title">{name}</h2>
                            <p className="description">{desc}</p>
                        </div>
                        <div className="footer">
                            <div className="price">${price}.00</div>
                            <img src={addItemIcon} className="button" onClick={buttonFunction} alt=""/>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}