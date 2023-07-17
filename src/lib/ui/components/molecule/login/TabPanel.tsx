import { ReactComponentProps } from "$/utils/react";
import { Box, Grid, Typography } from "@mui/material";

interface TabPanelProps extends ReactComponentProps {
  index: number;
  value: number;
}

export function TabPanel(props: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={props.value !== props.index}
      id={`simple-tabpanel-${props.index}`}
      aria-labelledby={`simple-tab-${props.index}`}
    >
      {props.value === props.index && (
        <Grid
          container
          id="tab-panel"
          sx={{
            padding: "40px 0",
            justifyContent: "center",
          }}
        >
          <Box>{props.children}</Box>
        </Grid>
      )}
    </div>
  );
}
