import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className=" flex space-x-5 border h-14 mb-5 items-center px-5">
      <Link href={"/"}>
        <AiFillBug />
      </Link>
      <ul className=" flex gap-5">
        {links.map((li) => (
          <Link
            key={li.href}
            className=" text-zinc-500 hover:text-zinc-900 transition-colors"
            href={li.href}
          >
            {li.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
