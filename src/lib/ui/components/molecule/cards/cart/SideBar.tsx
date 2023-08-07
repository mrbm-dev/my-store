import styled from "@emotion/styled";
import { Card, Divider, Grid, TextField, Typography } from "@mui/material";

export function SideBar() {
  return (
    <$>
      <Grid container direction="column" gap="1.25rem">
        <Grid container direction="row" justifyContent="space-between">
          <Typography color="GrayText">جمع کل :</Typography>
          <Typography>۱/۰۰۰/۰۰۰ تومان</Typography>
        </Grid>
        <Divider />
        <Grid container direction="column" gap="0.3125rem">
          <Typography fontWeight={700}>نظرات</Typography>
          <TextField id="outlined-multiline-static" multiline rows={6} />
        </Grid>
      </Grid>
    </$>
  );
}

//emotion styles
const $ = styled(Card)`
  display: flex;
  width: 24.6875rem;
  height: 46rem;
  padding: 1.5rem;
  box-shadow: rgba(14, 30, 36, 0.12) 0 0.1rem 0.18rem 0,
    rgba(14, 30, 37, 0.32) 0 0.1rem 0.4rem 0;
`;
