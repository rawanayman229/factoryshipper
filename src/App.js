import React from 'react';
import Rightsidebar from './Sender/components/Rightsidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Order from './Sender/pages/Order';
import Actions from './Sender/pages/Actions';
import Wallet from './Sender/pages/Wallet';
import Home from './Sender/pages/Home';
import TopBar from './Sender/components/Topbar'

const App = () => {
  return (
    <Router>
      <div className='row'>
        <div className='col-10'>
          <TopBar/>
           <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/actions" element={<Actions />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
          
        </div>
        <div className='col-2'>
       
          <Rightsidebar />
        </div>
      </div>
    </Router>
  );
};

export default App;
