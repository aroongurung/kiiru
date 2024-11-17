'use client';

import Link from "next/link"; 
import { useState } from "react"; 
import { ChevronDownIcon } from "lucide-react"; 
import LogoComponent from "@/components/logothememode"; 
import ModeThemeToggle from "./modetheme-toggle";

export default function Header() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State to toggle dropdown visibility

  // Links array for easy mapping
  const links = [
    { href: "/finlandposts", label: "Finland" },
    { href: "/technologies", label: "Technology" },
    { href: "/articles", label: "Articles" },
    { href: "/aboutme", label: "About me" },
  ];

  // Category sub-links
  const categoryLinks = [
    { href: "/finlandposts", label: "Finland" },
    { href: "/contact", label: "Contact" },
    { href: "/projects", label: "Project" }
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/95 mt-2">
      <div className="container flex max-w-4xl items-center justify-center mb-2">
        <Link href={"/contact"}><h3 className="text-sm mx-auto border-y-2 border-zinc-200 font-bold hover:scale-110 transition-all">
          I am looking for an Internship  | Contact Me
        </h3></Link>
      </div>
      <nav className="border-b-2 border-zinc-100 container flex max-w-4xl items-center justify-between">
        <div className="flex gap-1 pb-1 items-center">
          {/* Logo Component */}
          <LogoComponent />
          <Link href="/" className="text-3xl font-bold">Kiiru</Link>
        </div>
        <ul className="flex items-center gap-8 text-xl font-medium">
          {/* Mapping over standard links */}
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-semibold  text-zinc-950 dark:text-zinc-100 hover:text-zinc-400 dark:hover:text-zinc-400"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Category Dropdown */}
          <li className="relative">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)} // Toggle dropdown visibility
              className="text-zinc-950 dark:text-zinc-100 flex items-center gap-1"
            >
              Category
              <ChevronDownIcon className="w-5 h-5" />
            </button>

            {/* Dropdown List */}
            {isCategoryOpen && (
              <ul className="absolute top-full left-10 mt-4 w-36 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
                {/* Mapping over Category Links */}
                {categoryLinks.map((categoryLink) => (
                  <li key={categoryLink.href}>
                    <Link
                      href={categoryLink.href}
                      className="block py-1 border-b border-zinc-200 text-lg text-center text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-600"
                      onClick={() => setIsCategoryOpen(false)} // Close dropdown after clicking
                    >
                      {categoryLink.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
        <div>
          <ModeThemeToggle />
        </div>
      </nav>
    </header>
  );
}






    /*<header className="fixed inset-x-0 top-0 z-50 bg-background/75 mt-1">
            <div className=" container flex max-w-4xl items-center justify-center mb-2">
                <h3 className="text-sm text-violet-500 mn-1 mx-auto">I am looking for Internship  | Contact Me</h3>
            </div>
    
        <nav className="border-b-2 border-zinc-200 container flex max-w-4xl items-center justify-between">
            <div>
                <Link href= '/' className="text-2xl font-bold">Aroon</Link>
            </div>
            <ul className="flex items-center gap-8 text-xl font-medium ">
                <li className="transition-colors hover:bg-accent hover:text-accent-foreground px-2 rounded-xl">
                    <Link href='/posts'>Posts</Link>
                </li>
                <li className="transition-colors hover:bg-accent hover:text-accent-foreground px-2 rounded-xl">
                    <Link href='/projects'>Projects</Link>
                </li>
                <li className="transition-colors hover:bg-accent hover:text-accent-foreground px-2 rounded-xl">
                    <Link href='/blogs'>Blogs</Link>
                </li>
                <li className="transition-colors hover:bg-accent hover:text-accent-foreground px-2 rounded-xl">
                    <Link href='/aboutme'>About Me</Link>
                </li>
                <li className="transition-colors hover:bg-accent hover:text-accent-foreground px-2 rounded-xl">
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>

            <div>              
                <ModeThemeToggle />
            </div>
        </nav>
    </header> */
  

