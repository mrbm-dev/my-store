import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  styled,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface LoginInputProps {
  inputLabel: string;
  placeholder: string;
  id: string;
  showPasswordIcon: boolean;
}
export function LoginInput(props: LoginInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <FormControl sx={{ width: "404px", height: "37px" }} variant="standard">
      <InputLabel shrink htmlFor={props.id}>
        {props.inputLabel}
      </InputLabel>
      <UserName
        id={props.id}
        placeholder={props.placeholder}
        type={showPassword || !props.showPasswordIcon ? "text" : "password"}
        endAdornment={
          props.showPasswordIcon && (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
      />
    </FormControl>
  );
}
const UserName = styled(OutlinedInput)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
}));
