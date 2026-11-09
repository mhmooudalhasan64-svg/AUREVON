export default function SuccessModal({ order, onClose }) {
  return (
    <div className="shade">
      <section className="modal success">
        <b>✓</b>
        <h2>تم استلام طلبك</h2>
        <p>رقم الطلب: {order.order_number}</p>
        <button className="primary" onClick={onClose}>
          متابعة التسوق
        </button>
      </section>
    </div>
  );
}
