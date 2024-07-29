import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-center space-x-4">
      <Link href="/">
        <a className="text-blue-500 hover:underline">Home</a>
      </Link>
      <Link href="/about">
        <a className="text-blue-500 hover:underline">About</a>
      </Link>
    </nav>
  );
}
