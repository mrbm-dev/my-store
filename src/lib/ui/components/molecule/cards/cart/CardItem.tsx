import styled from "@emotion/styled";
import {
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Counter } from "$/lib/ui";
import { useCallback, useState } from "react";
import Link from "next/link";

export function CardItem() {
  //hooks
  const [open, setOpen] = useState(true);

  //function
  const closeCard = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Collapse in={open}>
      <$>
        <CardMedia
          component="img"
          sx={{ width: 140 }}
          alt="card image cover"
          image="https://bazar-react.vercel.app/assets/images/products/Fashion/Clothes/21.YellowCasualSweater.png"
        />
        <Grid container direction="column" justifyContent="center" gap={1}>
          <Title href={""}>پلیور یقه بلند نقره ای</Title>
          <Typography variant="subtitle2">قیمت: ۱۰۰.۰۰۰ x ۱</Typography>
          <Typography variant="subtitle2" color="primary">
            قیمت کل: ۱۰۰.۰۰۰
          </Typography>
          <Counter />
        </Grid>
        <IconButton sx={{ height: "fit-content" }} onClick={closeCard}>
          <CloseRoundedIcon />
        </IconButton>
      </$>
    </Collapse>
  );
}

//emotion styles
const $ = styled(Card)`
  display: flex;
  width: 40rem;
  height: 9rem;
  padding: 0.625rem;
  box-shadow: rgba(14, 30, 36, 0.12) 0 0.1rem 0.18rem 0,
    rgba(14, 30, 37, 0.32) 0 0.1rem 0.4rem 0;
  &:hover {
    box-shadow: rgba(14, 30, 37, 0.12) 0 0.25rem 0.5rem 0,
      rgba(14, 30, 37, 0.32) 0 0.25rem 1.375rem 0;
  }
`;
const Title = styled(Link)`
  font-size: 1.125rem;
`;
