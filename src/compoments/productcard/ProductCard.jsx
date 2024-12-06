import tenis from '../../../public/image_tenis.png';
import '../productcard/ProductCard.css';

const ProductCard = ({name, price}) => {
    return ( 
        <>
          <ul>
            <li>
              <div>
                <img src={tenis} alt="..."/>
                <div>
                  <text>{name}</text>
                </div>
                <div>
                  <text>{price}</text>
                </div>
              </div>
            </li>
          </ul>
        </>
     );
}
 
export default ProductCard;