import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from './styles.module.scss';

const ItemCard = ({ item }) => {
    const { picture, title, price, id } = item;
    return (
        <article className={Styles.itemCard}>
            <div className={Styles.imgContainer}>
                <img src={picture} alt={title} />
            </div>

            <div className={Styles.itemContainer}>
                <div className={Styles.itemInfo}>
                    <p className={Styles.itemPrice}>${price.amount.toLocaleString('es-AR')}</p>
                    <h2 className={Styles.itemTitle}>
                        <Link to={`/items/${id}`}>
                            <span aria-hidden='true'></span>
                            {title}
                        </Link>
                    </h2>
                </div>
                <p className={Styles.itemAddress}>{item.address}</p>
            </div>
        </article>
    );
};

export default ItemCard;

ItemCard.propTypes = {
    item: PropTypes.shape({
        picture: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.shape({
            currency: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            decimals: PropTypes.number.isRequired,
        }),
        free_shipping: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
};
