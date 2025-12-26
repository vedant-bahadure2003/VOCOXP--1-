import { useEffect, useState } from "react";
import logo from "../assets/images/vocoxplogo.jpeg";

const sections = ["home", "about", "usecases", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 150;
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Use Cases", href: "#usecases", id: "usecases" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-500
          ${
            scrolled
              ? "bg-[#0f172a]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-blue-900/20"
              : "py-4"
          }
        `}
      >
        <div className="max-w-full px-2 md:px-10 mx-auto flex justify-between items-center">
          {/* LOGO */}
          <div
            className={`flex items-center gap-2 ${
              scrolled
                ? "bg-transparent"
                : "bg-[#0f172a]/90 rounded-xl py-1 px-3"
            }`}
          >
            <div className="p-1 rounded-xl ">
              <img src={logo} alt="VOCOxP" className="w-6 h-6 rounded-lg" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-wider">
              VOCO<span className="text-orange-500">x</span>
              <span className="text-emerald-400">P</span>
            </h1>
          </div>

          {/* NAV LINKS (DESKTOP) */}
          <nav
            className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full 
    bg-white/20 border border-white/30 backdrop-blur-lg shadow-lg"
          >
            {" "}
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`
                  px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 
                  ${
                    active === link.id
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30"
                      : scrolled
                      ? "text-white hover:text-white hover:bg-white/10"
                      : "text-black/70 hover:text-white bg-white/50"
                  }
                `}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? "text-white bg-white/10" : "text-black bg-white/10"
            }`}
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed top-0 left-0 h-full w-full bg-[#0f172a] z-50 transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-white/10 bg-[#1e293b]">
          <span className="font-bold text-xl text-white">VOCOxP</span>
          <button
            onClick={() => setOpen(false)}
            className="text-3xl text-orange-500"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col p-10 space-y-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-3xl font-black transition-all ${
                active === link.id
                  ? "text-orange-500 translate-x-4"
                  : "text-slate-300 hover:text-orange-300"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
