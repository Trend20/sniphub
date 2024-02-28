"use client";
import Link from "next/link";
import React from "react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Snippets",
    url: "/snippets",
  },
  {
    id: 3,
    name: "About",
    url: "/about",
  },
  {
    id: 4,
    name: "Contact",
    url: "/contact",
  },
];

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full px-36 py-10">
      <div className="flex w-30 justify-start">
        <h1>Sniphub</h1>
      </div>
      <div className="flex w-96 justify-center">
        {navLinks.map((item) => (
          <Link href={item.url} key={item.id} className="flex capitalize px-5">
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex w-30">
        <button className="flex w-full items-center justify-center p-2 bg-meta-4 rounded-md text-whiten">
          New Snippet
        </button>
      </div>
    </div>
  );
};

export default Header;
