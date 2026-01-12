import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import DashboardLayout from './Components/DashboardLayout/DashboardLayout';
import Home from './DashboardClient/Home';
import Main from './DashboardClient/HomeComponents/RightSide/Main';
import ManageUser from './DashboardClient/ManageUser';
import MainManage from './DashboardClient/ManageUserComponents/RightSide/MainManage';
import Login from './Views/Auth/Login';

const App=()=> {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<DashboardLayout component={<Home/>} componentRightSide={<Main/>}  />} />
          <Route path='/manage' element={<DashboardLayout component={<ManageUser/>} componentRightSide={<MainManage/>}  />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
