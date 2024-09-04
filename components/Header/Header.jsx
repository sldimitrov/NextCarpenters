import Link from "next/link";
import logo from "@/assets/logo.webp";

export default function Header() {
  return (
    <header className="bg-black flex justify-around mt-3">
      <Link href="/">
        <div className="flex items-center text-white text-2xl font-sans italic">
          <img src={logo.src} className="w-32" />
          NextLevel Carpenters
        </div>
      </Link>
      <nav className="w-56">
        <ul className="h-full flex justify-around items-center">
          <li className="hover:underline hover:text-blue-400">
            <Link href="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="text-white">
              About us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
