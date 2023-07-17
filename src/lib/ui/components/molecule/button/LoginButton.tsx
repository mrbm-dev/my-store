import styled from "@emotion/styled";
import { Button, SxProps } from "@mui/material";

interface LoginButtonProps {
  label: string;
  sx?: SxProps;
}
export function LoginButton(props: LoginButtonProps) {
  return (
    <CustomButton size="small" sx={props.sx} variant="contained">
      {props.label}
    </CustomButton>
  );
}
const CustomButton = styled(Button)`
  width: 25.25rem;
  height: 2.75rem;
  font-size: 1.125rem;
`;
