
import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Read from './components/Read';
import Create from './components/Create';
import Update from './components/Update';
import Signin from './components/Signin';
import Signup from './components/Signup';
import ViewEmployeedata from './components/ViewEmployeedata';


function App() {
  return (
    <div className="App">
      
      
      
      <BrowserRouter>
      <Routes>
      <Route  index path="/"  element={<Signin />}/>
      <Route path='/Read' element={<Read/>}/>
        <Route path='/Create' element={<Create />}/>
        <Route path='/Update' element={<Update />}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/viewemployeedata' element={<ViewEmployeedata/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
