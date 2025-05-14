import Logo from "@/Components/Logo";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";

export default function Component() {
  return (
    <footer className="bg-black flex w-full flex-col ">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-4 md:order-1 md:mt-0 space-y-2">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <div className="flex items-center gap-3">
              <Logo variant="dark" width={20} height={20} />
              <span className="text-small font-medium">Hero Studio</span>
            </div>
            <Divider className="h-4" orientation="vertical" />
            <Chip
              className="border-none px-0 text-default-500"
              color="success"
              variant="dot"
            >
              All systems operational
            </Chip>
          </div>
          <p className="text-center text-tiny text- md:text-start">
            &copy; 2025 Hero Studio LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
