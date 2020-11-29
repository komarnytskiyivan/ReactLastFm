import './App.css';
import LookSinger from '../lookSinger';
import SearchSong from '../searchSong';
import Home from '../homePage';
import Navbar from '../navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar />
      <div className='app'>
        <Route path='/' component={Home} exact/>
        <Route path='/searchSong/' component={SearchSong} exact/>
        <Route path='/lookSinge/' component={LookSinger} exact/>
      </div>
    </Router>
  );
}

export default App;
