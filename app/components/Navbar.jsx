import Image from "next/image";
import Link from "next/link";
import Logo from "./pokemon-logo.png";
import SearchInput from "./SearchInput";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-12 py-4 border-2 mb-5 w-100">
      <Link href="/">
        <div className="flex gap-4 items-center">
          <Image
            src={Logo}
            alt="Pokemon logo"
            width={16}
            quality={100}
            placeholder="blur"
          />
          <h1 className="font-bold text-base">PokePedia</h1>
        </div>
      </Link>
    </nav>
  );
}
