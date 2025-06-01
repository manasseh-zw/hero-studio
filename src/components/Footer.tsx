import Logo from "@/components/Logo";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import { socialIcons } from "@/data/icons";
import SectionDivider from "./SectionDivider";

export default function Footer() {
  return (
    <footer className="bg-black flex w-full flex-col">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info - Takes 2 columns on large screens */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center gap-3">
              <Logo variant="dark" width={28} height={28} />
              <span className="text-xl font-semibold text-white">
                Hero Studio
              </span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed max-w-md">
              Empowering teams worldwide with cutting-edge AI-driven Project
              Management
            </p>
            <Chip
              className="border-none px-0 text-default-500"
              color="success"
              variant="dot"
            >
              All systems operational
            </Chip>

            {/* Social Media Icons - Better aligned */}
            <div className="pt-4">
              <h4 className="text-sm font-medium text-white mb-3">Follow Us</h4>
              <div className="flex gap-4">
                {socialIcons.map((social) => (
                  <Link
                    key={social.key}
                    href={social.href}
                    isExternal
                    className="transition-all duration-300 hover:scale-125 transform p-2 "
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Product Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Product
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-1 md:gap-x-0 md:space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#integrations"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="#enterprise"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Enterprise
                </Link>
              </li>
              <li>
                <Link
                  href="#security"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Resources
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-1 md:gap-x-0 md:space-y-3">
              <li>
                <Link
                  href="#blog"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#documentation"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#api"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="#tutorials"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="#webinars"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Webinars
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Support
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-1 md:gap-x-0 md:space-y-3">
              <li>
                <Link
                  href="#help-center"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#community"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#status"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  System Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <SectionDivider className="z-10" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-gray-400">
              &copy; 2025 Hero Studio LLC. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Made with ❤️ for teams everywhere
            </p>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-end">
            <Link
              href="#privacy"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="#cookies"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Cookie Policy
            </Link>
            <Link
              href="#accessibility"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
