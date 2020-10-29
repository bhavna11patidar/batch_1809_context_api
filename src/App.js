import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Header from './components/Header';
import AddMovies from './components/AddMovies';
import ViewMovies from './components/ViewMovies';
import {MovieProvider} from './components/Context';
function App() {
  return (
    <Router>
       <MovieProvider>
        <Header></Header>
        <Route exact path="/" component={ViewMovies}/>
        <Route exact path="/add" component={AddMovies}/>
        </MovieProvider>
    </Router>
  );
}

export default App;
