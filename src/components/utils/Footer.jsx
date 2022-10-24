import { Mail, Phone, PinDrop } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    title: "address",
    content: "49 street, Lavington",
    icon: <PinDrop />,
  },
  {
    title: "phone",
    content: "+254 710 111111",
    icon: <Phone />,
  },
  {
    title: "mail",
    content: "mooove.gmail.com",
    icon: <Mail />,
  },
];

const quickLinks = [
  {
    title: "about us",
    links: [
      "What is Mooove",
      "What is included",
      "How it Works",
      "Agreement",
      //   "Privacy Policy",
    ],
    href: "about",
  },
  {
    title: "partnerships",
    links: [
      "Become a Partner",
      "For Service Providers",
      "Corporate Relocation",
      "For Real Estate Agents",
    ],
    href: "partners",
  },
  {
    title: "moooving services",
    links: [
      "Local Moving",
      "Inter-County Moving",
      "Corporate Moving",
      "Local Moving Providers",
    ],
    href: "services",
  },
  {
    title: "mooove blog",
    links: [" Moving Tips", "Moving Costs", "Before Moving", " Deals"],
    href: "blog",
  },
];

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyItems: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        bgcolor: "#2F2F2F",
      }}
    >
      <Box
        sx={{
          bgcolor: "#FF515E",
          color: "#FFF",
          width: "100%",
          py: "2rem",
        }}
      >
        <Typography
          variant="p"
          textAlign="left"
          paddingLeft={2}
        >
          Interested in comparing different moving companies and getting
          guaranteed prices?
        </Typography>
      </Box>

      <Box
        sx={{
          bgcolor: "#1A1A1A",
          color: "#FFF",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          width: "50vw",
          gap: 2,
          paddingBottom: 3,
        }}
      >
        {data.map((d) => (
          <Box
            key={d.title}
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            {d.icon}
            <Box>
              <Typography textTransform="uppercase"> {d.title}</Typography>
              <address>{d.content}</address>
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          color: "#FFF",
          display: "flex",
          justifyItems: "space-between",
          justifyContent: "center",
          width: "100%",
          gap: 15,
        }}
      >
        {quickLinks.map((link) => (
          <Box
            key={link.title}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              textTransform="uppercase"
              fontWeight="bolder"
            >
              {link.title}
            </Typography>

            <Box>
              {link.links.map((l) => (
                <Link to="">
                  <Typography
                    textTransform="capitalize"
                    color="#fff"
                    sx={{
                      hover: "#FF515E",
                    }}
                  >
                    {l}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Footer;
