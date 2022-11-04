import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SingleItemCard from "./SingleItemCard";
import { Box } from "@mui/system";

function ItemsHolder({ onAddItem, values }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            bgcolor: "#9C9292",
          }}
        >
          <Typography
            textTransform="capitalize"
            textAlign="left"
            fontSize="1.5rem"
            fontWeight="bolder"
            color="#fff"
            sx={{ width: "100%", flexShrink: 0 }}
          >
            my Living room items
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <SingleItemCard
              onAddItem={onAddItem}
              values={values}
              item="Sofa"
              category="living room"
            />
            <SingleItemCard
              onAddItem={onAddItem}
              values={values}
              item="Table"
              category="living room"
            />
            <SingleItemCard
              onAddItem={onAddItem}
              values={values}
              item="Cabinet"
              category="living room"
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          sx={{
            bgcolor: "#9C9292",
          }}
        >
          <Typography
            textTransform="capitalize"
            textAlign="left"
            fontSize="1.5rem"
            fontWeight="bolder"
            color="#fff"
            sx={{ width: "100%", flexShrink: 0 }}
          >
            my bedroom items
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <SingleItemCard
              onAddItem={onAddItem}
              values={values}
              item="Bed"
              category="bedroom"
            />
            <SingleItemCard
              onAddItem={onAddItem}
              values={values}
              item="Side Table"
              category="bedroom"
            />
            <SingleItemCard
              onAddItem={onAddItem}
              values={values}
              item="Wardrob"
              category="bedroom"
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          sx={{
            bgcolor: "#9C9292",
          }}
        >
          <Typography
            textTransform="capitalize"
            textAlign="left"
            fontSize="1.5rem"
            fontWeight="bolder"
            color="#fff"
            sx={{ width: "100%", flexShrink: 0 }}
          >
            my dining room items
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <SingleItemCard
              onAddItem={onAddItem}
              values={values}
              item="Dining Table"
              category="dining"
            />
            <SingleItemCard
              onAddItem={onAddItem}
              values={values}
              item="Dining Chair"
              category="dining"
            />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          sx={{
            bgcolor: "#9C9292",
          }}
        >
          <Typography
            textTransform="capitalize"
            textAlign="left"
            fontSize="1.5rem"
            fontWeight="bolder"
            color="#fff"
            sx={{ width: "100%", flexShrink: 0 }}
          >
            my kitchen items
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <SingleItemCard
              onAddItem={onAddItem}
              values={values}
              item="Cooker"
              category="kitchen"
            />
            <SingleItemCard
              onAddItem={onAddItem}
              values={values}
              item="Fridge"
              category="kitchen"
            />
            <SingleItemCard
              onAddItem={onAddItem}
              values={values}
              item="Washing machine"
              category="kitchen"
            />
            <SingleItemCard
              onAddItem={onAddItem}
              values={values}
              item="Microwave"
              category="kitchen"
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          sx={{
            bgcolor: "#9C9292",
          }}
        >
          <Typography
            textTransform="capitalize"
            textAlign="left"
            fontSize="1.5rem"
            fontWeight="bolder"
            color="#fff"
            sx={{ width: "100%", flexShrink: 0 }}
          >
            my office items
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <SingleItemCard
              onAddItem={onAddItem}
              values={values}
              item="Office Table"
              category="office"
            />
            <SingleItemCard
              onAddItem={onAddItem}
              values={values}
              item="Office Chair"
              category="office"
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
          sx={{
            bgcolor: "#9C9292",
          }}
        >
          <Typography
            textTransform="capitalize"
            textAlign="left"
            fontSize="1.5rem"
            fontWeight="bolder"
            color="#fff"
            sx={{ width: "100%", flexShrink: 0 }}
          >
            my Boxes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <SingleItemCard
              onAddItem={onAddItem}
              values={values}
              item="Boxes"
              category="others"
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default ItemsHolder;
