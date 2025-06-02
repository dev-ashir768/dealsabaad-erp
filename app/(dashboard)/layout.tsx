import Navbar from "@/components/ui/foundations/navbar";
import { AppSidebar } from "@/components/ui/foundations/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/shadcn/sidebar";
import Footer from "@/components/ui/foundations/footer";

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
          <Footer />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
