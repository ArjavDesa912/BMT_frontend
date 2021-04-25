/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Inventory from "views/Inventory/inventory";
import Teams from "views/Teams/teams";
import Taxes from "views/Taxes/taxes";
import invoice from "views/Invoice/invoice";
import Orders from "views/Orders/orders";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Inventory",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: Inventory,
    component: Inventory,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Teams",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Teams,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Taxes",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Taxes,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Invoices",
    rtlName: "خرائط",
    icon: LocationOn,
    component: invoice,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Orders",
    rtlName: "إخطارات",
    icon: Notifications,
    component: Orders,
    layout: "/admin"
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  }
];

export default dashboardRoutes;
