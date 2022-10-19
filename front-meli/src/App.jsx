import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Home from './pages/Home';


const App = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </Container>
        </>
    );
};

export default App;
