import PropTypes from 'prop-types';
import Styles from './style.module.scss';

const SinglePageLayout = ({ children }) => {
    return (
        <main className={Styles.flex}>
            <div className={Styles.flexContainer}>{children}</div>
        </main>
    );
};

export default SinglePageLayout;

SinglePageLayout.propTypes = {
    children: PropTypes.node,
};
