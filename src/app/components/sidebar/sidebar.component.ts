import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "bi bi-house", class: "" },
  {
    path: "/universities",
    title: "universities",
    icon: " bi bi-building",
    class: "",
  },
  {
    path: "/departments",
    title: "departments",
    icon: "bi bi-building-up",
    class: "",
  },
  {
    path: "/professors",
    title: "professors",
    icon: "bi bi-easel3",
    class: "",
  },
  {
    path: "/students",
    title: "students",
    icon: " now-ui-icons education_hat",
    class: "",
  },
  {
    path: "/contracts",
    title: "Contracts",
    icon: "bi bi-file-earmark-person",
    class: "",
  },
  { path: "/teams", title: "teams", icon: "bi bi-people", class: "" },
  { path: "/projects", title: "projects", icon: "bi bi-journal", class: "" },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
