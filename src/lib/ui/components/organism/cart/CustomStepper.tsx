import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { CardItem, SideBar } from "$/lib/ui";
import { Grid, StepLabel } from "@mui/material";

const steps = ["سبد خرید", "جزيیات", "پرداخت", "بررسی"];

export function CustomStepper() {
  const [activeStep, setActiveStep] = useState(0);
  // const [completed, setCompleted] = useState<{
  //   [k: number]: boolean;
  // }>({});

  // const totalSteps = () => {
  //   return steps.length;
  // };

  // const completedSteps = () => {
  //   return Object.keys(completed).length;
  // };

  // const isLastStep = () => {
  //   return activeStep === totalSteps() - 1;
  // };

  // const allStepsCompleted = () => {
  //   return completedSteps() === totalSteps();
  // };

  // const handleNext = () => {
  //   const newActiveStep =
  //     isLastStep() && !allStepsCompleted()
  //       ? // It's the last step, but not all steps have been completed,
  //         // find the first step that has been completed
  //         steps.findIndex((step, i) => !(i in completed))
  //       : activeStep + 1;
  //   setActiveStep(newActiveStep);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleStep = (step: number) => () => {
  //   setActiveStep(step);
  // };

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  //   setCompleted({});
  // };

  function nextStep() {
    setActiveStep((currentStep) => currentStep + 1);
  }
  function previewStep() {
    setActiveStep((currentStep) => currentStep - 1);
  }

  return (
    <Box>
      <Stepper activeStep={activeStep}>
        <Step>
          <StepButton>1</StepButton>
        </Step>
        <Step>
          <StepButton>2</StepButton>
        </Step>
        <Step>
          <StepButton>3</StepButton>
        </Step>
      </Stepper>
      <Button variant="outlined" onClick={nextStep}>
        Next
      </Button>
      <Button variant="outlined" onClick={previewStep}>
        Preview
      </Button>
    </Box>

    // <Box sx={{ width: "100%" }}>
    //   <Stepper nonLinear activeStep={activeStep}>
    //     {steps.map((label, index) => (
    //       <Step key={label} completed={completed[index]}>
    //         {/* <Grid container direction="row" justifyContent="space-between">
    //           <SideBar />
    //           <CardItem />
    //         </Grid> */}
    //         <StepButton color="inherit" onClick={handleStep(index)}>
    //           {label}
    //         </StepButton>
    //       </Step>
    //     ))}
    //   </Stepper>
    //   <div>
    //     {allStepsCompleted() ? (
    //       <>
    //         <Typography sx={{ mt: 2, mb: 1 }}>
    //           All steps completed - you&apos;re finished
    //         </Typography>
    //         <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
    //           <Box sx={{ flex: "1 1 auto" }} />
    //           <Button onClick={handleReset}>Reset</Button>
    //         </Box>
    //       </>
    //     ) : (
    //       <>
    //         {activeStep === 1 ? (
    //           <Typography sx={{ mt: 2, mb: 1, py: 1 }}>Hello</Typography>
    //         ) : (
    //           <Typography sx={{ mt: 2, mb: 1, py: 1 }}>Hi</Typography>
    //         )}
    //         <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
    //           <Button
    //             color="inherit"
    //             disabled={activeStep === 0}
    //             onClick={handleBack}
    //             sx={{ mr: 1 }}
    //           >
    //             Back
    //           </Button>
    //           <Box sx={{ flex: "1 1 auto" }} />
    //           <Button onClick={handleNext} sx={{ mr: 1 }}>
    //             Next
    //           </Button>
    //           {activeStep !== steps.length &&
    //             (completed[activeStep] ? (
    //               <Typography
    //                 variant="caption"
    //                 sx={{ display: "inline-block" }}
    //               >
    //                 Step {activeStep + 1} already completed
    //               </Typography>
    //             ) : (
    //               <Button onClick={handleComplete}>
    //                 {completedSteps() === totalSteps() - 1
    //                   ? "Finish"
    //                   : "Complete Step"}
    //               </Button>
    //             ))}
    //         </Box>
    //       </>
    //     )}
    //   </div>
    // </Box>
  );
}
