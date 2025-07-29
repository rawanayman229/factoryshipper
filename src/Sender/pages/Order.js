import React, { useState } from 'react';
import './css/Order.css';
import { FaTruck, FaUndo, FaFileInvoice, FaSearch, FaBoxes, FaHistory } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Order = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const typeFromQuery = queryParams.get("type"); 

  const [activeForm, setActiveForm] = useState(typeFromQuery || 'invoice');
  const [activeTab, setActiveTab] = useState('new');
  const [searchQuery, setSearchQuery] = useState('');
  const [trackingId, setTrackingId] = useState('');



  const [orders, setOrders] = useState([
    { id: 'ORD-2023-001', type: 'شحن', status: 'قيد المعالجة', date: '2023-05-15', customer: 'محمد أحمد' },
    { id: 'ORD-2023-002', type: 'إرجاع', status: 'مكتمل', date: '2023-05-10', customer: 'علي محمود' },
    { id: 'ORD-2023-003', type: 'فاتورة', status: 'ملغى', date: '2023-05-05', customer: 'سارة خالد' },
  ]);
const filteredOrders = orders.filter(order =>
  order.id.includes(searchQuery) || order.customer.includes(searchQuery)
);
  const handleSubmit = (e) => {
    e.preventDefault();
   const generatedId = 'ORD-' + Math.floor(Math.random() * 1000000);
setTrackingId(generatedId);
toast.success(`تم إنشاء البوليصة برقم: ${generatedId}`);


  };

  return (
    <div className="order-container">
    <ToastContainer position="top-center" />
      <div className="order-header">
        <h2 className="page-title">طلبات المرسل</h2>

        <div className="search-bar">
          <input 
            type="text" 
            placeholder="ابحث عن طلب أو بوليصة..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>

      <div className="order-tabs">
        <button 
          className={activeTab === 'new' ? 'active' : ''} 
          onClick={() => setActiveTab('new')}
        >
          <FaBoxes /> إنشاء طلب
        </button>
        <button 
          className={activeTab === 'history' ? 'active' : ''} 
          onClick={() => setActiveTab('history')}
        >
          <FaHistory /> سجل الطلبات
        </button>
      </div>

      {activeTab === 'new' ? (
        <>
          <div className="order-actions">
            <div className="order-card" onClick={() => setActiveForm('invoice')}>
              <FaFileInvoice className="icon" />
              <span>بوليصة شحن</span>
              <p>إصدار بوليصة شحن</p>
            </div>

            <div className="order-card" onClick={() => setActiveForm('shipping')}>
              <FaTruck className="icon" />
              <span>طلب إرسال</span>
              <p>جدولة إرسال شحنة</p>
            </div>

            <div className="order-card" onClick={() => setActiveForm('return')}>
              <FaUndo className="icon" />
              <span>طلب استرجاع</span>
              <p>معالجة شحنة راجعة</p>
            </div>
          </div>

          {activeForm === 'invoice' && (
            <form className="order-form" onSubmit={handleSubmit}>
              <h3>إنشاء بوليصة شحن</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>اسم المستلم</label>
                  <input type="text" placeholder="ادخل اسم المستلم" required />
                </div>
                <div className="form-group">
                  <label>رقم الهاتف</label>
                  <input type="tel" placeholder="ادخل رقم الهاتف" required />
                </div>
              </div>
              <div className="form-group">
                <label>العنوان</label>
                <input type="text" placeholder="العنوان الكامل" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>المدينة</label>
                  <select required>
                    <option value="">اختر المدينة</option>
                    <option value="riyadh">الرياض</option>
                    <option value="jeddah">جدة</option>
                    <option value="dammam">الدمام</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>قيمة الشحنة</label>
                  <input type="number" placeholder="ريال سعودي" required />
                </div>
              </div>
              <div className="form-group">
                <label>وصف المحتويات</label>
                <textarea placeholder="مثال: ملابس، كتب..." rows="3"></textarea>
              </div>
              <div className="form-actions">
                <button type="button" className="cancel-btn">إلغاء</button>
                <button type="submit" className="submit-btn">إنشاء</button>
              </div>
            </form>
          )}
{activeForm === 'invoice' && trackingId && (
  <div className="qr-preview" style={{ marginTop: '20px', textAlign: 'center' }}>
    <h4>رمز QR الخاص بالبوليصة</h4>
    <QRCodeCanvas value={trackingId} size={180} />
    <div className="qr-text" style={{ marginTop: '10px', fontWeight: 'bold' }}>
      {trackingId}
    </div>
  </div>
)}

          {activeForm === 'shipping' && (
            <form className="order-form" onSubmit={handleSubmit}>
              <h3>إنشاء طلب إرسال</h3>
              <div className="form-group">
                <label>رقم البوليصة</label>
                <input type="text" placeholder="أدخل رقم البوليصة" required />
              </div>
              <div className="form-group">
                <label>تاريخ الإرسال المطلوب</label>
                <input type="date" required />
              </div>
              <div className="form-group">
                <label>ملاحظات إضافية</label>
                <textarea placeholder="أدخل أي تفاصيل إضافية"></textarea>
              </div>
              <div className="form-actions">
                <button type="button" className="cancel-btn">إلغاء</button>
                <button type="submit" className="submit-btn">إرسال الطلب</button>
              </div>
            </form>
          )}

          {activeForm === 'return' && (
            <form className="order-form" onSubmit={handleSubmit}>
              <h3>إنشاء طلب استرجاع</h3>
              <div className="form-group">
                <label>رقم الطلب أو البوليصة</label>
                <input type="text" placeholder="أدخل رقم البوليصة أو الطلب" required />
              </div>
              <div className="form-group">
                <label>سبب الاسترجاع</label>
                <select required>
                  <option value="">اختر السبب</option>
                  <option value="رفض من العميل">رفض من العميل</option>
                  <option value="بيانات خاطئة">بيانات خاطئة</option>
                  <option value="تالف">المنتج تالف</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
              <div className="form-group">
                <label>تفاصيل إضافية</label>
                <textarea placeholder="اكتب مزيداً من التفاصيل (اختياري)"></textarea>
              </div>
              <div className="form-actions">
                <button type="button" className="cancel-btn">إلغاء</button>
                <button type="submit" className="submit-btn">إرسال الطلب</button>
              </div>
            </form>
          )}
        </>
      ) : (
        <div className="orders-table">
          <table>
            <thead>
              <tr>
                <th>رقم الطلب</th>
                <th>النوع</th>
                <th>الحالة</th>
                <th>التاريخ</th>
                <th>العميل</th>
                <th>خيارات</th>
              </tr>
            </thead>
            <tbody>
{filteredOrders.map(order => (

                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.type}</td>
                  <td>
                    <span className={`status-badge ${
                      order.status === 'مكتمل' ? 'completed' :
                      order.status === 'ملغى' ? 'cancelled' : 'processing'}`}>{order.status}</span>
                  </td>
                  <td>{order.date}</td>
                  <td>{order.customer}</td>
                  <td>
                    <button className="action-btn view-btn">عرض</button>
                    <button className="action-btn print-btn">طباعة</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Order;
