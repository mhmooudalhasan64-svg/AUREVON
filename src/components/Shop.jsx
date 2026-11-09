import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

export default function Shop({ cats, products, loading, error, onAdd }) {
  const [activeCat, setActiveCat] = useState("all");
  const [search, setSearch] = useState("");

  const shown = useMemo(() => {
    const q = search.toLowerCase();
    return products.filter(
      (p) =>
        (activeCat === "all" || p.category_id === activeCat) &&
        (p.name.toLowerCase().includes(q) ||
          (p.description || "").toLowerCase().includes(q))
    );
  }, [products, activeCat, search]);

  let content;
  if (loading) {
    content = <div className="empty">نجهّز لك المتجر...</div>;
  } else if (error && !products.length) {
    content = <div className="empty">{error}</div>;
  } else if (!shown.length) {
    content = (
      <div className="empty">
        <b>SK.</b>
        <h3>{products.length ? "لا توجد نتائج مطابقة" : "نعمل على تجهيز المنتجات"}</h3>
        <p>
          {products.length
            ? "جرّب البحث بكلمة أخرى."
            : "ستظهر المنتجات هنا فور إضافتها إلى المتجر."}
        </p>
      </div>
    );
  } else {
    content = (
      <div className="grid">
        {shown.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    );
  }

  return (
    <section className="shop" id="shop">
      <div className="sectionHead">
        <div>
          <span className="eyebrow">THE COLLECTION</span>
          <h2>
            تسوّق <em>حسب اختيارك</em>
          </h2>
        </div>
        <span className="index">01 / PRODUCTS</span>
      </div>

      <div className="tools">
        <div className="cats">
          <button
            className={activeCat === "all" ? "active" : ""}
            onClick={() => setActiveCat("all")}
          >
            الكل
          </button>
          {cats.map((c) => (
            <button
              key={c.id}
              className={activeCat === c.id ? "active" : ""}
              onClick={() => setActiveCat(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>
        <input
          className="search"
          placeholder="ابحث عن منتج..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {content}
    </section>
  );
}
