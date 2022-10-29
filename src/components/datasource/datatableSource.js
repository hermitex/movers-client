/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import image1 from "../table/images/pexels-albert-nunez-88630.jpg";

const carColumns = [
  { field: "vin", headerName: "VIN", width: 200 },
  {
    field: "car",
    headerName: "Car",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,

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
            backgroundImage: `url(${image1})`,
          }}
        />
        <div>
          {" "}
          {params.row.make || ""}
          {"  "}
          {params.row.model || ""}
          {"  "}
          {params.row.year || ""}
        </div>
      </div>
    ),
  },

  {
    field: "color",
    headerName: "Color",
    sortable: true,
    width: 90,
  },
  {
    field: "condition",
    headerName: "Condition",
    sortable: true,
    width: 110,
  },
  {
    field: "faults",
    headerName: "Faults",
    type: "string",
    width: 120,
  },
  {
    field: "engine",
    headerName: "Engine Size",
    sortable: true,
    width: 100,
    type: "number",
  },
  {
    field: "fuel_type",
    headerName: "Fuel Type",
    sortable: true,
    width: 100,
    type: "string",
  },
  {
    field: "transmission",
    headerName: "Transmission",
    sortable: true,
    width: 90,
    type: "number",
  },
  {
    field: "sold",
    headerName: "Sold",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 95,
    renderCell: (params) => (
      <div>
        {!params.row.status ? (
          <span className="text-green-700 bg-green-100 py-1 px-2 rounded-sm">
            In stock
          </span>
        ) : (
          <span className="text-yellow-700 bg-yellow-100 py-1 px-2 rounded-sm">
            Sold
          </span>
        )}
      </div>
    ),
  },
];

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
    width: 100,
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

const useDatatableSource = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  const resource = location.pathname.split("/").pop();
  const [cols, setCol] = useState(null);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  // const [data, setData] = useState(null);
  const data = useFetch(`${baseUrl}/${resource}`);

  useEffect(() => {
    if (resource === "movers") {
      setCol(moverColumns);
    } else {
      setCol(customerColumns);
    }
  }, [data]);

  const [dataRows, setDataRows] = useState(null);
  useEffect(() => {
    function getData() {
      let rows;
      if (resource === "customers") {
        rows =
          data &&
          data.map((customer) => ({
            id: customer.id,
            full_name: customer.full_name,
            img: image1,
            location: customer.location.name,
            orders: 0,
            phone: customer.phone,
            email: customer.email,
            status: "Active",
          }));
      } else if (resource === "movers") {
        rows =
          data &&
          data.map((customer) => ({
            id: customer.id,
            full_name: customer.full_name,
            img: image1,
            location: customer.location.name,
            orders: 0,
            phone: customer.phone,
            email: customer.email,
            status: "Active",
          }));
      }
      setDataRows(rows);
    }

    getData();
  }, [data, resource]);

  return { cols, dataRows };
};

export default useDatatableSource;
