import PropTypes from 'prop-types';
import Button from '../Button';
import Paragraphs from './components/Paragraphs';
import { formatDecimals } from '../../static/utils/schemas';
import Styles from './styles.module.scss';

const ProductDetail = ({ product }) => {
    const { condition, sold_quantity, title, price, description, picture } = product;

    return (
        <main className={Styles.itemContainer}>
            <div className={Styles.flexContainer}>
                <div className={Styles.itemImage}>
                    <img src={picture} alt={title} />
                </div>
                <div className={Styles.itemInfo}>
                    <p className={Styles.itemCondition}>
                        {condition} - {sold_quantity || '0'}{' '}
                        {sold_quantity === 1 ? 'vendido' : 'vendidos'}
                    </p>
                    <h2 className={Styles.itemTitle}>{title}</h2>
                    <p className={Styles.itemPrice}>
                        ${price.amount.toLocaleString('es-AR')}
                        <span>{formatDecimals(price.decimals)}</span>
                    </p>
                    <Button text='Comprar' />
                </div>
            </div>

            <div className={Styles.itemDescription}>
                <h3>Descripción del producto</h3>
                <Paragraphs string={description} />
            </div>
        </main>
    );
};

export default ProductDetail;

ProductDetail.propTypes = {
    product: PropTypes.shape({
        condition: PropTypes.string.isRequired,
        sold_quantity: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.shape({
            currency: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            decimals: PropTypes.number.isRequired,
        }),
        description: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }).isRequired,
};
