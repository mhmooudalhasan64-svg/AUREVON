import { money } from "../lib/format";

export default function CartDrawer({
  items,
  count,
  total,
  onClose,
  onChangeQty,
  onRemove,
  onCheckout,
}) {
  function handleShadeClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div className="shade" onClick={handleShadeClick}>
      <aside className="drawer">
        <div className="drawerHead">
          <h2>سلة التسوق ({count})</h2>
          <button onClick={onClose}>×</button>
        </div>

        {items.map((p) => (
          <div className="cartItem" key={p.id}>
            <b>{p.name}</b>
            <span>{money(p.price_syp)}</span>
            <button onClick={() => onChangeQty(p.id, -1)}>−</button>
            {p.quantity}
            <button onClick={() => onChangeQty(p.id, 1)}>＋</button>
            <button onClick={() => onRemove(p.id)}>إزالة</button>
          </div>
        ))}

        {items.length > 0 && (
          <>
            <p>
              المجموع الفرعي: <b>{money(total)}</b>
            </p>
            <small>تُحدد أجرة التوصيل عند تأكيد الطلب.</small>
            <button className="primary" onClick={onCheckout}>
              متابعة وإرسال الطلب
            </button>
          </>
        )}
      </aside>
    </div>
  );
}
