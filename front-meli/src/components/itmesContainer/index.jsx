import PropTypes from 'prop-types';
import ItemCard from '../ItemCard';

const ItemsContainer = ({ items }) => {
    return (
        <main>
            {items?.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </main>
    );
};

export default ItemsContainer;

ItemsContainer.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
