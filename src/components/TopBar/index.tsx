import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import Rectangle8 from "../../assets/icons/Rectangle8.png";
import useStyles from "./styles";

const TopBar: FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Container}>
      <img src={Rectangle8} className={classes.Logo} />
      <Typography className={classes.Text}>
        Download eHisaab now to maintain your business accounts and get online
        sale orders.
      </Typography>
    </Box>
  );
}
export default TopBar;