import React from 'react';
import './css/Wallet.css';
import { FaMoneyBillWave, FaExchangeAlt, FaKey } from 'react-icons/fa';

const Wallet = () => {
  return (
    <div className="wallet-container">
      <h2 className="page-title">المحفظة</h2>

      <div className="wallet-cards">
        <div className="wallet-card">
          <FaMoneyBillWave className="icon" />
          <p>سحب من المحفظة</p>
        </div>

        <div className="wallet-card">
          <FaExchangeAlt className="icon" />
          <p>استعلام عن الرصيد</p>
        </div>

        <div className="wallet-card">
          <FaKey className="icon" />
          <p>إرسال رقم سري للمستلم</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
