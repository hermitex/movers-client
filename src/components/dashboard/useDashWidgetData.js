import React from "react";
import useFetch from "../hooks/useFetch";

function useDashWidgetData() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  // const [data, setData] = useState(null);

  const movers = useFetch(`${baseUrl}/movers`);
  const customers = useFetch(`${baseUrl}/customers`);
  const users = useFetch(`${baseUrl}/users`);
  const bookings = useFetch(`${baseUrl}/move_bookings`);

  const adminData = [
    { title: "movers", metric: movers?.length, isMoney: false },
    { title: "customers", metric: customers?.length, isMoney: false },
    // { title: "earnings", metric: 0, isMoney: true },
    { title: "total moves", metric: bookings?.length, isMoney: true },
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

  return {
    admin: adminData,
    mover: moverData,
    customer: customerData,
  };
}

export default useDashWidgetData;

// export default widgetData;
