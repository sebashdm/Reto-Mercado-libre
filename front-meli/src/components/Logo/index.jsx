import { Link } from 'react-router-dom';
import logo from '../../assets/mercado-libre-logo.png';
import Styles from './styles.module.scss';

const Logo = () => {
    return (
        <div className={Styles.logoContainer}>
            <Link to='/' aria-label='Volver al inicio' className={Styles.logo}>
                <img src={logo} alt='Logo Mercado Libre' />
            </Link>
        </div>
    );
};

export default Logo;
