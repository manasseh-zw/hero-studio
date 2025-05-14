import Logo from "@/Components/Logo";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";

export default function Footer() {
  return (
    <footer className="bg-black flex w-full flex-col">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo variant="dark" width={24} height={24} />
              <span className="text-lg font-medium text-white">
                Hero Studio
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering teams with AI-driven project management solutions.
            </p>
            <Chip
              className="border-none px-0 text-default-500"
              color="success"
              variant="dot"
            >
              All systems operational
            </Chip>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#integrations"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#blog"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Divider className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-400">
            &copy; 2025 Hero Studio LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
