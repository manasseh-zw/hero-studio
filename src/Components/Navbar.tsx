"use client";

import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Divider,
  cn,
} from "@heroui/react";
import Logo from "./Logo";
import type { NavbarProps } from "@heroui/react";

const menuItems = [
  "About",
  "Blog",
  "Customers",
  "Pricing",
  "Enterprise",
  "Changelog",
  "Documentation",
  "Contact Us",
];

export default function AppNavbar(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex justify-center px-4 pt-5 fixed top-0 z-50">
      <Navbar
        {...props}
        className={cn(
          "max-w-full rounded-full bg-transparent transition-all duration-500 ease-in-out font-roboto border-1 border-zinc-700 border-opacity-0   ",
          scrolled
            ? "bg-zinc-900 bg-opacity-70 h-14 backdrop-blur-md shadow-zinc-900/20 border-1 border-zinc-600 border-opacity-15 shadow-lg max-w-5xl px-3 py-2"
            : "h-16 backdrop-blur-none max-w-6xl"
        )}
        classNames={{
          base: "backdrop-blur-none backdrop-saturate-100",
        }}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        {/* Logo */}
        <NavbarBrand className="transition-all duration-500">
          <Logo width={scrolled ? 20 : 24} height={scrolled ? 20 : 24} />
          <span
            className={cn(
              "ml-2 font-harper  tracking-wide text-default-foreground transition-all duration-500",
              scrolled ? "text-lg" : "text-xl"
            )}
          >
            Studio
          </span>
        </NavbarBrand>

        {/* Navigation Links - Hidden on mobile */}
        <NavbarContent
          className={cn(
            "hidden md:flex transition-all duration-500 ease-in-out",
            scrolled ? "gap-4" : "gap-6"
          )}
          justify="center"
        >
          <NavbarItem isActive>
            <Link
              aria-current="page"
              className={cn(
                "text-default-foreground transition-all duration-500",
                scrolled ? "text-sm" : "text-base"
              )}
              href="#"
            >
              Home
            </Link>
          </NavbarItem>
          {["Features", "Customers", "About Us", "Integrations"].map((item) => (
            <NavbarItem key={item}>
              <Link
                className={cn(
                  "text-default-500 hover:text-default-700 transition-colors duration-500",
                  scrolled ? "text-sm" : "text-base"
                )}
                href="#"
              >
                {item}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Right Side Buttons */}
        <NavbarContent className="hidden md:flex" justify="end">
          <NavbarItem
            className={cn(
              "ml-2 !flex transition-all duration-500",
              scrolled ? "gap-1" : "gap-3"
            )}
          >
            <Button
              className={cn(
                "text-default-500 hover:text-default-700 transition-all duration-500",
                scrolled ? "text-sm px-3 h-8" : "text-base px-4 h-10"
              )}
              radius="full"
              variant="light"
            >
              Login
            </Button>
            <Button
              className={cn(
                "bg-white text-black font-medium transition-all duration-500",
                scrolled ? "text-sm px-3 h-8" : "text-base px-4 h-10"
              )}
              radius="full"
              variant="solid"
            >
              Get Started
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu Toggle */}
        <NavbarMenuToggle className="text-default-400 md:hidden" />

        {/* Mobile Menu - Positioned below the navbar */}
        {isMenuOpen && (
          <div className="fixed top-[70px] left-0 right-0 bg-black/90 backdrop-blur-md shadow-xl rounded-b-3xl mt-2 mx-4 overflow-hidden">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                <div className="flex flex-col gap-3 mb-6">
                  <Button
                    fullWidth
                    as={Link}
                    href="/#"
                    variant="faded"
                    className="text-white/80"
                  >
                    Sign In
                  </Button>
                  <Button
                    fullWidth
                    as={Link}
                    className="bg-white text-black"
                    href="/#"
                    radius="full"
                  >
                    Get Started
                  </Button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-1">
                  <NavbarMenuItem>
                    <Link
                      className="block w-full py-2 text-white font-medium"
                      href="#"
                      size="md"
                    >
                      Home
                    </Link>
                    <Divider className="opacity-30 my-1" />
                  </NavbarMenuItem>

                  {["Features", "Customers", "About Us", "Integrations"].map(
                    (item) => (
                      <NavbarMenuItem key={`nav-${item}`}>
                        <Link
                          className="block w-full py-2 text-white/70"
                          href="#"
                          size="md"
                        >
                          {item}
                        </Link>
                        <Divider className="opacity-30 my-1" />
                      </NavbarMenuItem>
                    )
                  )}
                </div>

                {/* Additional Menu Items */}
                <div className="mt-6 space-y-1">
                  {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                      <Link
                        className="block w-full py-2 text-white/70"
                        href="#"
                        size="md"
                      >
                        {item}
                      </Link>
                      {index < menuItems.length - 1 && (
                        <Divider className="opacity-30 my-1" />
                      )}
                    </NavbarMenuItem>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Navbar>
    </div>
  );
}
