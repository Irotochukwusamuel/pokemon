import React from "react";

export default function SectionContainer({ children, title, className }) {
  return (
    <>
      <div className="p-4 font-bold text-lg">
        <h1>{title}</h1>
      </div>
      <div className={`py-4 text-sm flex flex-wrap ${className}`}>{children}</div>
    </>
  );
}
