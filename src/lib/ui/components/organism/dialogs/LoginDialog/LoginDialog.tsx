import { Dialog, Grid, Typography } from "@mui/material";
import { LoginTabs } from "./LoginTabs";
import Image from "next/image";
import styled from "@emotion/styled";

interface UseLoginDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}
export function LoginDialog(props: UseLoginDialogProps) {
  return (
    <Dialog onClose={props.onClose} open={props.open}>
      <$ container>
        <Header container direction="column" gap={2}>
          <Image
            width={60}
            height={50}
            alt="logo"
            src="https://bazar-react.vercel.app/assets/images/bazaar-black-sm.svg"
          />
          <Typography variant="h5">خوش آمدید</Typography>
        </Header>
        <Grid container>
          <LoginTabs />
        </Grid>
      </$>
    </Dialog>
  );
}

//emotion
const $ = styled(Grid)`
  align-items: center;
  justify-content: center;
`;
const Header = styled(Grid)`
  align-items: center;
  padding: 1.25rem;
`;
