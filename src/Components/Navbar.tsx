"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Divider,
} from "@heroui/react";

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

import type { NavbarProps } from "@heroui/react";
import Logo from "./Logo";

export default function AppNavbar(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      {...props}
      className={`border-default-100 bg-transparent ${
        isMenuOpen ? "bg-default-200/50 dark:bg-default-100/50" : ""
      }`}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Logo */}
      <NavbarBrand>
        <Logo width={24} height={24} />
        <span className="ml-2 text-xl font-harper text-default-foreground">Studio</span>
      </NavbarBrand>

      {/* Navigation Links */}
      <NavbarContent justify="center">
        <NavbarItem isActive>
          <Link
            aria-current="page"
            className="text-default-foreground"
            href="#"
            size="sm"
          >
            Home
          </Link>
        </NavbarItem>
        {["Features", "Customers", "About Us", "Integrations"].map((item) => (
          <NavbarItem key={item}>
            <Link className="text-default-500" href="#" size="sm">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Side Buttons */}
      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem className="ml-2 !flex gap-2">
          <Button className="text-default-500" radius="full" variant="light">
            Login
          </Button>
          <Button
            className="bg-default-foreground font-medium text-background"
            color="secondary"
            // endContent={<ArrowRi}
            radius="full"
            variant="flat"
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarMenuToggle className="text-default-400 md:hidden" />

      {/* Mobile Menu */}
      <NavbarMenu className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50">
        <NavbarMenuItem>
          <Button fullWidth as={Link} href="/#" variant="faded">
            Sign In
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-4">
          <Button
            fullWidth
            as={Link}
            className="bg-foreground text-background"
            href="/#"
          >
            Get Started
          </Button>
        </NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="mb-2 w-full text-default-500" href="#" size="md">
              {item}
            </Link>
            {index < menuItems.length - 1 && <Divider className="opacity-50" />}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
