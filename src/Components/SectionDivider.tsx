"use client";
import { cn } from "@heroui/theme";
import { useEffect, useRef } from "react";

export default function SectionDivider({ className }: { className?: string }) {
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dividerRef.current) return;

    const divider = dividerRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = divider.getBoundingClientRect();
      const x = e.clientX - window.scrollX;
      const distanceFromDivider = Math.abs(x - (rect.left + rect.width / 2));

      if (distanceFromDivider < 300) {
        const gradientPosition = ((x - rect.left) / rect.width) * 100;
        divider.style.background = `
          linear-gradient(
            90deg, 
            transparent 0%, 
            rgba(80, 40, 140, 0.1) ${Math.max(0, gradientPosition - 40)}%, 
            rgba(120, 60, 200, 0.2) ${Math.max(0, gradientPosition - 20)}%, 
            rgba(160, 80, 240, 0.4) ${gradientPosition}%, 
            rgba(120, 60, 200, 0.2) ${Math.min(100, gradientPosition + 20)}%, 
            rgba(80, 40, 140, 0.1) ${Math.min(100, gradientPosition + 40)}%, 
            transparent 100%
          )
        `;
      }
    };

    const handleMouseLeave = () => {
      divider.style.background = `
        linear-gradient(
          90deg, 
          transparent 0%, 
          rgba(80, 40, 140, 0.1) 30%, 
          rgba(120, 60, 200, 0.2) 40%, 
          rgba(160, 80, 240, 0.4) 50%, 
          rgba(120, 60, 200, 0.2) 60%, 
          rgba(80, 40, 140, 0.1) 70%, 
          transparent 100%
        )
      `;
    };

    handleMouseLeave();

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={cn("w-full flex justify-center py-8 sm:py-12", className)}>
      <div
        ref={dividerRef}
        className={cn(
          "w-full h-[1px] sm:h-[2px] max-w-[280px] sm:max-w-2xl transition-all duration-300 ease-out"
        )}
      />
    </div>
  );
}
