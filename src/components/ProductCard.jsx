import { money } from "../lib/format";

export default function ProductCard({ product, onAdd }) {
  const image = product.image_urls?.[0];

  return (
    <article className="product">
      <div className="photo">
        {image ? (
          <img src={image} alt={product.name} />
        ) : (
          <div className="placeholder">
            <b>SK</b>
            <small>SKOVA SELECT</small>
          </div>
        )}
        {product.is_featured && <span className="featured">اختيار مميز</span>}
      </div>

      <div className="pInfo">
        <h3>{product.name}</h3>
        <p>{product.description || "منتج متاح من SKOVA STORE"}</p>
        <div className="pBottom">
          <strong>{money(product.price_syp)}</strong>
          <button onClick={() => onAdd(product)}>أضف للسلة ＋</button>
        </div>
      </div>
    </article>
  );
}
