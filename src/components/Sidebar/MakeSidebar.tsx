// MakeSidebar.tsx
import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Ensure correct path
import SidebarItem from "./SidebarItem";

interface MakeSidebarProps {
  children: React.ReactNode;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

export default function MakeSidebar({
  children,
  expanded,
  setExpanded,
}: MakeSidebarProps) {
  return (
    <Sidebar expanded={expanded} setExpanded={setExpanded}>
      {children}
    </Sidebar>
  );
}

// Optionally, you can add helper components for NavSection and NavItem
MakeSidebar.NavSection = function NavSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <h3 className="px-3 text-gray-500 uppercase text-sm mb-2">{title}</h3>
      <ul>{children}</ul>
    </div>
  );
};

MakeSidebar.NavItem = function NavItem({
  icon,
  text,
  onClick,
}: {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}) {
  return (
    <SidebarItem
      icon={icon}
      text={text}
      expanded={true} // Pass the `expanded` state if needed
      onClick={onClick}
    />
  );
};
