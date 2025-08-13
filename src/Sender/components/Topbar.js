import React, { useState, useEffect } from 'react'; 
import './css/Topbar.css';
import { FaBell, FaPlus, FaTruck, FaUndo } from 'react-icons/fa';

const TopBar = () => {
  const [showActions, setShowActions] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleCreateClick = () => {
    setShowActions(prev => !prev);
  };

  const openModal = (type) => {
    setModalType(type);
    setShowActions(false);
  };

  const closeModal = () => {
    setModalType(null);
  };

  useEffect(() => {
    if (modalType) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open'); 
    };
  }, [modalType]);

  return (
    <>
      <div className="top-bar">
        <div className="left-icons">
          <div className="create-dropdown">
            <button className="icon-button" onClick={handleCreateClick}>
              <FaPlus /> <span>إنشاء</span>
            </button>

            {showActions && (
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={() => openModal('shipping')}>
                  <FaTruck /> طلب إرسال
                </div>
                <div className="dropdown-item" onClick={() => openModal('return')}>
                  <FaUndo /> طلب استرجاع
                </div>
              </div>
            )}
          </div>

          <button className="icon-button">
            <FaBell />
          </button>
        </div>

        <div className="user-info">
          <img src="hassan.jpg" alt="User" className="user-img" />
          <span className="user-name">حسن موسى</span>
        </div>
      </div>

      {/* ✅ Modal */}
      {modalType && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>{modalType === 'shipping' ? 'طلب إرسال' : 'طلب استرجاع'}</h3>
            <form>
              <div className="form-group">
                <label>اسم العميل</label>
                <input type="text" placeholder="مثال: محمد أحمد" />
              </div>
              <div className="form-group">
                <label>رقم الهاتف</label>
                <input type="text" placeholder="مثال: 055xxxxxxx" />
              </div>
              <div className="form-group">
                <label>العنوان</label>
                <input type="text" placeholder="المدينة، الحي" />
              </div>
              <div className="form-group">
                <label>تفاصيل إضافية</label>
                <textarea placeholder="أي ملاحظات..." />
              </div>
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={closeModal}>إلغاء</button>
                <button type="submit" className="submit-btn">إرسال</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TopBar;
