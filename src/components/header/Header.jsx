import "./Header.css"

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="https://i.imgur.com/C9d9ruA.png" alt="logo" />
      <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
