import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <ul className="header-button">
        <Link href={"/"}>
          <li className="header-button-item">Home</li>
        </Link>
        <Link href={"/about"}>
          <li className="header-button-item">About</li>
        </Link>
        <Link href={"/contact"}>
          <li className="header-button-item">Contact</li>
        </Link>
      </ul>
    </div>
  );
}
