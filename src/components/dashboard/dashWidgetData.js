const adminData = [
  { title: "movers", metric: 100000, isMoney: false },
  { title: "customers", metric: 10000, isMoney: false },
  { title: "earnings", metric: 10000, isMoney: true },
  { title: "total moves", metric: 10000, isMoney: true },
];

const moverData = [
  { title: "all moves", metric: 10000, isMoney: false },
  { title: "earnings", metric: 100000, isMoney: true },
  { title: "balance", metric: 10000, isMoney: true },
  { title: "pending moves", metric: 10000, isMoney: false },
  { title: "completed moves", metric: 10000, isMoney: false },
];

const customerData = [
  { title: "all inventories", metric: 10000, isMoney: false },
  { title: "total spendings", metric: 100000, isMoney: true },
  { title: "total bookings", metric: 10000, isMoney: true },
  { title: "pending bookings", metric: 10000, isMoney: false },
];

const widgetData = {
  admin: adminData,
  mover: moverData,
  customer: customerData,
};

export default widgetData;
