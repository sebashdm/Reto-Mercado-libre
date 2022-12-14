import PropTypes from 'prop-types';
import Styles from './styles.module.scss';

const Breadcrumbs = ({ breadcrumbs }) => {

    console.log('este es el error ?', breadcrumbs)
    return (
        <ul className={Styles.breadcrumbs} data-testid='breadcrumbs'>
            {breadcrumbs?.map((category) => (
                <li key={category}>
                    <a href='#0'>{category}</a>
                </li>
            ))}
        </ul>
    );
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
    breadcrumbs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
