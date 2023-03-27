import { Link } from "gatsby";
import { CategoryItem, CategoryName } from "./style";

const CategoryItemBox = () => {
    return (
        <CategoryItem>
            <Link to="/">
                <CategoryName>
                    <i className="icofont-rounded-double-right"></i> Digital
                    Marketing
                </CategoryName>
                <CategoryName>(24)</CategoryName>
            </Link>
        </CategoryItem>
    );
};

export default CategoryItemBox;
