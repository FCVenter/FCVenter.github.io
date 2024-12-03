// SidebarItem.tsx
import React, { useEffect, useState } from "react";
import { IoChevronForward } from "react-icons/io5";

interface SidebarItemProps {
  active?: boolean;
  icon: React.ReactNode;
  text: string;
  expanded: boolean;
  onClick?: () => void; // Add onClick prop
  subMenu?: SubMenuItemProps[] | null;
}

interface SubMenuItemProps extends Omit<SidebarItemProps, "expanded"> {
  expanded?: never;
  subMenu?: never;
}

function HoveredSubMenuItem({ icon, text, active }: SubMenuItemProps) {
  return (
    <div
      className={`my-2 rounded-md p-2 ${
        active ? "bg-gray-300" : "hover:bg-indigo-50"
      }`}
    >
      <div className="flex items-center">
        <span className="text-primary-500 h-6 w-6 ">{icon}</span>
        <span className="text-primary-500 ml-3">{text}</span>
      </div>
    </div>
  );
}

export default function SidebarItem({
  icon,
  active = false,
  text,
  expanded = false,
  subMenu = null,
  onClick,
}: SidebarItemProps) {
  const [expandSubMenu, setExpandSubMenu] = useState(false);

  useEffect(() => {
    if (!expanded) {
      setExpandSubMenu(false);
    }
  }, [expanded]);

  const handleClick = () => {
    if (subMenu) {
      setExpandSubMenu((curr) => !curr);
    }
    if (onClick) {
      onClick();
    }
  };

  const subMenuHeight = expandSubMenu
    ? `${((subMenu?.length ?? 0) * 40 + (subMenu ? 15 : 0)).toString()}px`
    : 0;

  return (
    <>
      <li>
        <button
          className={`
            group relative my-1 flex w-full cursor-pointer
            items-center rounded-md px-3
            py-2 font-medium transition-colors
            ${
              active && !subMenu
                ? "text-primary-500 bg-gradient-to-tr from-indigo-200 to-indigo-100"
                : "text-gray-600 hover:bg-indigo-50"
            }
            ${!expanded && "hidden sm:flex"}
          `}
          onClick={handleClick}
        >
          <span className="h-6 w-6">{icon}</span>

          <span
            className={`overflow-hidden text-start transition-all ${
              expanded ? "ml-3 w-44" : "w-0"
            }`}
          >
            {text}
          </span>
          {subMenu && (
            <div
              className={`absolute right-2 h-4 w-4 transition-transform ${
                expandSubMenu ? "rotate-90" : "rotate-0"
              }`}
            >
              <IoChevronForward />
            </div>
          )}

          {/* 
            Display item text or sub-menu items when hovered
          */}
          {!expanded && (
            <div
              className={`
                text-primary-500 invisible absolute left-full ml-6 -translate-x-3
                rounded-md bg-indigo-100 px-2
                py-1 text-sm opacity-20 transition-all
                group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
              `}
            >
              {!subMenu
                ? text
                : subMenu.map((item, index) => (
                    <HoveredSubMenuItem
                      key={index}
                      text={item.text}
                      icon={item.icon}
                      active={item.active}
                    />
                  ))}
            </div>
          )}
        </button>
      </li>
      {subMenu && (
        <ul
          className="sub-menu pl-6 overflow-hidden transition-height duration-300"
          style={{ height: subMenuHeight }}
        >
          {expanded &&
            subMenu.map((item, index) => (
              <SidebarItem key={index} {...item} expanded={expanded} />
            ))}
        </ul>
      )}
    </>
  );
}
