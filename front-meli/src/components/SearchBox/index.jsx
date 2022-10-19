
import searchIcon from '../../assets/search.png';
import Styles from './styles.module.scss';

const SearchBox = () => {

    return (
        <form className={Styles.searchForm}  data-testid='search-form'>
            <input
                type='text'
                id='search-input'
                placeholder='Buscar productos, marcas y más...'
                //onChange={handleChange}
            />
            <button aria-label='Buscar'>
                <img src={searchIcon} alt='Buscar' />
            </button>
        </form>
    );
};

export default SearchBox;
