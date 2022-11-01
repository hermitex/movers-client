import {
  IconButton,
  Card,
  CardHeader,
  Typography,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/system";
import ProgressIndicator from "../utils/ProgressIndicator";
import numberFormatter from "../utils/numberFormatter";

function CompareFeedCard({ nextStep, quotes }) {
  const [availableQuotes, setAvailableQuotes] = useState(null);
  useEffect(() => {
    setAvailableQuotes(quotes);
  }, [quotes]);
  console.log(availableQuotes);
  return (
    <>
      {!availableQuotes ? (
        <ProgressIndicator />
      ) : (
        availableQuotes.map((quote) => (
          <Card
            sx={{
              width: "auto",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <CardHeader
              avatar={
                <IconButton
                  sx={{ bgcolor: "white" }}
                  size="large"
                >
                  <AccountCircleIcon />
                </IconButton>
              }
              action={
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "20px",
                    textDecoration: "underline",
                  }}
                >
                  Price Quote
                </Typography>
              }
              titleTypographyProps={{
                variant: "p",
                fontSize: "18px",
                fontWeight: "bold",
              }}
              title={quote?.mover_details?.full_name}
              subheader="Moving you forward"
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: "10px 20px",
                gap: 10,
                alignItems: "center",
              }}
            >
              <Box sx={{ flex: 2 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {quote?.mover_details?.full_name} <br />
                  Years in business: 5 <br />
                  Mooves: 10
                </Typography>
              </Box>
              <Box
                sx={{
                  flex: 1.2,
                  display: "flex",
                  flexFlow: "column",
                  alignContent: "center",
                }}
              >
                <Divider />
                <Button color="error">
                  {/* KES{" "} */}
                  {numberFormatter(quote?.total, {
                    style: "currency",
                    currency: "KES",
                  })}{" "}
                </Button>
                <Divider />
              </Box>
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 24,
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexFlow: "row",
                  justifyContent: "left",
                  alignItems: "baseline",
                  gap: 2,
                }}
              >
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  style={{
                    fontSize: "18px",
                  }}
                >
                  15
                </Button>
                <Typography
                  variant="p"
                  fontWeight="bold"
                >
                  Reviews
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  style={{
                    width: "140px",
                    fontSize: "18px",
                  }}
                  onClick={nextStep}
                  quote={quote}
                >
                  SELECT
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))
      )}
    </>
  );
}

export default CompareFeedCard;
