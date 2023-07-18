import { LoginButton, LoginInput } from "$/lib/ui/components/molecule";
import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import Link from "next/link";

interface LoginFormProps {
  resetPassLink: any;
}
export function LoginForm(props: LoginFormProps) {
  return (
    <$ id="login-container" container>
      <>
        <LoginInput
          required={true}
          inputLabel="ایمیل / شماره تماس"
          placeholder="example@mail.com"
          id="email-phone-number"
          showPasswordIcon={false}
        />
        <LoginInput
          required={true}
          inputLabel="رمز عبور"
          placeholder="**********"
          id="password"
          showPasswordIcon={true}
        />
      </>
      <Grid
        container
        gap={3}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <LoginButton label="ورود" />
        <Button size="small" variant="outlined" onClick={props.resetPassLink}>
          فراموشی رمز عبور
        </Button>
      </Grid>
    </$>
  );
}
const $ = styled(Grid)`
  flex-direction: column;
  gap: 4.375rem;
  align-items: center;
`;
