"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
  DialogPortal,
  DialogOverlay,
} from "@/components/UI/dialog";
import { useRouter } from "next/navigation";

interface NavProp {
  title: string;
  icon: React.ElementType;
  route: string;
}

const NavigationItem = ({ nav }: { nav: NavProp }) => {
  const pathname = usePathname();
  const IconComponent = nav?.icon;

  function NavTile(): JSX.Element {
    return (
      <div
        className={cn(
          "flex gap-2.5 mb-1.5 items-center py-4 px-6 cursor-pointer duration-300 text-custom-black hover:bg-custom-nav-active-bg *:hover:text-custom-nav-active-text hover:rounded-r-lg",
          pathname.startsWith(nav?.route) && nav?.title !== "Logout"
            ? "text-custom-nav-active-text rounded-r-lg bg-custom-nav-active-bg"
            : ""
        )}
      >
        {IconComponent && <IconComponent className="block h-5 w-auto" />}
        <p className="text-base">{nav?.title}</p>
      </div>
    );
  }

  return (
    <Link href={nav?.route}>
      <NavTile />
    </Link>
  );
};

export default NavigationItem;
