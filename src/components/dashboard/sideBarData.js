const adminSideBarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    cName: "nav-text",
  },

  {
    title: "Customers",
    path: "/dashboard/customers",
    cName: "nav-text",
  },
  {
    title: "Movers",
    path: "/dashboard/movers",
    cName: "nav-text",
  },
  {
    title: "Orders",
    path: "/dashboard/orders",
    cName: "nav-text",
  },
  {
    title: "Rates",
    path: "/dashboard/rates",
    cName: "nav-text",
    type: "lists",
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    cName: "nav-text",
  },
  {
    title: "Location Analytics",
    path: "/dashboard/location-analytics",
    cName: "nav-text",
  },
];

const moverSideBarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    cName: "nav-text",
  },

  {
    title: "My Customers",
    path: "/dashboard/customers",
    cName: "nav-text",
  },
  {
    title: "Orders",
    path: "/dashboard/orders",
    cName: "nav-text",
  },
  {
    title: "Rates",
    path: "/dashboard/rates",
    cName: "nav-text",
  },
  {
    title: "Pending Orders",
    path: "/dashboard/orders",
    cName: "nav-text",
  },
  {
    title: "My Rates",
    path: "/dashboard/rates",
    cName: "nav-text",
  },
  {
    title: "Location Analytics",
    path: "/dashboard/location-analytics",
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    cName: "nav-text",
  },
];

const customerSideBarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    cName: "nav-text",
    type: "main",
  },

  {
    title: "Movers",
    path: "/dashboard/movers",
    cName: "nav-text",
    type: "lists",
  },
  {
    title: "My Orders",
    path: "/dashboard/orders",
    cName: "nav-text",
    type: "lists",
  },
  {
    title: "Rates",
    path: "/dashboard/rates",
    cName: "nav-text",
    type: "lists",
  },
  {
    title: "Profile",
    path: "/dashboard/profile",
    cName: "nav-text",
    type: "user",
  },
];
const sideLinks = {
  admin: adminSideBarData,
  mover: moverSideBarData,
  customer: customerSideBarData,
};
export default sideLinks;
