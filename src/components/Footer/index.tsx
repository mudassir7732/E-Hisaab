import React, { FC } from 'react';
import { Box } from "@mui/material";
import Rectangle8 from "../../assets/icons/Rectangle8crop.png";
import Rectangle10 from "../../assets/icons/Rectangle10.png";
import { Search } from "@mui/icons-material";
import useStyles from "./styles";

const Footer: FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.Container}>
      <Box>
        <img src={Rectangle8} className={classes.Image} />
        <img src={Rectangle10} className={classes.Image} />
      </Box>
      <Box
        sx={{ width: "25%", display: "flex", justifyContent: "space-evenly" }}
      >
        <Search className={classes.Image} />
        <Search className={classes.Image} />
        <Search className={classes.Image} />
      </Box>
    </Box>
  );
}
export default Footer;