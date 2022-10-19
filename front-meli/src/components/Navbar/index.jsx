import Container from '../Container';
import Logo from '../Logo';
import Styles from './styles.module.scss';

const Navbar = () => (
    <nav className={Styles.navbar}>
        <Container>
            <Logo />
        </Container>
    </nav>
);

export default Navbar;
