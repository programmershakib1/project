import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Categories = ({categories}) => {
    return (
        <div className="flex flex-col gap-3 text-center bg-white rounded-xl p-5 mx-2 md:mx-0">
            {
                categories.map((category, idx) => <NavLink to={`/category/${category.category}`} className={({isActive}) => `text-p py-3 px-4 rounded-full font-semibold ${isActive?'bg-primary text-white': 'bg-category_bg' }`} key={idx}>{category.category}</NavLink>)
            }
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array
}

export default Categories;