import { Box, Divider, Drawer, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import { ShoppingCard } from "../surfaces/ShoppingCard";
import { useSelector } from "react-redux";
import { LoginButton } from "../molecule";
import { useRouter } from "next/router";
import { useCallback } from "react";
// import { selectCart } from "../../store/slice/cart-slice";

interface CustomDrawerProps {
  openDrawer: boolean;
  onClose: () => void;
}
export function CustomDrawer(props: CustomDrawerProps) {
  //hooks
  const router = useRouter();
  // const cart = useSelector(selectCart);
  // const cartQuantity = cart.totalQuantity;
  // const cartItem = cart.items;

  //callback
  const goToCartPage = useCallback(() => {
    router.push("/cart");
  }, []);

  return (
    <>
      <Drawer
        open={props.openDrawer}
        onClose={props.onClose}
        anchor="right"
        sx={{ width: "380px" }}
      >
        <Box
          sx={{
            height: "74px",
            width: "340px",
            display: "flex",
            alignItems: "center",
            padding: "12px",
            gap: "10px",
          }}
        >
          <ShoppingBagOutlinedIcon sx={{ fontSize: "28px", margin: 0 }} />
          <Typography
            variant="caption"
            sx={{ color: "#000", fontSize: "18px" }}
          >
            {1} Item
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            height: "inherit",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            {/* {cartItem.map((item: any) => {
              return (
                <ShoppingCard
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  totalPrice={item.totalPrice}
                  srcImage={item.srcImage}
                />
              );
            })} */}
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              padding: "10px",
            }}
          >
            <LoginButton label={` پرداخت کنید (${0})`} />
            <LoginButton
              variant="outlined"
              label="مشاهده سبد خرید"
              onClick={goToCartPage}
            />
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
