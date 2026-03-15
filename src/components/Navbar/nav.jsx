import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { tabs } from "../config/navTabs";
import { useNavigate } from "react-router-dom";
import "./nav.css";

function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  const [expandedTab, setExpandedTab] = useState(null);

  const [tabStyle, setTabStyle] = useState({
    width: "0px",
    left: "0px",
    opacity: 0
  });

  const moveHighlight = (element, active = false) => {

    setTabStyle({
      width: `${element.offsetWidth}px`,
      left: `${element.offsetLeft}px`,
      opacity: 1,
      color: active ? "var(--primary)" : "var(--bg-light)"
    });

  };

  const isActive = (path) => {
    return (
      location.pathname === path ||
      location.pathname.startsWith(path + "/")
    );
  };

  const getOrderedLinks = (tab) => {

    const current = tab.links.find(link => isActive(link.to));

    if (!current) return tab.links;

    return [
      current,
      ...tab.links.filter(link => link !== current)
    ];
  };

  useEffect(() => {

    const tabElements = navRef.current?.querySelectorAll("li");
    if (!tabElements) return;

    const index = getActiveIndex(location.pathname);

    const activeTab = tabElements[index === -1 ? 0 : index];

    if (activeTab) moveHighlight(activeTab, true);

  }, [location.pathname]);

  useEffect(() => {
    setExpandedTab(null);
  }, [location.pathname]);

  const handleTabHover = ({ currentTarget }) => {

    if (expandedTab !== null) return;

    moveHighlight(currentTarget);

  };

  const handleMouseLeave = () => {

    if (expandedTab !== null) return;

    const tabElements = navRef.current?.querySelectorAll("li");
    if (!tabElements) return;

    const index = getActiveIndex(location.pathname);

    const activeTab = tabElements[index === -1 ? 0 : index];

    if (activeTab) moveHighlight(activeTab, true);;

  };

  const toggleTab = (tabId, element) => {

    const tab = tabs.find(t => t.id === tabId);
    const ordered = getOrderedLinks(tab);
    const activeLink = ordered[0];

    if (expandedTab === tabId) {
      navigate(activeLink.to);
      setExpandedTab(null);
      return;
    }

    moveHighlight(element);
    setExpandedTab(tabId);

  };

  const getActiveIndex = (pathname) => {

    for (let i = 0; i < tabs.length; i++) {

      const tab = tabs[i];

      for (const route of tab.routes) {

        if (
          pathname === route ||
          pathname.startsWith(route + "/")
        ) {
          return i;
        }

      }

    }

    return 0;
  };

  return (
    <nav>

      <div className="nav-left">

        <img
          src="/images/logo.png"
          alt="Logo"
          className="logo"
        />

        <ul
          className="nav-tabs"
          ref={navRef}
          onMouseLeave={handleMouseLeave}
        >

          <div
            className={`tab-active ${expandedTab ? "expanded" : ""} active`}
            style={tabStyle}
          />

          {tabs.map((tab) => {
            
            const orderedLinks = getOrderedLinks(tab);
            const activeLink = orderedLinks[0];
            const dropdownLinks = orderedLinks.slice(1);

            const active = isActive(activeLink.to);

            return (
              <li
                key={tab.id}
                onMouseEnter={handleTabHover}
              >

              <Link
                to={activeLink.to}
                className={`nav-btn ${active ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleTab(tab.id, e.currentTarget.parentElement);
                }}
              >
                {activeLink.label}
              </Link>

                {expandedTab === tab.id && (
                  <div className="tab-panel">

                    {dropdownLinks.map((link) => (

                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setExpandedTab(null)}
                      >
                        {link.label}
                      </Link>

                    ))}

                  </div>
                )}

              </li>
            );

          })}

        </ul>

      </div>

      <div className="nav-right">

        <input
          type="text"
          placeholder="Search..."
        />

        <button>
          Login
        </button>

      </div>

    </nav>
  );
}

export default Navbar;