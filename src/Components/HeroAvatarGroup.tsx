"use client";
import { AvatarGroup, Avatar } from "@heroui/react";

export default function HeroAvatarGroup() {
  return (
    <div className="p-2 px-4 bg-zinc-600 bg-opacity-20 border-1 border-opacity-30 border-zinc-800 backdrop-blur-sm rounded-full shadow-sm">
      <AvatarGroup
        color="primary"
        size="sm"
        max={4}
        renderCount={() => (
          <p className="text-small cursor-pointer text-foreground font-medium ms-2">
            Join <span className="">1000+</span> Builders.
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
