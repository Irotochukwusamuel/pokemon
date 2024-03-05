import Image from "next/image";
import Link from "next/link";

export default function PokemonCard({ name, image, path }) {
  return (
    <div className="min-w-44 max-w-56 h-56 flex-auto">
      <div className="flex justify-center items-center w-100 h-44 rounded-xl mb-3 bg-gray-200">
        <Link href={path}>
          <Image
            src={image}
            width={176}
            height={176}
            alt="Pokemon Image"
            quality={100}
          />
        </Link>
      </div>
      <div className="w-100">
        <p className="text-base font-normal first-letter:capitalize">{name}</p>
      </div>
    </div>
  );
}
