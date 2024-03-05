import Link from "next/link";
import React from "react";

export default function Badge({ text, path }) {
  return (
    <Link href={`${path}`} className="w-100">
      <div className="w-20 h-8 bg-gray-200 px-4 py-1.5 rounded-lg flex justify-center items-center">
        <p className="font-sm font-medium">{text}</p>
      </div>
    </Link>
  );
}
