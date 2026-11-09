import Brand from "./Brand";

export default function Header({ count, onOpenCart }) {
  return (
    <header>
      <Brand />
      <nav>
        <a href="#home">الرئيسية</a>
        <a href="#shop">المتجر</a>
        <a href="#about">عن المتجر</a>
      </nav>
      <button className="cartBtn" onClick={onOpenCart}>
        السلة <i>{count}</i>
      </button>
    </header>
  );
}
