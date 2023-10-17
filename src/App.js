
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';

function App() {
  return (
    
    <div className="App">
       <h1>React js Crud Operations</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmpListing/>}></Route>
        <Route path='/product/create' element={<EmpCreate/>}></Route>
        <Route path='/product/edit/:empid' element={<EmpEdit/>}></Route>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
