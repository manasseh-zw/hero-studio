"use client";
import { cn } from "@heroui/theme";
import { useEffect, useRef, useState } from "react";

export default function SectionDivider({ className }: { className?: string }) {
  const dividerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!dividerRef.current) return;

    const divider = dividerRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = divider.getBoundingClientRect();
      const x = e.clientX - window.scrollX;
      const distanceFromDivider = Math.abs(x - (rect.left + rect.width / 2));

      // Only update the gradient if mouse is within reasonable distance
      if (distanceFromDivider < 300) {
        setIsActive(true);
        const gradientPosition = ((x - rect.left) / rect.width) * 100;
        divider.style.background = `
          linear-gradient(
            90deg, 
            transparent 0%, 
            rgba(60, 40, 80, 0.1) ${Math.max(0, gradientPosition - 40)}%, 
            rgba(120, 80, 120, 0.2) ${Math.max(0, gradientPosition - 20)}%, 
            rgba(200, 120, 150, 0.3) ${gradientPosition}%, 
            rgba(120, 80, 120, 0.2) ${Math.min(100, gradientPosition + 20)}%, 
            rgba(60, 40, 80, 0.1) ${Math.min(100, gradientPosition + 40)}%, 
            transparent 100%
          )
        `;
      } else {
        setIsActive(false);
      }
    };

    const handleMouseLeave = () => {
      // Reset to brilliant white gradient when mouse leaves
      divider.style.background = `
        linear-gradient(
          90deg, 
          transparent 0%, 
          rgba(255, 255, 255, 0.5) 30%, 
          rgba(255, 255, 255, 1) 50%, 
          rgba(255, 255, 255, 0.5) 70%, 
          transparent 100%
        )
      `;
      setIsActive(false);
    };

    // Apply default brilliant white gradient initially
    handleMouseLeave();

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={cn("w-full flex justify-center py-12", className)}>
      <div
        ref={dividerRef}
        className={cn(
          "w-full max-w-2xl transition-all duration-300 ease-out",
          isActive ? "h-[2px]" : "h-[1px]"
        )}
      />
    </div>
  );
}
