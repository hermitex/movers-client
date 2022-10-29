import React from "react";
import DashBoardSideDrawer from "../dashboard/DashBoardSideDrawer";
import Datatable from "../datatable/Datatable";

function List({ user = "customer", sidebarlinks, setIShowFooter, component }) {
  return (
    <DashBoardSideDrawer
      user={user}
      setIShowFooter={setIShowFooter}
      sidebarlinks={sidebarlinks}
      component={component}
    />
  );
}

{
  /* <Datatable /> */
}

export default List;
