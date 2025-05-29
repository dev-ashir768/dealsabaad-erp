import Navbar from "@/components/ui/custom/navbar";
import { AppSidebar } from "@/components/ui/shadcn/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/shadcn/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Navbar />
          <div className="flex flex-1 flex-col gap-4 p-4">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
