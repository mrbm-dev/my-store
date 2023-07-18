import styled from "@emotion/styled";
import { Button, SxProps } from "@mui/material";

interface LoginButtonProps {
  label: string;
  sx?: SxProps;
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}
export function LoginButton(props: LoginButtonProps) {
  return (
    <CustomButton
      size={props.size}
      sx={props.sx}
      variant={props.variant}
      onClick={props.onClick}
    >
      {props.label}
    </CustomButton>
  );
}
const CustomButton = styled(Button)`
  width: 25.25rem;
  height: 2.75rem;
  font-size: 1.125rem;
  text-transform: none;
`;
LoginButton.defaultProps = {
  variant: "contained",
  size: "small",
};
