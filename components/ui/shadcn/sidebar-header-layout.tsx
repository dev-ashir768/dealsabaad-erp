import React from "react";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";
import Link from "next/link";
import Image from "next/image";

const SidebarHeaderLayout = () => {
  return (
    <>
      <SidebarHeader className="border-b border-sidebar-border bg-background h-[65px] group-data-[collapsible=icon]:h-[41px] group-data-[collapsible=icon]:justify-center transition-[width,height]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton variant="logo" asChild>
              <Link
                href="/"
                className="h-full transition-[justify-content] ease-linear duration-300"
              >
                <Image
                  src="/images/favicon.svg"
                  width={35}
                  height={35}
                  priority
                  alt="logo"
                />
                <Image
                  src="/images/logo.svg"
                  width={150}
                  height={100}
                  priority
                  alt="logo"
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
    </>
  );
};

export default SidebarHeaderLayout;
