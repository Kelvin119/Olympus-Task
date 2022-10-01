import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'
import Home from './Home';
import Task from './Task';
import Add from './Add';
import Profile from './Profile';


function App() {
  return (
    <Router>
      <Navbar />
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/task' element={<Task />} />
            <Route path='/add' element={<Add />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
    </Router>




    // <Router>
    //   <div className="App">
    //     <Navbar />
    //     <Task />

    //   </div>
    // </Router>
  );
}

export default App;
