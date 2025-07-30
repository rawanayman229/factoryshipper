import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Rightsidebar from './Sender/components/Rightsidebar';
import Order from './Sender/pages/Order';
import Actions from './Sender/pages/Actions';
import Wallet from './Sender/pages/Wallet';
import Home from './Sender/pages/Home';
import TopBar from './Sender/components/Topbar';
import Signup from './Sender/pages/Signup';
import Login from './Sender/pages/Login';

const Layout = () => {
  const location = useLocation();
const isAuthPage = location.pathname === '/' || location.pathname === '/signup' || location.pathname === '/login';

  return (
    <div className='row'>
      <div className='col-10'>
        {!isAuthPage && <TopBar />}
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<Login/>}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </div>
      {!isAuthPage && (
        <div className='col-2'>
          <Rightsidebar />
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default App;
