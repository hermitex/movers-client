import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../logo.png";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import AccountMenu from "../avatar-menu/AccountMenu";

const pages = ["Home", "About", "Services", "contact"];

const activeStyle = {
  color: "#FF515E",
};

const NavBar = ({ user, onLogout }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#fff",
        color: "#000",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
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

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    sx={{
                      color: "#000",
                    }}
                    key={page}
                    onClick={handleCloseNavMenu}
                  >
                    <NavLink
                      to={page.toLocaleLowerCase()}
                      style={({ isActive }) => (isActive ? activeStyle : null)}
                    >
                      <Typography
                        textAlign="center"
                        textTransform="uppercase"
                      >
                        {page}
                      </Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                fontWeight: "bolder",
                fontSize: "0.8",
                textTransform: "uppercase",
                gap: 2,
              }}
            >
              {pages.map((page) => (
                <NavLink
                  key={page}
                  to={page.toLocaleLowerCase()}
                  style={({ isActive }) =>
                    isActive ? activeStyle : { color: "#000" }
                  }
                >
                  <Typography
                    textAlign="center"
                    textTransform="uppercase"
                    sx={{ my: 2, display: "block" }}
                  >
                    {page}
                  </Typography>
                </NavLink>
              ))}
            </Box>
            {user ? (
              <AccountMenu
                title="My Account"
                link="dashboard"
                onLogout={onLogout}
                user={user}
              />
            ) : (
              <Link
                to="login"
                sx={{ flexGrow: 0 }}
              >
                <Button variant="outlined">
                  <Box
                    sx={{
                      display: "inline-block",
                      padding: "0.5",
                      color: "#FF515E",
                    }}
                  >
                    Login/Signup
                  </Box>
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
