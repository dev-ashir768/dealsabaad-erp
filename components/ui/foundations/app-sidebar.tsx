"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarRail,
} from "@/components/ui/shadcn/sidebar";
import SidebarFooterLayout from "./sidebar-footer-layout";
import SidebarHeaderLayout from "./sidebar-header-layout";
import SidebarContentLayout from "./sidebar-content-layout";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeaderLayout />
      <SidebarContentLayout />
      <SidebarFooterLayout />
      <SidebarRail />
    </Sidebar>
  );
}
