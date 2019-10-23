import React, { useState } from "react";
import { Link } from "@reach/router";
import uuid from "uuid/v4";

function ResponsiveNavigation({
  navLinks,
  background,
  hoverBackground,
  linkColor,
  logo
}) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="responsive-toolbar" style={background}>
      <ul className={navOpen ? "active" : ""} style={{ background }}>
        <figure onClick={() => setNavOpen(!navOpen)}>
          <img src={logo} height="40px" width="40px" alt="logo-nav-toggler" />
        </figure>
        {navLinks.map((link, index) => {
          return (
            <li
              style={{
                background:
                  hoverIndex === index ? hoverBackground || "#999" : ""
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
              key={uuid()}
            >
              <Link to={link.path} style={{ color: linkColor }}>
                {link.text}
                <i className={link.icon} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default ResponsiveNavigation;
