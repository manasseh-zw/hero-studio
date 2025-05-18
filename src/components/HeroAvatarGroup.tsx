"use client";
import { AvatarGroup, Avatar } from "@heroui/react";

export default function HeroAvatarGroup() {
  return (
    <div className="p-2 px-3 bg-zinc-600 bg-opacity-20 border-1 border-opacity-30 border-zinc-800 backdrop-blur-sm rounded-full shadow-sm">
      <AvatarGroup
        size="sm"
        max={4}
        renderCount={() => (
          <p className="text-small cursor-pointer text-foreground font-medium ms-2">
            Join{" "}
            <span className="bg-gradient-to-r from-pink-200 via-teal-100 to-purple-300 bg-clip-text text-transparent font-bold">
              1000+
            </span>{" "}
            Builders.
          </p>
        )}
        total={10}
      >
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
      </AvatarGroup>
    </div>
  );
}
