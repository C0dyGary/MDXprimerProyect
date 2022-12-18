import Link from "next/link";
export default function Header() {
  return (
    <header className="text-3xl bg-zinc-700 text-white p-5 grid grid-cols-2">
      <Link href="/">MI blog</Link>
      <nav className="container">
        <ul className="grid grid-cols-3 text-xl">
          <il>
            <Link href="/">Home</Link>
          </il>
          <il>ayuda</il>
          <il>contactos</il>
        </ul>
      </nav>
    </header>
  );
}
