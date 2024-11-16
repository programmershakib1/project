import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({gadget}) => {
    const {product_id, product_title, product_image, price} = gadget;
    
    return (
        <div className="bg-white p-5 rounded-xl">
            <div className="lg:h-48 md:h-40">
                <img className="w-full h-full rounded-xl" src={product_image} alt="" />
            </div>
            <h2 className="text-xl font-bold pt-5">{product_title}</h2>
            <p className="py-3 text-p font-semibold">{price}$</p>
            <Link to={`/details/${product_id}`}><button className="border border-primary text-primary font-semibold py-2 px-8 rounded-full">View Details</button></Link>
        </div>
    );
};

Card.propTypes = {
    gadget: PropTypes.object
}

export default Card;