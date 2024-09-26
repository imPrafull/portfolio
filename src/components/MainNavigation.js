import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import menuImg from "../assets/menu.svg";
import classes from "./MainNavigation.module.css";

const links = [
  {
    label: "About",
    section: "about",
  },
  {
    label: "Skills",
    section: "skills",
  },
  {
    label: "Experience",
    section: "experience",
  },
  {
    label: "Projects",
    section: "projects",
  },
];

const NavMenu = () => {
  const [menuState, setMenuState] = useState("visible");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const firstSection = document.querySelector("#about");
      const secondSection = document.querySelector("#skills");

      if (firstSection && secondSection) {
        const firstSectionTop = firstSection.offsetTop + remToPx(6.5);
        const secondSectionTop = secondSection.offsetTop;

        if (scrollPosition <= firstSectionTop) {
          setMenuState("visible");
        } else if (
          scrollPosition >= firstSectionTop &&
          scrollPosition <= (secondSectionTop - remToPx(6.5))
        ) {
          setMenuState("hidden");
        } else {
          setMenuState("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const remToPx = (rem) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize)

  const handleLinkClick = () => {
    setIsOpen(false)
  };

  return (
    <nav className={`${classes.nav} ${classes[menuState]}`}>
        <div
            className={classes["menu-icon"]}
            onClick={() => setIsOpen(!isOpen)}
        >
            <img src={menuImg} alt="menu" />
        </div>
        <ul
            className={`${classes["nav-links"]} ${isOpen ? classes.active : ""}`}
        >
            {links.map((link) => (
                <li key={link.label}>
                    <Link
                        href="#"
                        className={classes.link}
                        to={link.section}
                        activeClass={classes.active}
                        smooth={true}
                        duration={500}
                        onClick={handleLinkClick}
                        spy={true}
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  );
};

export default NavMenu;
