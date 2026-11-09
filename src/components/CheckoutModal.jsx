import { useState } from "react";
import { money } from "../lib/format";

const FIELDS = [
  { key: "name", label: "الاسم الكامل", required: true },
  { key: "phone", label: "رقم الهاتف", required: true },
  { key: "governorate", label: "المحافظة" },
  { key: "city", label: "المدينة / المنطقة" },
  { key: "address", label: "العنوان" },
  { key: "note", label: "ملاحظات", multiline: true },
];

const EMPTY_FORM = {
  name: "",
  phone: "",
  governorate: "",
  city: "",
  address: "",
  note: "",
};

export default function CheckoutModal({ total, busy, error, onClose, onSubmit }) {
  const [form, setForm] = useState(EMPTY_FORM);

  function updateField(key) {
    return (e) => {
      const value = e.target.value;
      setForm((f) => ({ ...f, [key]: value }));
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <div className="shade">
      <section className="modal">
        <div className="drawerHead">
          <h2>بيانات الطلب</h2>
          <button onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="formGrid">
            {FIELDS.map((field) => (
              <label key={field.key}>
                {field.label}
                {field.multiline ? (
                  <textarea value={form[field.key]} onChange={updateField(field.key)} />
                ) : (
                  <input
                    required={!!field.required}
                    value={form[field.key]}
                    onChange={updateField(field.key)}
                  />
                )}
              </label>
            ))}
          </div>

          {error && <p className="err">{error}</p>}

          <p>
            المجموع الفرعي: <b>{money(total)}</b>
          </p>
          <small>التوصيل يُحدد عند تأكيد الطلب. الدفع عند الاستلام.</small>

          <button className="primary" disabled={busy}>
            {busy ? "جارٍ الإرسال..." : "تأكيد الطلب"}
          </button>
        </form>
      </section>
    </div>
  );
}
