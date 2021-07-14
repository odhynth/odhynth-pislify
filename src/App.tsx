import './App.css';
import {Home} from './Home';
import { Topbar } from './Topbar';
import {Route,Link} from 'react-router-dom';

import {D3Artist} from './3D-Artist';
import {D2Artist} from './2D-Artist';
import {GameDesigner} from './GameDesigner';
import {MobileGame} from './MobileGame';
import {GameEngine} from './GameEngine';
import {GameMaking} from './GameMaking';

function App() {
  return (
    <div className="App">
      <Route exact path = "/" component = {Home}/>

      <Route exact path = "/3D-Artist" component = {D3Artist}/>
      <Route exact path = "/2D-Artist" component = {D2Artist}/>
      <Route exact path = "/GameDesigner" component = {GameDesigner}/>
      <Route exact path = "/GameEngine" component = {GameEngine}/>
      <Route exact path = "/GameMaking" component = {GameMaking}/>
      <Route exact path = "/MobileGame" component = {MobileGame}/>      
    </div>
  );
}

export default App;
