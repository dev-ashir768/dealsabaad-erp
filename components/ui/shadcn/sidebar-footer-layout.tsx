import React from "react";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";
import Link from "next/link";
import { LogOut } from "lucide-react";

const SidebarFooterLayout = () => {
  return (
    <>
      <SidebarFooter className="border-t border-sidebar-border h-[65px] flex justify-center">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton variant="logout" size="xl" asChild>
              <Link href="/">
                <LogOut className="!w-5 !h-5 group-data-[collapsible=icon]:!w-4 group-data-[collapsible=icon]:!h-4" />
                Logout
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
};

export default SidebarFooterLayout;
