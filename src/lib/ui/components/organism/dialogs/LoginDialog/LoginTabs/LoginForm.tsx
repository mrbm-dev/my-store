import { LoginButton, LoginInput } from "$/lib/ui/components/molecule";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Link from "next/link";

export function LoginForm() {
  return (
    <$ id="login-container" container>
      <>
        <LoginInput
          inputLabel="ایمیل / شماره تماس"
          placeholder="example@mail.com"
          id="email-phone-number"
          showPasswordIcon={false}
        />
        <LoginInput
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
        <A href={""}>فراموشی رمز عبور</A>
      </Grid>
    </$>
  );
}
const $ = styled(Grid)`
  flex-direction: column;
  gap: 4.375rem;
  align-items: center;
`;
const A = styled(Link)`
  border-bottom: 1px solid rgb(43, 52, 69);
`;
