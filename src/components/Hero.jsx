import logo from "../assets/skova-logo.jpg";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="copy">
        <span className="eyebrow">✦ &nbsp; SKOVA STORE · ONLINE</span>
        <h1>
          اختياراتك
          <br />
          <em>تبدأ من هنا.</em>
        </h1>
        <p>
          اكتشف منتجات مختارة بعناية، وتسوق بتجربة واضحة وسلسة من البداية حتى
          إتمام طلبك.
        </p>
        <a className="cta" href="#shop">
          اكتشف المتجر　↙
        </a>
      </div>

      <div className="art">
        <div className="ring r1" />
        <div className="ring r2" />
        <div className="core">
          <img className="coreLogo" src={logo} alt="SKOVA STORE" />
        </div>
        <span className="artNote">SELECTED FOR YOU · SYRIA</span>
      </div>

      <div className="heroFoot">
        <span>CURATED SELECTION</span>
        <span>SYRIA · ONLINE STORE</span>
        <span>01 — SK</span>
      </div>
    </section>
  );
}
