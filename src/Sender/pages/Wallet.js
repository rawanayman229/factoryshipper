import React, { useEffect, useState } from "react";
import "./css/Wallet.css";
import { FaSync, FaPlus, FaArrowUp, FaBox, FaArrowDown } from "react-icons/fa";

const Wallet = () => {
  const fallbackTransactions = [
    {
      id: 1,
      type: "إيداع نقدي",
      amount: "+500 ر.س",
      date: "2024-01-15",
      time: "14:30",
      status: "مكتمل",
      icon: <FaArrowUp className="icon green" />,
    },
    {
      id: 2,
      type: "رسوم شحن طلب #842",
      amount: "-45 ر.س",
      date: "2024-01-15",
      time: "12:15",
      status: "مكتمل",
      icon: <FaBox className="icon blue" />,
    },
    {
      id: 3,
      type: "سحب نقدي",
      amount: "-200 ر.س",
      date: "2024-01-14",
      time: "10:00",
      status: "مكتمل",
      icon: <FaArrowDown className="icon red" />,
    },
  ];

  const [transactions, setTransactions] = useState(fallbackTransactions);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch("https://example.com/api/transactions");
        if (!res.ok) throw new Error("API Error");

        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          const formattedData = data.map((t) => ({
            id: t.id,
            type: t.type,
            amount: t.amount,
            date: t.date,
            time: t.time,
            status: t.status,
            icon:
              t.amount.startsWith("+") ? (
                <FaArrowUp className="icon green" />
              ) : t.type.includes("رسوم") ? (
                <FaBox className="icon blue" />
              ) : (
                <FaArrowDown className="icon red" />
              ),
          }));

          setTransactions(formattedData);
        }
      } catch (err) {
        console.error("خطأ في جلب البيانات، سيتم استخدام البيانات الافتراضية:", err);
        setTransactions(fallbackTransactions); // fallback
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="wallet-container">
      <div className="wallet-header">
        <button className="refresh-btn" onClick={() => window.location.reload()}>
          <FaSync /> تحديث
        </button>
      </div>

      {/* بطاقة الرصيد */}
      <div className="wallet-card">
        <div className="wallet-top">
          <div className="wallet-info">
            <span className="wallet-label">الرصيد الحالي</span>
            <span className="wallet-sub">الرصيد المتاح للاستخدام</span>
          </div>
          <div className="wallet-amount">15,420.5 ر.س</div>
        </div>
        <div className="wallet-actions">
          <button className="deposit-btn">
            <FaPlus /> إيداع
          </button>
        </div>
        <div className="wallet-stats">
          <div>
            <span className="stat-value">70-</span>
            <span className="stat-label">رسوم الطلبات</span>
          </div>
          <div>
            <span className="stat-value">200-</span>
            <span className="stat-label">إجمالي السحوبات</span>
          </div>
          <div>
            <span className="stat-value green">+1,500</span>
            <span className="stat-label">إجمالي الإيداعات</span>
          </div>
        </div>
      </div>

      {/* سجل المعاملات */}
      <div className="transactions-section">
        <div className="transactions-header">
          <h3>سجل المعاملات</h3>
          <button className="show-all">عرض الكل</button>
        </div>
        <div className="transactions-list">
          {transactions.map((t) => (
            <div className="transaction-item" key={t.id}>
              <div className="transaction-icon">{t.icon}</div>
              <div className="transaction-info">
                <div className="transaction-title">{t.type}</div>
                <div className="transaction-date">
                  {t.time} - {t.date}
                </div>
              </div>
              <div className="transaction-amount">{t.amount}</div>
              <span className="transaction-status">{t.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
