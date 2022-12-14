/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import image1 from "../table/images/pexels-albert-nunez-88630.jpg";

const customerColumns = [
  { field: "id", headerName: "ID", width: 10 },

  {
    field: "full_name",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
    renderCell: (params) => (
      <div
        className="rounded-md group flex flex-row align-middle justify-between justify-items-center"
        style={{
          alignItems: "center",
        }}
      >
        <div
          className="bg-hero-pattern  bg-no-repeat bg-cover bg-center mr-2 hover:opacity-100 opacity-80 cursor-pointer  hover:scale-110 transition duration-300 ease-in-out rounded-full h-12 w-12"
          style={{
            backgroundImage: `url(${params.row.avatar_url})`,
          }}
        />
        <div> {params.row.full_name || ""}</div>
      </div>
    ),
  },

  {
    field: "email",
    headerName: "Email",
    sortable: true,
    width: 230,
  },
  {
    field: "phone",
    headerName: "Phone",
    sortable: true,
    width: 120,
  },
  {
    field: "location",
    headerName: "Location",
    type: "string",
    width: 100,
  },

  {
    field: "oders",
    headerName: "Oders",
    sortable: true,
    width: 50,
    type: "number",
    renderCell: () => 10,
  },
  {
    field: "active",
    headerName: "Active",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 95,
    renderCell: (params) => (
      <div>
        {params.row.status.toLowerCase() === "active" ? (
          <span className="text-green-700 bg-green-100 py-1 px-2 rounded-sm">
            {params.row.status}
          </span>
        ) : (
          <span className="text-yellow-700 bg-yellow-100 py-1 px-2 rounded-sm">
            {params.row.status}
          </span>
        )}
      </div>
    ),
  },
];

const moverColumns = [
  { field: "id", headerName: "ID", width: 10 },

  {
    field: "full_name",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 120,
    renderCell: (params) => (
      <div
        className="rounded-md group flex flex-row align-middle justify-between justify-items-center"
        style={{
          alignItems: "center",
        }}
      >
        <div
          className="bg-hero-pattern  bg-no-repeat bg-cover bg-center mr-2 hover:opacity-100 opacity-80 cursor-pointer  hover:scale-110 transition duration-300 ease-in-out rounded-full h-12 w-12"
          style={{
            backgroundImage: `url(${params.row.avatar_url})`,
          }}
        />
        <div> {params.row.full_name || ""}</div>
      </div>
    ),
  },

  {
    field: "email",
    headerName: "Email",
    sortable: true,
    width: 230,
  },
  {
    field: "phone",
    headerName: "Phone",
    sortable: true,
    width: 150,
  },
  {
    field: "location",
    headerName: "Location",
    type: "string",
    width: 120,
  },

  {
    field: "oders",
    headerName: "Oders",
    sortable: true,
    width: 50,
    type: "number",
    renderCell: () => 10,
  },
  {
    field: "active",
    headerName: "Active",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 95,
    renderCell: (params) => (
      <div>
        {params.row.status.toLowerCase() === "active" ? (
          <span className="text-green-700 bg-green-100 py-1 px-2 rounded-sm">
            {params.row.status}
          </span>
        ) : (
          <span className="text-yellow-700 bg-yellow-100 py-1 px-2 rounded-sm">
            {params.row.status}
          </span>
        )}
      </div>
    ),
  },
];

