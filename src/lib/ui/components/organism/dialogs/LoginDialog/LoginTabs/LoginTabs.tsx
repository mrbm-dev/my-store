import { TabPanel } from "$/lib/ui";
import { ResetPassword } from "$/lib/ui/components/organism";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export function LoginTabs() {
  //hooks
  const [value, setValue] = useState(0);
  const [showComponent, setShowComponent] = useState(false);

  //functions
  function tabChange(event: React.SyntheticEvent, newValue: number) {
    setValue(newValue);
  }
  function changeComponent() {
    setShowComponent(true);
  }
  return (
    <>
      {!showComponent ? (
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={tabChange}>
              <Tab label="ورود" />
              <Tab label="ثبت نام" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <LoginForm resetPassLink={changeComponent} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <RegisterForm />
          </TabPanel>
        </Box>
      ) : (
        <></>
      )}
      {/* {showComponent ? <ResetPassword /> : <></>} */}
    </>
  );
}
