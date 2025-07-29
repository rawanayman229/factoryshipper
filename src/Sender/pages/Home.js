import React from 'react';
import './css/Home.css';
import { FaWallet, FaCheckCircle, FaClock, FaGift, FaExclamationCircle } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="page-title">الرئيسي</h2>

      <div className="balance-card">
        <div className="card-header">
          <p className="account-label">رصيد الحساب</p>
          <FaWallet className="wallet-icon" />
        </div>
        <p className="sub-label">الرصيد المتاح للاستخدام</p>
        <p className="amount">ر.س ١٥٬٤٢٠٫٥</p>
        <div className="stats-row">
          <div className="stat-item">
            <p>معدل النجاح</p>
            <span>98%</span>
          </div>
          <div className="stat-item">
            <p>قيد التنفيذ</p>
            <span>45</span>
          </div>
           <div className="stat-item">
            <p>  اجمالي الطلبات </p>
            <span>45</span>
          </div>
        </div>
      </div>

      <div className="orders-summary">
        <h4>ملخص حالة الأوردرات</h4>
        <div className="tabs">
          <button className="tab active">اليوم</button>
          <button className="tab">الأسبوع</button>
          <button className="tab">الشهر</button>
        </div>

        <div className="cards">
          <div className="summary-card yellow">
            <FaClock className="summary-icon" />
            <p className="label">قيد التنفيذ</p>
            <p className="value">٣٣</p>
          </div>

          <div className="summary-card blue">
            <FaGift className="summary-icon" />
            <p className="label">منحه للعمل</p>
            <p className="value">١٠</p>
          </div>

          <div className="summary-card green">
            <FaCheckCircle className="summary-icon" />
            <p className="label">الأوردرات الناجحة</p>
            <p className="value">٨٩</p>
          </div>

          <div className="summary-card red">
            <FaExclamationCircle className="summary-icon" />
            <p className="label">انتظار القرار</p>
            <p className="value">٧</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
