import PropTypes from 'prop-types';
import Styles from './style.module.scss';

const ViewContainer = ({ children }) => {
    return (
        <main className={Styles.flex}>
            <div className={Styles.flexContainer}>{children}</div>
        </main>
    );
};

export default ViewContainer;

ViewContainer.propTypes = {
    children: PropTypes.node,
};
