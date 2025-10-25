"use client";

export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-[1170px] mx-auto px-4 wide:px-0 w-full flex flex-col ${className}`}>
      {children}
    </div>
  );
}
