import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import image1 from "./images/pexels-albert-nunez-88630.jpg";
import image2 from "./images/pexels-albin-berlin-905554.jpg";
import image3 from "./images/pexels-albin-berlin-919073.jpg";

import image4 from "./images/pexels-jae-park-3802510.jpg";
import image5 from "./images/pexels-jesse-zheng-1213294.jpg";
import image6 from "./images/pexels-jordan-hyde-1383834.jpg";

function ItemTable() {
  const rows = [
    {
      id: 1,
      car: "Honda Buick 2021",
      img: image1,
      customer: "John Doe",
      date: "1 Sep",
      amount: "1200",
      method: "Online",
      status: "Approved",
    },
    {
      id: 2,
      car: "Honda Buick 2021",
      img: image2,
      customer: "John Doe",
      date: "1 Sep",
      amount: "1200",
      method: "Online",
      status: "Approved",
    },
    {
      id: 3,
      car: "Honda Buick 2021",
      img: image3,
      customer: "John Doe",
      date: "1 Sep",
      amount: "1200",
      method: "Online",
      status: "Pending",
    },
    {
      id: 4,
      car: "Honda Buick 2021",
      img: image4,
      customer: "John Doe",
      date: "1 Sep",
      amount: "1200",
      method: "Online",
      status: "Approved",
    },
    {
      id: 5,
      car: "Honda Buick 2021",
      img: image5,
      customer: "John Doe",
      date: "1 Sep",
      amount: "1200",
      method: "Online",
      status: "Pending",
    },
    {
      id: 6,
      car: "Honda Buick 2021",
      img: image6,
      customer: "John Doe",
      date: "1 Sep",
      amount: "1200",
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Car</TableCell>
            <TableCell>Customer&nbsp;</TableCell>
            <TableCell>Date&nbsp;</TableCell>
            <TableCell>Amount&nbsp;($)</TableCell>
            <TableCell>Method&nbsp;</TableCell>
            <TableCell>Status&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <div
                  className="rounded-md group"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="bg-hero-pattern  bg-no-repeat bg-cover bg-center rounded-md mr-2 hover:opacity-100 opacity-80 cursor-pointer  hover:scale-110 transition duration-300 ease-in-out"
                    style={{
                      height: "10vh",
                      width: "10vw",
                      backgroundImage: `url(${row.img})`,
                    }}
                  />
                  {row.car}
                </div>
              </TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.method}</TableCell>
              <TableCell>
                {row.status.toLowerCase() === "approved" ? (
                  <span className="text-green-700 bg-green-100 py-1 px-2 rounded-sm">
                    {row.status}
                  </span>
                ) : (
                  <span className="text-yellow-700 bg-yellow-100 py-1 px-2 rounded-sm">
                    {row.status}
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ItemTable;
