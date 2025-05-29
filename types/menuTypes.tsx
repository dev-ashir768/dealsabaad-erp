export interface MenuItem {
  title: string;
  url: string;
  icon?: keyof typeof import("lucide-react") | null;
  items: MenuItem[];
}