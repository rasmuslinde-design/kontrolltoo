import React from 'react'
import '../index.css'

const MealItem = ({ name, description, price, image}) => {
    console.log("image prop:", image)
    const imagePath = require(`../assets/${image}`);
 <li className='meal-item'>
     <article>
      <img src={imagePath} alt={name}/>
                <div>                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p className="meal-price">{parseFloat(price).toFixed(2)}</p>
                </div>
                <p>
                    <button >Add to Cart</button>
                </p>
            </article>
        </li>

}

export default MealItem;