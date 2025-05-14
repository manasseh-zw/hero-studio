import { ButtonProps } from "@heroui/react";

export enum FrequencyEnum {
  Yearly = "yearly",
  Quarterly = "quarterly",
}

export enum TiersEnum {
  Starter = "starter",
  Pro = "pro",
  Enterprise = "enterprise",
}

export type Frequency = {
  key: FrequencyEnum;
  label: string;
  priceSuffix: string;
};

export type Tier = {
  key: TiersEnum;
  title: string;
  price:
    | {
        [FrequencyEnum.Yearly]: string;
        [FrequencyEnum.Quarterly]: string;
      }
    | string;
  priceSuffix?: string;
  href: string;
  description?: string;
  mostPopular?: boolean;
  featured?: boolean;
  features?: string[];
  buttonText: string;
  buttonColor?: ButtonProps["color"];
  buttonVariant: ButtonProps["variant"];
};

export const frequencies: Array<Frequency> = [
  { key: FrequencyEnum.Yearly, label: "Pay Yearly", priceSuffix: "per year" },
  {
    key: FrequencyEnum.Quarterly,
    label: "Pay Quarterly",
    priceSuffix: "per quarter",
  },
];

export const tiers: Array<Tier> = [
  {
    key: TiersEnum.Starter,
    title: "Starter",
    price: "Free",
    href: "#",
    featured: false,
    mostPopular: false,
    description: "Perfect for individuals and small teams getting started.",
    features: [
      "Up to 5 team members",
      "Basic AI task suggestions",
      "5 active projects",
      "2GB storage",
      "Basic analytics",
      "Email support",
    ],
    buttonText: "Get Started",
    buttonColor: "default",
    buttonVariant: "flat",
  },
  {
    key: TiersEnum.Pro,
    title: "Pro",
    description: "Ideal for growing teams that need advanced AI features.",
    href: "#",
    mostPopular: true,
    price: {
      yearly: "$99",
      quarterly: "$29",
    },
    featured: false,
    features: [
      "Up to 20 team members",
      "Advanced AI automation",
      "Unlimited projects",
      "50GB storage",
      "AI-powered insights",
      "Priority support",
      "Team analytics",
    ],
    buttonText: "Start Free Trial",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Enterprise,
    title: "Enterprise",
    href: "#",
    featured: true,
    mostPopular: false,
    description: "For large organizations requiring maximum AI capabilities.",
    price: {
      yearly: "$299",
      quarterly: "$89",
    },
    priceSuffix: "per user",
    features: [
      "Unlimited team members",
      "Custom AI model training",
      "Advanced security",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
    ],
    buttonText: "Contact Sales",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];
