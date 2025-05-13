"use client";

import { frequencies, FrequencyEnum, tiers } from "@/data/pricing";
import {
  Spacer,
  Tabs,
  Tab,
  Chip,
  Card,
  cn,
  CardHeader,
  Divider,
  CardBody,
  CardFooter,
  Button,
} from "@heroui/react";
import { CircleCheck } from "lucide-react";
import React from "react";

export default function Pricing() {
  const [selectedFrequency, setSelectedFrequency] = React.useState(
    frequencies[0]
  );

  const onFrequencyChange = (selectedKey: React.Key) => {
    const frequencyIndex = frequencies.findIndex((f) => f.key === selectedKey);

    setSelectedFrequency(frequencies[frequencyIndex]);
  };

  return (
    <div className="relative flex mx-auto max-w-4xl flex-col items-center py-20">
      <div
        aria-hidden="true"
        className="px:5 absolute inset-x-0 top-3 z-0 h-full w-full transform-gpu overflow-hidden blur-3xl md:right-20 md:h-auto md:w-auto md:px-36"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] opacity-30"
          style={{
            background:
              "linear-gradient(to top right, rgba(60, 40, 80, 0.8), rgba(120, 80, 120, 0.8), rgba(200, 120, 150, 0.8))",
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        aria-hidden="true"
        className="px:5 absolute inset-x-0 top-3 z-0 h-full w-full transform-gpu overflow-hidden blur-3xl md:right-20 md:h-auto md:w-auto md:px-36"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] opacity-30"
          style={{
            background:
              "linear-gradient(to top right, rgba(60, 40, 80, 0.8), rgba(120, 80, 120, 0.8), rgba(200, 120, 150, 0.8))",
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="flex max-w-xl flex-col text-center gap-8">
        <div className="text-center font-roboto font-bold leading-[1.2] tracking-tight text-[40px]">
          <div className="bg-hero-section-title bg-clip-text text-transparent">
            Flexible Pricing <br />{" "}
          </div>
        </div>
        <p className="mx-auto text-center font-small leading-7 text-default-600 text-pretty sm:w-[600px] sm:text-[18px]">
          Choose a plan that fits your team&apos;s needs – from startups to
          enterprises. Scale with confidence and get the most out of every
          project.
        </p>
      </div>

      <div></div>
      <Spacer y={8} />
      <Tabs
        classNames={{
          tabList: "bg-default-100/70",
          cursor: "bg-background dark:bg-default-200/30",
          tab: "data-[hover-unselected=true]:opacity-90",
        }}
        radius="full"
        onSelectionChange={onFrequencyChange}
      >
        <Tab
          key={FrequencyEnum.Yearly}
          aria-label="Pay Yearly"
          className="pr-0.5"
          title={
            <div className="flex items-center gap-2">
              <p>Pay Yearly</p>
              <Chip color="secondary" variant="flat">
                Save 25%
              </Chip>
            </div>
          }
        />
        <Tab key={FrequencyEnum.Quarterly} title="Pay Quarterly" />
      </Tabs>
      <Spacer y={12} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.key}
            isBlurred
            className={cn("bg-zinc/60 p-3 dark:bg-default-100/50", {
              "!border-small border-secondary/50": tier.mostPopular,
            })}
            shadow="md"
          >
            {tier.mostPopular ? (
              <Chip
                className="absolute right-4 top-4"
                color="secondary"
                variant="flat"
              >
                Most Popular
              </Chip>
            ) : null}
            <CardHeader className="flex flex-col items-start gap-2 pb-6">
              <h2 className="text-large font-medium">{tier.title}</h2>
              <p className="text-medium text-default-500">{tier.description}</p>
            </CardHeader>
            <Divider />
            <CardBody className="gap-8">
              <p className="flex items-baseline gap-1 pt-2">
                <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-4xl font-semibold leading-7 tracking-tight text-transparent">
                  {typeof tier.price === "string"
                    ? tier.price
                    : tier.price[selectedFrequency.key]}
                </span>
                {typeof tier.price !== "string" ? (
                  <span className="text-small font-medium text-default-400">
                    {tier.priceSuffix
                      ? `/${tier.priceSuffix}/${selectedFrequency.priceSuffix}`
                      : `/${selectedFrequency.priceSuffix}`}
                  </span>
                ) : null}
              </p>
              <ul className="flex flex-col gap-2">
                {tier.features?.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CircleCheck className="text-secondary" width={24} />
                    <p className="text-default-500">{feature}</p>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                fullWidth
                color="secondary"
                href={tier.href}
                variant={tier.buttonVariant}
              >
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
