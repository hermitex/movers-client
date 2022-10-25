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
          alignItems: "center",
          justifyContent: "space-between",
          width: "50vw",
          gap: 2,
          padding: 1,
        }}
      >
        {data.map((d) => (
          <Box
            key={d.title}
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "space-between",
              width: "50vw",
              // gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  mr: "0.5rem",
                }}
              >
                {d.icon}
              </Box>
              <Box>
                <Typography textTransform="uppercase"> {d.title}</Typography>
                <address>{d.content}</address>
              </Box>
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
          alignItems: "center",
          width: "100vw",
          gap: 15,
          py: 2,
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
            <Box>
              <Typography
                textTransform="uppercase"
                fontWeight="bolder"
              >
                {link.title}
              </Typography>
              {link.links.map((l) => (
                <Link
                  to=""
                  key={l}
                >
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
