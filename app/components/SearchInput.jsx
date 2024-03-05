import Image from "next/image"
import SearchIcon from "./search-icon.png";

export default function SearchInput({ className, onInput }) {
  return (
    <div className={`relative ${className}`}>
    <Image
      className="absolute left-4 top-1/2 -translate-y-1/2"
      src={SearchIcon}
      alt="Search Icon"
      width={16}
    />
    <input
      onChange={onInput}
      type="text"
      className="ps-12 pe-4 py-5 h-5 rounded-md border-2 bg-input_fill outline-0"
      placeholder="Search"
    />
  </div>
  )
}
