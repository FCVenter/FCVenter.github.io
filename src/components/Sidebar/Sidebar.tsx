// Sidebar.tsx
import React from "react";
import {
  IoArrowForward,
  IoArrowBack,
  IoEllipsisVertical,
} from "react-icons/io5";
import { useState } from "react";
import { getThemeClasses } from "../../theme/themeConfig";

interface SidebarProps {
  children: React.ReactNode;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

export default function Sidebar({
  children,
  expanded,
  setExpanded,
}: SidebarProps) {
  return (
    <div className={`relative ${getThemeClasses}`}>
      {/* 
        This div is used to create the background overlay when the sidebar is expanded
        It is only visible on mobile screens
      */}
      <div
        className={`fixed inset-0 -z-10 block bg-gray-400 opacity-50 ${
          expanded ? "block sm:hidden" : "hidden"
        }`}
        onClick={() => setExpanded(false)} // Close sidebar when clicking outside on mobile
      />
      <aside
        className={`box-border h-screen transition-all shadow-sm ${
          expanded ? "w-64 sm:w-64" : "w-20 sm:w-64"
        }`}
      >
        <nav className="flex h-full flex-col border-r">
          <div className="flex items-center justify-between p-4 pb-2">
            <img
              src="https://img.logoipsum.com/243.svg"
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
              alt="Logo"
            />
            <div className={`${expanded ? "" : "hidden sm:block"}`}>
              <button
                onClick={() => setExpanded(!expanded)}
                className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
              >
                {expanded ? (
                  <IoArrowBack className="h-6 w-6" />
                ) : (
                  <IoArrowForward className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          <ul className="flex-1 px-3">{children}</ul>
          <div className="flex border-t p-3">
            <img
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=Mark+Ruffalo"
              alt="User Avatar"
              className="h-10 w-10 rounded-md"
            />
            <div
              className={`
                flex items-center justify-between
                overflow-hidden transition-all ${expanded ? "ml-3 w-52" : "w-0"}
              `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">Mark Ruffalo</h4>
                <span className="text-xs text-gray-600">mark@gmail.com</span>
              </div>
              <IoEllipsisVertical className="h-6 w-6" />
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
}
