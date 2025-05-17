"use client";

import React from "react";

export type LogoProps = {
  variant?: "light" | "dark";
  width?: number | string;
  height?: number | string;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

export default function Logo({
  variant = "dark",
  width = 80,
  height = 84,
  className = "",
  ...props
}: LogoProps) {
  const fillColor = variant === "dark" ? "#ffffff" : "#18181a";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 334.5 349.5"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      {...props}
    >
      <path
        fill={fillColor}
        d="M0.047 0.012H107.766V122.02H333.77V348.648H225.559V207.656H0.047V0.012ZM107.766 271.336L0.047 207.945V348.648H107.766V271.336ZM225.543 58.32L333.75 122V0.012H225.543V58.32Z"
        fillRule="evenodd"
      />
      <path
        fill={fillColor}
        d="M166.899 179.948C166.606 179.948 166.372 179.866 166.196 179.698C166.028 179.534 165.946 179.315 165.946 179.042C165.946 178.772 166.028 178.549 166.196 178.37C166.372 178.194 166.606 178.104 166.899 178.104C167.2 178.104 167.434 178.19 167.602 178.355C167.778 178.523 167.868 178.746 167.868 179.027C167.868 179.3 167.778 179.524 167.602 179.7C167.434 179.867 167.2 179.949 166.899 179.949Z"
      />
    </svg>
  );
}
