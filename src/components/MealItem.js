import React from "react";
import "../index.css";

import beefTacosImg from "../assets/images/beef-tacos.jpg";
import caesarSaladImg from "../assets/images/caesar-salad.jpg";
import chickenCurryImg from "../assets/images/chicken-curry.jpg";
import chocolateBrownieImg from "../assets/images/chocolate-brownie.jpg";
import eggplantParmesanImg from "../assets/images/eggplant-parmesan.jpg";
import falafelWrapImg from "../assets/images/falafel-wrap.jpg";
import grilledChickenSandwichImg from "../assets/images/grilled-chicken-sandwich.jpg";
import lemonCheesecakeImg from "../assets/images/lemon-cheesecake.jpg";
import lobsterBisqueImg from "../assets/images/lobster-bisque.jpg";
import macAndCheeseImg from "../assets/images/mac-and-cheese.jpg";
import margheritaPizzaImg from "../assets/images/margherita-pizza.jpg";
import misoRamenImg from "../assets/images/miso-ramen.jpg";
import mushroomRisottoImg from "../assets/images/mushroom-risotto.jpg";
import pancakeStackImg from "../assets/images/pancake-stack.jpg";
import seafoodPaellaImg from "../assets/images/seafood-paella.jpg";
import spaghettiCarbonaraImg from "../assets/images/spaghetti-carbonara.jpg";
import steakFritesImg from "../assets/images/steak-frites.jpg";
import sushiRollPlatterImg from "../assets/images/sushi-roll-platter.jpg";
import veganBuddhaBowlImg from "../assets/images/vegan-buddha-bowl.jpg";
import veggieBurgerImg from "../assets/images/veggie-burger.jpg";

const IMAGE_BY_PATH = {
  "images/beef-tacos.jpg": beefTacosImg,
  "images/caesar-salad.jpg": caesarSaladImg,
  "images/chicken-curry.jpg": chickenCurryImg,
  "images/chocolate-brownie.jpg": chocolateBrownieImg,
  "images/eggplant-parmesan.jpg": eggplantParmesanImg,
  "images/falafel-wrap.jpg": falafelWrapImg,
  "images/grilled-chicken-sandwich.jpg": grilledChickenSandwichImg,
  "images/lemon-cheesecake.jpg": lemonCheesecakeImg,
  "images/lobster-bisque.jpg": lobsterBisqueImg,
  "images/mac-and-cheese.jpg": macAndCheeseImg,
  "images/margherita-pizza.jpg": margheritaPizzaImg,
  "images/miso-ramen.jpg": misoRamenImg,
  "images/mushroom-risotto.jpg": mushroomRisottoImg,
  "images/pancake-stack.jpg": pancakeStackImg,
  "images/seafood-paella.jpg": seafoodPaellaImg,
  "images/spaghetti-carbonara.jpg": spaghettiCarbonaraImg,
  "images/steak-frites.jpg": steakFritesImg,
  "images/sushi-roll-platter.jpg": sushiRollPlatterImg,
  "images/vegan-buddha-bowl.jpg": veganBuddhaBowlImg,
  "images/veggie-burger.jpg": veggieBurgerImg,
};

const MealItem = ({ name, description, price, image }) => {
  const imageSrc = IMAGE_BY_PATH[image];

  return (
    <li className="meal-item">
      <article>
        {imageSrc ? <img src={imageSrc} alt={name} /> : null}
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <p className="meal-price">{parseFloat(price).toFixed(2)}</p>
        </div>
        <p>
          <button>Add to Cart</button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
