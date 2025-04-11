import { LayoutDashboard, Mail, ShoppingCart } from "lucide-react";

export const sidebarItems = [
  {
    id: 1,
    title: "Analytics",
    url: "/",
    avatar: LayoutDashboard,
  },
  {
    id: 2,
    title: "Ecommerce",
    url: "/ecommerce",
    avatar: ShoppingCart,
  },
  {
    id: 3,
    title: "Email",
    url: "/email",
    avatar: Mail,
  },
];
