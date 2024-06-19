import React, { FC } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Banner from "../../assets/images/Banner.png";
import useStyles from "./styles";
import { GreetingsProps } from "../../types/greetingProps";

const GreetingsModal: FC<GreetingsProps> = (props) => {
  const classes = useStyles();
  const { show, close } = props;

  return (
    <Modal open={show} onClose={close}>
      <Box className={classes.Container}>
        <img src={Banner} className={classes.Image} />
        <Typography className={classes.ThankYou}>Thank You</Typography>
        <Typography className={classes.Text}>
          Jamal Garments will contact you see for confirmation
        </Typography>
        <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
          <Link
            to={"/store"}
            style={{ textDecoration: "none", marginBlock: "2vh" }}
          >
            <Button variant="contained">Continue Shopping</Button>
          </Link>
        </Box>
      </Box>
    </Modal>
  );
}
export default GreetingsModal;
