'use client'

import { RiMenuUnfoldFill } from "react-icons/ri";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/UI/drawer";
import ApplicationLogo from "@/components/ApplicationLogo";
import Link from "next/link";
import NavigationItem from "@/components/layout/NavItem";
import { navs } from "@/lib/navs";

export default function MobileNavigation() {
  return (
    <div className="block sm:hidden mr-3">
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <RiMenuUnfoldFill className="text-custom-black size-6 cursor-pointer" />
        </DrawerTrigger>
        <DrawerContent className="rounded-none border-r border-custom-black/15">
          <nav className="bg-white overflow-y-auto pr-4">
            {/* Brand Logo */}
            <div className="py-4 pl-4 mb-10 sticky top-0 bg-white">
              <Link href="/dashboard">
                <ApplicationLogo />
              </Link>
            </div>

            <div className="">
              {navs.map((nav, index) => (
                <NavigationItem key={index} nav={nav} />
              ))}
            </div>
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
