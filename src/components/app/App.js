import './App.css';
import LookSinger from '../lookSinger';
import SearchSong from '../searchSong';
import Home from '../homePage';
import Navbar from '../navbar';
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
