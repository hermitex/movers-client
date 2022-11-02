import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const labels = [
  {
    title: "Exact Prices. No Surprises",
    subtitle:
      "No ballpark estimates or hourly rates. Only Pay for what you actually move.",
  },
  {
    title: "Tell Friends Get 20% discount",
    subtitle:
      "Share your link to give your friends 20% discount towards their next move. For every friend who moves you'll get 20% discount!",
  },
  {
    title: "Save Your Move Plan",
    subtitle: "Don't lose your work! Sign up & continue booking any time.",
  },
  {
    title: "Changing The Way People Move",
    subtitle:
      "Plan, compare, book & manage your move. Booking your move is now as easy as booking your next vacation!",
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = labels.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        flexGrow: 1,
        height: 550,
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {labels.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  flexFlow: "column",
                  justifyContent: "center",
                  gap: 3,
                  maxWidth: 400,
                  height: 550,
                  pl: 2,
                  bgcolor: "rgb(0,0,0,0.2)",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#fff",
                  }}
                >
                  {labels[activeStep].title}
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    color: "#fff",
                    lineHeight: 1.4,
                  }}
                >
                  {labels[activeStep].subtitle}
                </Typography>
              </Paper>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          bgcolor: "rgb(0,0,0,0.2)",
          color: "#fff",
        }}
        nextButton={
          <Button
            size="large"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

export default Carousel;
