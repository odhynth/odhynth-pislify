import './App.css';
import {Home} from './Home';
import { Topbar } from './Topbar';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Topbar></Topbar>
        <Home>
          
        </Home>
      </header>
    </div>
  );
}

export default App;
