import PropTypes from 'prop-types';
import ItemCard from '../ItemCard';

const ProductsContainer = ({ items }) => {
    return (
        <main>
            {items?.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </main>
    );
};

export default ProductsContainer;

ProductsContainer.propTypes = {
    arrayProd: PropTypes.arrayOf(PropTypes.object).isRequired,
};
