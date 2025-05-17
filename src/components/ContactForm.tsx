"use client";

import type React from "react";

import { Input, Textarea, Button } from "@heroui/react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = "support@herostudio.com";
    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const company = formData.get("company");
    const phone = formData.get("phone-number");
    const message = formData.get("message");

    // Create a professional pre-formatted message
    const emailBody = `Hi,
    Its ${firstName} ${lastName} from ${company}. I would like to inquire about the following:

    ${message}

    Best regards,
    ${firstName} ${lastName}
    ${company}

    Phone: ${phone}`;

    const mailtoLink = `mailto:${email}?subject=Business Inquiry from ${firstName} ${lastName} - ${company}&body=${encodeURIComponent(
      emailBody
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-6 pb-24 pt-32 sm:pb-32 lg:px-8 lg:py-56"
    >
      <div
        aria-hidden="true"
        className="px:5 absolute inset-x-0 top-3 z-0 h-full w-full transform-gpu overflow-hidden blur-3xl md:right-20 md:h-auto md:w-auto md:px-36"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br  from-[#ff4694] to-[#443f98]  opacity-20 "
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <Input
              type="text"
              name="first-name"
              id="first-name"
              label="First name"
              autoComplete="given-name"
              radius="sm"
              variant="flat"
              isRequired
            />
          </div>
          <div>
            <Input
              type="text"
              name="last-name"
              id="last-name"
              label="Last name"
              autoComplete="family-name"
              variant="flat"
              radius="sm"
              isRequired
            />
          </div>
          <div className="sm:col-span-2">
            <Input
              type="text"
              name="company"
              id="company"
              label="Company"
              autoComplete="organization"
              variant="flat"
              radius="sm"
              isRequired
            />
          </div>
          <div className="sm:col-span-2">
            <Input
              type="tel"
              name="phone-number"
              id="phone-number"
              label="Phone number"
              autoComplete="tel"
              variant="flat"
              radius="sm"
              isRequired
            />
          </div>
          <div className="sm:col-span-2">
            <Textarea
              name="message"
              id="message"
              label="Message"
              radius="sm"
              variant="flat"
              minRows={4}
              isRequired
            />
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <Button
            className="bg-gradient-to-r from-pink-100 via-teal-100 to-purple-200 text-black font-medium border-none hover:scale-105 active:scale-95 shadow-lg transition-all duration-500"
            type="submit"
            color="primary"
            endContent={<Send size={20} />}
          >
            Send message
          </Button>
        </div>
      </div>
    </form>
  );
}
