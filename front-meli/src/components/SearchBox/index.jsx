import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import searchIcon from '../../assets/search.png';
import Styles from './styles.module.scss';

const SearchBox = () => {
    const [query, setQuery] = useState('');
    const history = useHistory();

    const handleChange = (ev) => {
        setQuery(ev.target.value);
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (query) {
            history.push(`/items?search=${query}`);
        }
    };

    return (
        <form className={Styles.searchForm} onSubmit={handleSubmit} data-testid='search-form'>
            <input
                type='text'
                id='search-input'
                placeholder='Buscar productos, marcas y más...'
                value={query}
                onChange={handleChange}
            />
            <button aria-label='Buscar'>
                <img src={searchIcon} alt='Buscar' />
            </button>
        </form>
    );
};

export default SearchBox;
