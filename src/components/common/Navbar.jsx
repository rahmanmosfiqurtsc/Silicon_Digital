import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Container from "./Container";
import { Link } from "react-router";

export default function Navbar() {
  const [darkMode, setdarkMode] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#About" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div>
      <Container>
        <div className={"transition-colors duration-300"}>
          <div className="flex h-20 w-[1296px] items-center justify-between">
            <div className="flex gap-12">
              {/* Logo */}
              <Link to="/" className="flex">
                <img src="/logo.png" alt="xxxx"></img>
                <span className="text-2xl font-bold">Silicon</span>
              </Link>

              {/* Navigation */}
              <div className=" items-center gap-7 flex">
                {/* Services Dropdown */}
                <div className=" flex gap-7">
                  <Link
                    to="/service"
                    
                    className="flex items-center gap-1.5 text-[15px] font-medium text-gray-400 transition hover:text-indigo-500"
                  >
                    Services
                    <svg
                      className={`h-4 w-4 transition-transform`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </Link>
                  <Link to="/portfolio" >Portfolio</Link>
                  <Link>About</Link>
                  <Link>Blog</Link>
                  <Link>Contact</Link>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex shrink-0 items-center gap-3">
              {/* Theme Toggle */}

              <ThemeToggle />
              {/* Contact Button */}
              <a
                href="#contact"
                className="ml-1 rounded-sm bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-600"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
