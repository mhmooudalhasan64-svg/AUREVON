import Brand from "./Brand";

export default function Footer() {
  return (
    <footer>
      <Brand />
      <span>© {new Date().getFullYear()} SKOVA STORE</span>
      <span>
        تصميم وتطوير <b className="aurevon">AUREVON | أوريفون</b>
      </span>
    </footer>
  );
}
