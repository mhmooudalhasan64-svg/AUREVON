const WHATSAPP_URL = "https://wa.me/84384552437";
const WHATSAPP_DISPLAY = "+84 38 455 2437";

const SERVICES = [
  {
    title: "شحن جميع منصات الألعاب",
    text: "شحن فوري وآمن لجميع الألعاب والمتاجر العالمية",
  },
  {
    title: "رصيد تطبيقات",
    text: "جميع التطبيقات والخدمات الرقمية بأمان وسرعة",
  },
  {
    title: "تفعيل بطاقات فيزا",
    text: "تفعيل بطاقات فيزا بكل سهولة وأمان في جميع أنحاء العالم",
  },
  {
    title: "إنشاء صور احترافية ومميزة",
    text: "تصاميم إبداعية بجودة عالية تخطف الأنظار",
  },
  {
    title: "إنشاء فيديوهات إعلانية",
    text: "فيديوهات احترافية تزيد من مبيعاتك وتصل لجمهور أكبر",
  },
  {
    title: "تصميم لوغو احترافي",
    text: "هوية بصرية فريدة تعكس وتميز علامتك التجارية",
  },
  {
    title: "إكسسوارات هواتف",
    text: "كل ما تحتاجه لهاتفك في مكان واحد",
  },
  {
    title: "أشياء مميزة",
    text: "منتجات نادرة ومميزة تضيف لمسة مختلفة لحياتك",
  },
  {
    title: "تصاميم CNC",
    text: "دقة عالية في التنفيذ لجميع احتياجاتك",
  },
];

const TRUST = [
  "أسعار تنافسية في كل سوريا",
  "جودة عالية وضمان",
  "سرعة في التنفيذ والتسليم",
  "دعم فني على مدار الساعة",
  "ثقة آلاف العملاء",
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="sectionHead">
        <div>
          <span className="eyebrow">OUR SERVICES</span>
          <h2>
            خدماتنا <em>الرقمية</em>
          </h2>
        </div>
        <span className="index">02 / SERVICES</span>
      </div>

      <div className="svcGrid">
        {SERVICES.map((s) => (
          <article className="svcCard" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>

      <ul className="trust">
        {TRUST.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <div className="contact">
        <span className="eyebrow">CONTACT</span>
        <h3>للتواصل والطلب</h3>
        <a className="wa" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          واتساب ・ {WHATSAPP_DISPLAY}
        </a>
      </div>
    </section>
  );
}
