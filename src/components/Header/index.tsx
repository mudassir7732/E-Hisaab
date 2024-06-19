import React, { FC } from "react";
import { Box, Button } from "@mui/material";
import TopBar from "../TopBar";
import logo from "../../assets/icons/logo.png";
import { useNavigate } from "react-router-dom";
import { AddShoppingCart } from "@mui/icons-material";
import useStyles from "./styles";

const Header:FC=()=> {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box sx={{ boxShadow: 10, position: 'fixed', top: 0, zIndex: 2}}>
      <TopBar />
      <Box className={classes.Container}>
        <Box>
          <img src={logo} className={classes.Logo} />
        </Box>
        <Box className={classes.ButtonsContainer}>
          <Button
            className={classes.ButtonStyle}
            variant="text"
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Button
            className={classes.ButtonStyle}
            variant="text"
            onClick={() => navigate("/store")}
          >
            Store
          </Button>
          <Button
            className={classes.ButtonStyle}
            variant="text"
            onClick={() => navigate("/cart")}
          >
            Products
          </Button>
          <AddShoppingCart
            className={classes.CartIcon}
            onClick={() => navigate("/cart")}
          />
        </Box>
      </Box>
    </Box>
  );
}
export default Header;