import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import logo from "../../logo-white.png";

import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import AccountMenu from "../avatar-menu/AccountMenu";
import { Dashboard, ListAlt, PinDrop } from "@mui/icons-material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function DashBoardSideDrawer({
  user,
  sidebarlinks,
  setIShowFooter,
  component,
  onLogout,
}) {
  user = user?.user;

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  setIShowFooter(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const icons = [
    <Dashboard />,
    <ListAlt />,
    <ListAlt />,
    <ListAlt />,
    <ListAlt />,
    <AccountBoxIcon />,
    <PinDrop />,
  ];
  const [sideLinks, setSideLiks] = React.useState(null);

  React.useEffect(() => {
    switch (user?.account_type) {
      case "admin":
        setSideLiks(sidebarlinks?.admin);
        break;
      case "mover":
        setSideLiks(sidebarlinks?.mover);
        break;
      case "customer":
        setSideLiks(sidebarlinks?.customer);
        break;
      default:
        // navigate("/login");
        break;
    }
  }, [
    sidebarlinks?.admin,
    sidebarlinks?.customer,
    sidebarlinks?.mover,
    user?.account_type,
  ]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "#2F2F2F",
          color: "#FFF",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              width: "100vw",
              display: "flex",
              flexDirection: "row",
              justifyItems: "space-between",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Link to="/">
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    mr: 1,
                    width: "10rem",
                  }}
                >
                  <img
                    width="100%"
                    src={logo}
                    alt="logo"
                  />
                </Box>
              </Link>
            </Box>
            <Box>
              <AccountMenu
                title="Go Home"
                link="home"
                onLogout={onLogout}
                user={user}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sideLinks &&
            sideLinks.map(({ title, path }, index) => (
              <NavLink
                to={path}
                key={path}
              >
                <ListItem
                  key={title}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        ":hover": "red",
                      }}
                    >
                      {icons[index]}
                      {/* {index % 2 === 0 ? <ListAlt /> : <Dashboard />} */}
                    </ListItemIcon>
                    <ListItemText
                      primary={title}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))}
        </List>
        <Divider />
        <List>
          {["All mail"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {icons[index]}
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, px: 5 }}
      >
        <DrawerHeader />
        <Box>{component}</Box>
      </Box>
    </Box>
  );
}

export default DashBoardSideDrawer;
