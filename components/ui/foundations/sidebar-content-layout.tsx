"use client";

import * as Icons from "lucide-react";
import { SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "../shadcn/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../shadcn/collapsible";
import Link from "next/link";
import { MenuItem } from "@/types/menuTypes";
import { usePathname } from 'next/navigation'
import { useState } from "react";


export const data: MenuItem[] = [
    { title: "Dashboard", url: "/", icon: "Users", items: [] },
    { title: "Datatable", url: "/datatable", icon: "Table", items: [] },
    {
        title: "Reports",
        url: "/reports",
        icon: "Settings2",
        items: [
            { title: "Sales Report", url: "/reports/sales-report", icon: null, items: [] },
            { title: "User Report", url: "/reports/user-report", icon: null, items: [] },
        ],
    },
    {
        title: "Documentation",
        url: "/docs",
        icon: "BookOpen",
        items: [
            { title: "Getting Started", url: "/docs/getting-started", icon: null, items: [] },
            { title: "API Reference", url: "/docs/api-reference", icon: null, items: [] },
        ],
    },
];

const SidebarContentLayout = () => {

    const pathname = usePathname();
    const [openPanel, setOpenPanel] = useState<string | null>(null);

    return (
        <>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {data.map((item) => {

                            const Icon = item.icon ? (Icons[item.icon] as React.ElementType) : null;
                            const hasChildren = item.items && item.items.length > 0;
                            const panelIsOpen = openPanel === item.url;

                            return hasChildren ? (
                                <Collapsible
                                    key={item.title}
                                    open={panelIsOpen}
                                    onOpenChange={(open) => {
                                        setOpenPanel(open ? item.url : null);
                                    }}
                                    className="group/collapsible"
                                    asChild
                                >
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton tooltip={item.title} data-active={pathname.startsWith(item.url)}>
                                                {Icon && <Icon />}
                                                <span>{item.title}</span>
                                                <Icons.ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.items?.map((subItem) => (
                                                    <SidebarMenuSubItem key={subItem.title}>
                                                        <SidebarMenuSubButton asChild data-active={pathname === subItem.url} >
                                                            <Link href={subItem.url}>
                                                                <span>{subItem.title}</span>
                                                            </Link>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            ) : (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton tooltip={item.title} data-active={pathname === item.url} asChild>
                                        <Link href={item.url} onClick={() => setOpenPanel(null)}>
                                            {Icon && <Icon />}
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </>
    )
}

export default SidebarContentLayout