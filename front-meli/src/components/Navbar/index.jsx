import Container from '../Container';
import SearchBox from '../SearchBox';
import Logo from '../Logo';
import Styles from './styles.module.scss';

const Navbar = () => (
    <nav className={Styles.navbar}>
        <Container>
            <Logo />
            <SearchBox />
        </Container>
    </nav>
);

export default Navbar;
