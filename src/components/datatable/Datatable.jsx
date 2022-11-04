/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

import { NavLink, useLocation } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useDatatableSource from "../datasource/datatableSource";

import ProgressIndicator from "../utils/ProgressIndicator";
import { Box, Button, Typography } from "@mui/material";
import ConfirmationModal from "../utils/ConfirmationModal";

function Datatable({ user }) {
  const [userType, setUserType] = useState(null);

  const { dataRows, cols } = useDatatableSource();
  console.log(dataRows, cols);
  const [resource, setResource] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.split("/").pop();
    setResource(path);
    if (user?.user.account_type === "customer") {
      setUserType(user?.user.account_type);
    } else if (user?.user.account_type === "mover") {
      setUserType(user?.user.account_type);
    }
  }, [pathname, user?.user.account_type]);
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const token = localStorage.getItem("jwt");
  const [action, setAction] = useState(false);
  const [message, setMessage] = useState(
    "You are about to delete this record?"
  );
  const [alertMessage, setAlert] = useState("Warning!");
  const [actionStatus, setActionStatus] = useState();

  function handleClick(e, row) {
    const { id } = row;

    // return (
    //   <ConfirmationModal
    //     setAction={setAction}
    //     message={message}
    //     alert={alertMessage}
    //     isOpen={true}
    //   />
    // );
    if (window.confirm(message)) {
      fetch(`${baseUrl}/${resource}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        if (response.json().status === 204) {
          setActionStatus("Success");
        }
      });
    }

    // console.log(row);
  }
  const actionColumn = [
    {
      field: "Action",
      headName: "Action",
      width: 230,
      sortable: false,
      renderCell: ({ row }) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 0.2,
          }}
        >
          <NavLink
            to={{ pathname: "/dashboard/profile" }}
            state={{ row }}
          >
            <Button
              type="button"
              variant="outlined"
              color="success"
            >
              <ion-icon name="eye" />
              view
            </Button>
          </NavLink>
          {userType === "customer" ? (
            <NavLink
              to={{ pathname: "/get-started" }}
              state={{ row }}
            >
              <Button
                type="button"
                variant="outlined"
                color="success"
              >
                <ion-icon name="eye" />
                book
              </Button>
            </NavLink>
          ) : null}
          {userType === "customer" || userType === "mover" ? null : (
            <>
              <NavLink
                to={{ pathname: "/dashboard/edit" }}
                state={{ row }}
              >
                <Button
                  type="button"
                  onClick={(e) => handleClick(e, row)}
                  variant="outlined"
                  color="warning"
                >
                  <ion-icon name="create" />
                  edit
                </Button>
              </NavLink>

              <Button
                type="button"
                onClick={(e) => handleClick(e, row)}
                variant="outlined"
                color="error"
              >
                delete
              </Button>
            </>
          )}
        </Box>
      ),
    },
  ];
  return (
    <Box sx={{ height: "100vh" }}>
      <div style={{ width: "100%", height: "80%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            justifyItems: "center",
            alignItems: "center",
            p: 2,
            bgcolor: "#FFF",
            boxShadow: 1,
            borderRadius: 1,
            mb: 1,
          }}
        >
          <Typography
            fontWeight={500}
            fontSize="2rem"
            textTransform="capitalize"
            color="GrayText"
          >
            {resource}
          </Typography>
          {userType === "customer" || userType === "mover" ? null : (
            <NavLink to={`/dashboard/new`}>
              <Button
                type="button"
                variant="contained"
                color="success"
              >
                <AddCircleIcon />
                Add new{" "}
                {resource
                  .split("")
                  .slice(0, resource.length - 1)
                  .join("")}
              </Button>
            </NavLink>
          )}
        </Box>
        {console.log(cols, dataRows)}
        {dataRows === null || cols === null ? (
          <ProgressIndicator />
        ) : (
          <DataGrid
            rows={dataRows}
            columns={cols.concat(actionColumn)}
            autoPageSize
            pagination
            checkboxSelection
          />
        )}
      </div>
    </Box>
  );
}

export default Datatable;
