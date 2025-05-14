"use client";

import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Modal,
  ModalContent,
  ModalBody,
  Divider,
  cn,
} from "@heroui/react";
import Logo from "./Logo";
import type { NavbarProps } from "@heroui/react";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Showcase", href: "#showcase" },
  { name: "Integrations", href: "#integrations" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
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
            ? "bg-zinc-900 bg-opacity-70 h-14 backdrop-blur-md shadow-zinc-900/20 border-1 border-zinc-600 border-opacity-20 shadow-lg max-w-5xl px-1 py-2"
            : "h-16 backdrop-blur-none max-w-6xl"
        )}
        classNames={{
          base: "backdrop-blur-none backdrop-saturate-100",
        }}
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
          {navItems.map((item) => (
            <NavbarItem key={item.name}>
              <Link
                className={cn(
                  "text-default-600 hover:text-default-800 transition-colors duration-500",
                  scrolled ? "text-sm" : "text-base"
                )}
                href={item.href}
              >
                {item.name}
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
                " bg-gradient-to-r from-pink-100 via-teal-100 to-purple-200 text-black  border-none hover:scale-105 active:scale-95  shadow-lg transition-all duration-500",
                scrolled ? "text-sm px-3 h-8" : "text-base px-4 h-10"
              )}
              radius="lg"
              variant="solid"
            >
              Get Started
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu Toggle */}
        <NavbarContent className="md:hidden" justify="end">
          <NavbarItem>
            <Button
              isIconOnly
              variant="light"
              onPress={() => setIsMenuOpen(true)}
              className="text-default-400"
              endContent={<Menu className="text-white/70" />}
            ></Button>
          </NavbarItem>
        </NavbarContent>

        <Modal
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          placement="center"
          className="mb-10"
          classNames={{
            base: "bg-black/70 backdrop-blur-xl",
            header: "border-b border-white/10",
            body: "py-6",
            closeButton: "text-white/70 hover:text-white",
            backdrop: "bg-black/40 backdrop-blur-xl",
          }}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeIn",
                },
              },
            },
          }}
        >
          <ModalContent className="p-4">
            <ModalBody>
              <div className="space-y-6">
                <div className="flex flex-col gap-3">
                  <Button
                    fullWidth
                    as={Link}
                    className="bg-white font-bold text-black"
                    href="/#"
                    radius="lg"
                  >
                    Get Started
                  </Button>
                </div>

                <div className="space-y-1">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        className="block w-full py-3 text-white/80 hover:text-white"
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <Divider className="opacity-30" />
                    </div>
                  ))}
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Navbar>
    </div>
  );
}
