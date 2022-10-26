import PropTypes from 'prop-types';
import Styles from './styles.module.scss';

const Button = ({ text, ...rest }) => {
    return (
        <button {...rest} className={Styles.button}>
            {text}
        </button>
    );
};

export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
