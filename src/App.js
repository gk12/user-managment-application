import './App.css';
import Display from './component/Display';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Add from './component/Add'
import Edit from './component/Edit';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path='/' element={<Display/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/edit" element={<Edit/>}/>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