const ratesColumns = [
  { field: "id", headerName: "ID", width: 10 },

  {
    field: "item_name",
    headerName: "Item Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
    renderCell: (params) => (
      <div
        className="rounded-md group flex flex-row align-middle justify-between justify-items-center"
        style={{
          alignItems: "center",
        }}
      >
        <div
          className="bg-hero-pattern  bg-no-repeat bg-cover bg-center mr-2 hover:opacity-100 opacity-80 cursor-pointer  hover:scale-110 transition duration-300 ease-in-out rounded-full h-12 w-12"
          style={{
            backgroundImage: `url(${params.row.avatar_url})`,
          }}
        />
        <div> {params.row.item_name || ""}</div>
      </div>
    ),
  },

  {
    field: "category",
    headerName: "Category",
    sortable: true,
    width: 100,
  },
  {
    field: "flat_price",
    headerName: "Flat Price",
    sortable: true,
    width: 100,
  },
  {
    field: "price_per_unit",
    headerName: "PPU",
    sortable: true,
    width: 100,
  },

  {
    field: "owner",
    headerName: "Owned By",
    sortable: true,
    width: 50,
    type: "number",
    renderCell: (params) => (
      <div
        className="rounded-md group flex flex-row align-middle justify-between justify-items-center"
        style={{
          alignItems: "center",
        }}
      >
        <div
          className="bg-hero-pattern  bg-no-repeat bg-cover bg-center mr-2 hover:opacity-100 opacity-80 cursor-pointer  hover:scale-110 transition duration-300 ease-in-out rounded-full h-12 w-12"
          style={{
            backgroundImage: `url(${params.row.avatar_url})`,
          }}
        />
        <div> {params.row.full_name || ""}</div>
      </div>
    ),
  },
  {
    field: "count",
    headerName: "Count",
    sortable: true,
    align: "center",
    width: 95,
  },
  {
    field: "discount",
    headerName: "discount",
    sortable: true,
    width: 95,
  },
];

const myOrdersColumns = [
  { field: "id", headerName: "ID", width: 10 },
  {
    field: "mover",
    headerName: "Mover",
    sortable: true,
    width: 100,
    renderCell: (params) => <div> {params.row.mover.full_name || ""}</div>,
  },
  {
    field: "customer",
    headerName: "Customer",
    sortable: true,
    width: 100,
    renderCell: (params) => <div> {params.row.customer.full_name || ""}</div>,
  },
  {
    field: "moving_from",
    headerName: "Moving From",
    sortable: true,
    width: 230,
  },
  {
    field: "moving_to",
    headerName: "Moving To",
    sortable: true,
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    sortable: true,
    width: 80,
    renderCell: (params) => {
      params?.row.status.toLowerCase() === "pending" ? (
        <Typography color="text.warning">{params.row.status}</Typography>
      ) : (
        <Typography color="text.success">{params.row.status}</Typography>
      );
    },
  },
];

const useDatatableSource = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const resource = location.pathname.split("/").pop();
  const [cols, setCol] = useState(null);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  // const [data, setData] = useState(null);
  const data = useFetch(`${baseUrl}/${resource}`);

  console.log(resource);
  useEffect(() => {
    if (resource === "movers") {
      setCol(moverColumns);
    } else if (resource === "customers") {
      setCol(customerColumns);
    } else if (resource === "rates") {
      setCol(ratesColumns);
    }
    if (resource === "bookings") {
      setCol(myOrdersColumns);
    }
    console.log(cols);
  }, [cols, data, resource]);
  console.log(myOrdersColumns);
  const token = localStorage.getItem("jwt");
  useEffect(() => {
    fetch(`${baseUrl}/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [baseUrl, token, user]);

  const [dataRows, setDataRows] = useState(null);
  useEffect(() => {
    function getData() {
      console.log(resource);
      let rows;
      if (resource === "customers") {
        rows =
          data &&
          data?.map((customer) => ({
            id: customer.id,
            full_name: customer.full_name,
            img: image1,
            // location: customer?.location.name,
            orders: 0,
            phone: customer.phone,
            email: customer.email,
            location: customer.location.name,
            status: "Active",
          }));
      } else if (resource === "movers") {
        rows =
          data &&
          data?.map((mover) => ({
            id: mover.id,
            full_name: mover.full_name,
            img: image1,
            // location: mover?.location.name,
            orders: 0,
            phone: mover.phone,
            email: mover.email,
            location: mover?.location.name,
            status: "Active",
          }));
      } else if (resource === "rates") {
        rows =
          data &&
          data?.map((rate) => ({
            id: rate.id,
            item_name: rate.item_name,
            category: rate.category,
            flat_price: rate.flat_price,
            price_per_unit: rate.price_per_unit,
            discount: rate.discount,
            count: rate.count,
            status: "Active",
          }));
      } else if (resource === "bookings") {
        console.log(data);
        rows =
          data &&
          data?.map((booking) => ({
            id: booking.id,
            mover: booking?.mover,
            customer: booking?.customer,
            moving_from: booking?.moving_from,
            moving_to: booking?.moving_to,
            status: booking?.status,
          }));
      }

      setDataRows(rows);
    }

    getData();
  }, [data, resource]);

  return { cols, dataRows };
};

export default useDatatableSource;
