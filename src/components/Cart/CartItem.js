import './CartDrawer.css'

export const ItemCard = ({imageUrl, name, price, quantity}) => {
    return (
            <div className='itemcard'>
                <div className='body'>
                    <img src={imageUrl} className="image" alt=""/>
                    <div className="details">
                        <div className="text">
                            <h2 className="title">{name}</h2>
                        </div>
                        <div className="footer">
                            <div className="price">${price}.00</div>
                            <div className="price">{quantity}</div>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}