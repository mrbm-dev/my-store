import { LoginButton, LoginInput } from "$/lib/ui/components/molecule";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

export function ResetPassword() {
  return (
    <$ container>
      <Typography variant="h4">رمز عبور خود را بازیابی کنید</Typography>
      <LoginInput
        inputLabel={"ایمیل"}
        placeholder={"ایمیل"}
        id={"reset-pass"}
        showPasswordIcon={false}
        required={true}
      />
      <LoginButton label={"بازیابی رمز عبور"} />
    </$>
  );
}
const $ = styled(Grid)`
  flex-direction: column;
  gap: 16px;
`;
