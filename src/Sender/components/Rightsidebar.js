import React from 'react';
import './css/Rightsidebar.css';
import { NavLink } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaTasks, FaWallet } from 'react-icons/fa';

const Rightsidebar = () => {
  return (
    <>
      <div className='top'>
        <h1>StakeExpress</h1>
        <p>لوحة المرسل</p>
      </div>

      <div className='bottom'>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              الرئيسي <span className="icon-space"><FaHome className="icon" /></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/order" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              الطلبات <span className="icon-space"><FaShoppingCart className="icon" /></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/actions" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              المهام <span className="icon-space"><FaTasks className="icon" /></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/wallet" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              المحفظة <span className="icon-space"><FaWallet className="icon" /></span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Rightsidebar;
