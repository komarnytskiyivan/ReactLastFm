import './App.css';
import LookSinger from '../containers/lookSinger/lookSinger';
import SearchSong from '../containers/searchSong/searchSong';
import Home from '../containers/homePage/homePage';
import Navbar from '../ui/navbar/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <div className='app'>
        <Route path='/' component={Home} exact/>
        <Route path='/searchSong/' component={SearchSong} exact/>
        <Route path='/lookSinger/' component={LookSinger} exact/>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
