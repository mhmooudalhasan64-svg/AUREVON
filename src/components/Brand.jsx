import logo from "../assets/skova-logo.jpg";

export default function Brand() {
  return (
    <a className="brand" href="#">
      <img className="brandLogo" src={logo} alt="SKOVA STORE" />
    </a>
  );
}
