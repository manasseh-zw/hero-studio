"use client";

import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Modal,
  ModalContent,
  ModalBody,
  cn,
} from "@heroui/react";
import type { NavbarProps } from "@heroui/react";
import { Menu } from "lucide-react";
import Logo from "@/components/Logo";
import { useTransitionRouter } from "next-view-transitions";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Showcase", href: "#integrations" },
  { name: "Integrations", href: "#integrations" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function AppNavbar(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useTransitionRouter();

  function slideInOut() {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87,0,0.13,1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%,100% 100%,100% 100%,0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%,100% 100%,100% 0%,0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13,1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

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
    <div className="w-full flex justify-center pt-5 px-3 fixed top-0 z-50">
      <Navbar
        {...props}
        className={cn(
          "max-w-full rounded-3xl  bg-transparent transition-all duration-700 ease-in-out font-roboto border-1 border-zinc-700 border-opacity-0 ",
          scrolled
            ? "bg-zinc-900 bg-opacity-70 h-14 backdrop-blur-md shadow-zinc-900/20 border-1 border-zinc-600 border-opacity-20 shadow-lg max-w-[50rem]  py-2"
            : "h-16 backdrop-blur-none max-w-6xl "
        )}
        classNames={{
          base: "backdrop-blur-none backdrop-saturate-100",
          wrapper: "px-3",
        }}
      >
        {/* Logo */}
        <NavbarBrand
          className={cn(
            "transition-all duration-500 ",
            scrolled ? "px-2  " : "px-0"
          )}
        >
          <button
            className="flex items-center bg-transparent border-0 gap-2 p-0 m-0 "
            onClick={() =>
              router.push("/", {
                onTransitionReady: slideInOut,
              })
            }
          >
            <Logo width={scrolled ? 20 : 24} height={scrolled ? 20 : 24} />
            <span
              className={cn(
                "font-harper tracking-wide text-default-foreground transition-all duration-500",
                scrolled ? "text-lg" : "text-xl"
              )}
            >
              Studio
            </span>
          </button>
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
              <a
                href={item.href}
                className={cn(
                  "text-default-600 hover:text-default-800 transition-colors duration-500",
                  scrolled ? "text-sm" : "text-base"
                )}
              >
                {item.name}
              </a>
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
                " bg-gradient-to-r from-pink-100 via-teal-100 to-purple-200 text-black font-medium border-none hover:scale-105 active:scale-95  shadow-lg transition-all duration-500",
                scrolled ? "text-sm  h-9" : "text-base  h-10"
              )}
              radius="lg"
              variant="solid"
              onPress={() =>
                router.push("/contact", {
                  onTransitionReady: slideInOut,
                })
              }
            >
              Contact
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
          placement="top"
          size="full"
          classNames={{
            base: "bg-zinc-950",
            header: "border-b border-white/10",
            body: "py-6",
            closeButton: "text-transparent hover:text-transparent",
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
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Logo width={28} height={28} />
                    <span className="text-2xl font-harper tracking-wide text-white">
                      Studio
                    </span>
                  </div>
                  <Button
                    isIconOnly
                    variant="light"
                    onPress={() => setIsMenuOpen(false)}
                    className="text-white/70 hover:text-white"
                  >
                    <Menu size={24} />
                  </Button>
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-8">
                  <Button
                    className="w-36 bg-gradient-to-r from-pink-100 via-teal-100 to-purple-200 text-black font-medium border-none hover:scale-105 active:scale-95 shadow-lg transition-all duration-500"
                    radius="lg"
                    variant="solid"
                    onPress={() => {
                      router.push("/contact", {
                        onTransitionReady: slideInOut,
                      });
                      setIsMenuOpen(false);
                    }}
                  >
                    <span className="text-xl">Contact</span>
                  </Button>

                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                        setIsMenuOpen(false);
                      }}
                      className="text-2xl font-medium text-white/90 hover:text-white transition-colors duration-300 text-left py-2"
                    >
                      {item.name}
                    </button>
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
