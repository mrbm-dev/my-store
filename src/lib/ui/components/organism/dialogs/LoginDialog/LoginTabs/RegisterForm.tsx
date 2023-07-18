import { LoginButton, LoginInput } from "$/lib/ui/components/molecule";
import styled from "@emotion/styled";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";

export function RegisterForm() {
  return (
    <$ id="login-container" container>
      <LoginInput
        inputLabel="نام و نام خانوادگی"
        placeholder="ابراهیم هادی"
        id="full-name"
        showPasswordIcon={false}
        required={true}
      />
      <LoginInput
        inputLabel="ایمیل / شماره تماس"
        placeholder="example@mail.com"
        id="email-phone-number"
        showPasswordIcon={false}
        required={true}
      />
      <LoginInput
        inputLabel="رمز عبور"
        placeholder="**********"
        id="password"
        showPasswordIcon={true}
        required={true}
      />
      <LoginInput
        inputLabel="تایید رمز عبور"
        placeholder="**********"
        id="re-type-password"
        showPasswordIcon={true}
        required={true}
      />
      <Grid
        container
        gap={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <FormControlLabel
          labelPlacement="start"
          control={<Checkbox />}
          label="قوانین را میپذیرم"
        />

        <LoginButton label="ثبت نام" />
      </Grid>
    </$>
  );
}
const $ = styled(Grid)`
  flex-direction: column;
  gap: 4.375rem;
  align-items: center;
`;
