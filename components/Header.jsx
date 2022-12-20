import Link from "next/link";
export default function Header() {
  return (
    <header className="text-3xl bg-zinc-700 text-white p-5 grid grid-cols-2">
      <div className="flex justify-center">
        <Link href="/">MI blog</Link>
      </div>
      <nav className="flex justify-center">
        <ul className=" absolute text-xl invisible md:visible md:grid md:grid-cols-3">
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
