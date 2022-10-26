import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults'
import Details from './pages/Details';


const App = () => {
    return (
         <>
            <Navbar />
            <Container>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/items' component={SearchResults} />
                    <Route exact path='/items/:id' component={Details} />
                </Switch>
            </Container>
        </>
    );
};

export default App;
