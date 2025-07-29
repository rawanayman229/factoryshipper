import React, { useState } from 'react';
import './css/Actions.css';
import {
  FaFileAlt, FaTruck, FaEdit, FaUndo, FaQrcode,
  FaMoneyBillWave, FaBell, FaStar
} from 'react-icons/fa';
import { QRCodeCanvas } from 'qrcode.react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


<QRCodeCanvas value="https://example.com" />

const Actions = () => {
  const [activeAction, setActiveAction] = useState(null);
  const [qrValue, setQrValue] = useState('');

  const handleCreateShipment = (e) => {
    e.preventDefault();
    const trackingId = 'ORD-' + Math.floor(Math.random() * 1000000);
    setQrValue(trackingId);
   toast.success(`تم إنشاء البوليصة برقم: ${trackingId}`, {
  position: 'top-center',
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
});

    setActiveAction('qrcode');
  };

  return (
    <div className="actions-container">
    <ToastContainer position="top-center" />

      <h2 className="page-title">مهام المرسل</h2>

      <div className="action-list">
        <div className="action-item" onClick={() => setActiveAction('create')}>
          <FaFileAlt className="icon" />
          <span>إنشاء بوليصة جديدة</span>
        </div>

        <div className="action-item" onClick={() => setActiveAction('track')}>
          <FaTruck className="icon" />
          <span>تتبع شحناتي</span>
        </div>

        <div className="action-item" onClick={() => setActiveAction('edit')}>
          <FaEdit className="icon" />
          <span>تعديل بيانات الشحنة</span>
        </div>

        <div className="action-item" onClick={() => setActiveAction('resend')}>
          <FaUndo className="icon" />
          <span>طلب استرجاع / إعادة إرسال</span>
        </div>

        <div className="action-item" onClick={() => setActiveAction('qrcode')}>
          <FaQrcode className="icon" />
          <span>طباعة QR للبوليصة</span>
        </div>

        <div className="action-item" onClick={() => setActiveAction('wallet')}>
          <FaMoneyBillWave className="icon" />
          <span>دفع رسوم الشحن</span>
        </div>

        <div className="action-item" onClick={() => setActiveAction('notify')}>
          <FaBell className="icon" />
          <span>إشعار العميل</span>
        </div>

        <div className="action-item" onClick={() => setActiveAction('rate')}>
          <FaStar className="icon" />
          <span>تقييم الخدمة</span>
        </div>
      </div>

      <div className="action-content">
        {activeAction === 'create' && (
          <form className="action-form" onSubmit={handleCreateShipment}>
            <h3>إنشاء بوليصة شحن جديدة</h3>
            <input type="text" placeholder="اسم المستلم" required />
            <input type="text" placeholder="عنوان المستلم" required />
            <input type="text" placeholder="رقم الهاتف" required />
            <textarea placeholder="تفاصيل الشحنة"></textarea>
            <button type="submit">إنشاء البوليصة</button>
          </form>
        )}

        {activeAction === 'track' && (
          <form className="action-form">
            <h3>تتبع شحنة</h3>
            <input type="text" placeholder="رقم البوليصة أو الطلب" />
            <button type="submit">تتبع الآن</button>
          </form>
        )}

        {activeAction === 'edit' && (
          <form className="action-form">
            <h3>تعديل بيانات الشحنة</h3>
            <input type="text" placeholder="رقم البوليصة" />
            <input type="text" placeholder="العنوان الجديد" />
            <button type="submit">حفظ التعديلات</button>
          </form>
        )}

        {activeAction === 'resend' && (
          <form className="action-form">
            <h3>طلب استرجاع / إعادة إرسال</h3>
            <input type="text" placeholder="رقم الطلب" />
            <select>
              <option>إعادة إرسال</option>
              <option>طلب استرجاع</option>
            </select>
            <textarea placeholder="سبب الطلب"></textarea>
            <button type="submit">إرسال الطلب</button>
          </form>
        )}

        {activeAction === 'qrcode' && (
          <div className="qrcode-box">
            <h3>رمز QR للبوليصة</h3>
            {qrValue ? (
              <>
                <QRCodeCanvas  value={qrValue} size={180} />
                <div className="qr-text" style={{ marginTop: '10px', fontWeight: 'bold' }}>
                  {qrValue}
                </div>
              </>
            ) : (
              <p>لم يتم توليد رمز بعد. أنشئ بوليصة أولاً.</p>
            )}
          </div>
        )}

        {activeAction === 'wallet' && (
          <form className="action-form">
            <h3>دفع رسوم الشحن</h3>
            <input type="text" placeholder="رقم البوليصة" />
            <input type="number" placeholder="المبلغ المطلوب" />
            <button type="submit">دفع الآن</button>
          </form>
        )}

        {activeAction === 'notify' && (
          <form className="action-form">
            <h3>إرسال إشعار للعميل</h3>
            <input type="text" placeholder="رقم الهاتف أو البوليصة" />
            <textarea placeholder="محتوى الإشعار"></textarea>
            <button type="submit">إرسال الإشعار</button>
          </form>
        )}

        {activeAction === 'rate' && (
          <form className="action-form">
            <h3>تقييم الخدمة</h3>
            <select>
              <option value="">اختر تقييمك</option>
              <option>⭐️⭐️⭐️⭐️⭐️ ممتاز</option>
              <option>⭐️⭐️⭐️⭐ جيد</option>
              <option>⭐️⭐️⭐ متوسط</option>
              <option>⭐️⭐ ضعيف</option>
            </select>
            <textarea placeholder="ملاحظات إضافية (اختياري)"></textarea>
            <button type="submit">إرسال التقييم</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Actions;
