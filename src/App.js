import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import DashboardLayout from './Components/DashboardLayout/DashboardLayout';
import Home from './DashboardClient/Home';

const App=()=> {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<DashboardLayout component={<Home/>}/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
