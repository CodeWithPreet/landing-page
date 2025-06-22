"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      label: "Lorem Ipsum",
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    },
    {
      label: "Lorem Ipsum",
      items: ["Service 1", "Service 2", "Service 3", "Service 4"],
    },
    {
      label: "Lorem Ipsum",
      items: ["About Us", "Our Team", "Contact", "Careers"],
    },
  ];

  return (
    <nav className="bg-transparent sticky  font-inter top-0 z-50">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="bg-gray-100 px-4 py-2 rounded text-lg subheading-lg">
            LOGO
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger className="flex items-center space-x-1 underline text-[#1959AC] font-medium transition-colors duration-200">
                  <span>{item.label}</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 mt-2 rounded-md border border-gray-200 bg-white shadow-md">
                  {item.items.map((subItem, subIndex) => (
                    <DropdownMenuItem
                      key={subIndex}
                      className="cursor-pointer text-gray-600 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 text-sm transition-colors duration-200">
                      {subItem}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Sign In Button (Desktop) */}
          <div className="hidden md:block">
            <Button className="bg-white text-black shadow text-sm font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="space-y-4">
              {navigationItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-gray-800 font-semibold px-4">
                    {item.label}
                  </div>
                  <div className="space-y-1 pl-8">
                    {item.items.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="text-gray-600 hover:text-blue-600 cursor-pointer py-1 transition-colors duration-200 text-sm">
                        {subItem}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="px-4 pt-4">
                <Button className="w-full bg-white text-black shadow text-sm font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
