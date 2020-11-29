import './App.css';
import LookSinger from '../lookSinger';
import SearchSong from '../searchSong';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <Router> 
      <div className='app'>
        <Route path='/' component={() => <h1>Welcome to Last.fm</h1>} exact/>
        <Route path='/searchSong/' component={SearchSong} />
        <Route path='/lookSinge/' component={LookSinger}/>
      </div>
    </Router>
  );
}

export default App;
