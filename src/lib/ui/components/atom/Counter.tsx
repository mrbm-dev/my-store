import styled from "@emotion/styled";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export function Counter() {
  return (
    <$ container>
      <CounterButton size="small" variant="outlined">
        <RemoveRoundedIcon sx={{ fontSize: "18px" }} />
      </CounterButton>
      <Typography sx={{ fontSize: "16px" }}>۲</Typography>
      <CounterButton size="small" variant="outlined">
        <AddRoundedIcon sx={{ fontSize: "18px" }} />
      </CounterButton>
    </$>
  );
}

//style emotion
const $ = styled(Grid)`
  direction: row;
  gap: 8px;
  align-items: center;
`;
const CounterButton = styled(Button)`
  min-width: 28px;
`;
