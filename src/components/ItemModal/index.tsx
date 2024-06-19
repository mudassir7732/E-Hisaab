import React, { FC } from "react";
import { Box, Button, Divider, Grid, Modal, Typography } from "@mui/material";
import { ControlPoint, RemoveCircleOutline } from "@mui/icons-material";
import Ellipse from "../../assets/icons/Ellipse1.png";
import { ModalProps } from "../../types/modalProps";
import useStyles from "./styles";


const ItemModal: FC<ModalProps> = (props) => {
  console.log(props, ' = modal Props ')
  const classes = useStyles();

  const {
    show,
    close,
    title,
    price,
    increase,
    count,
    decrease,
    desc,
    image,
    confirmOrder,
  } = props;

  return (
    <Modal open={show} onClose={close}>
      <Grid container className={classes.Container}>
        <Grid
          item
          xs={12}
          sm={7}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={image} className={classes.ImageBlock} />
        </Grid>

        <Grid item xs={12} sm={5} className={classes.DetailsBlock}>
          <Box sx={{ display: "flex", flexdirection: "row", padding: "3vh" }}>
            <img src={Ellipse} className={classes.Logo} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography className={classes.StoreName}>Store name</Typography>
              <Typography className={classes.StoreAddress}>
                Shop number 102 ZS plaza gilgit
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ padding: "3vh", paddingRight: "8vh" }}>
            <Typography sx={{ fontWeight: '900', color: 'navy', textDecorationLine: 'underline' }}>{title}</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ marginTop: "1vh", color: 'red' }}>
                Rs.{price * count}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <ControlPoint
                  sx={{ height: "16.5px", width: "16.5px" }}
                  onClick={increase}
                />
                <Typography sx={{ fontSize: "13px", paddingInline: "1vh" }}>
                  {count}
                </Typography>
                <RemoveCircleOutline
                  sx={{ height: "16.5px", width: "16.5px" }}
                  onClick={decrease}
                />
              </Box>
            </Box>
            <Typography sx={{ marginTop: "2vh" }}>{desc}</Typography>
            <Box
              sx={{
                display: "flex",
                minWidth: "100%",
                paddingLeft: "3vh",
                alignItems: "self-end",
                justifyContent: "center",
              }}
            >
              <Button sx={{ marginTop: '1vh' }}
                variant="outlined"
                onClick={() => confirmOrder({ title, price, image, count })}
              >
                Confirm Order
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Modal>
  );
}
export default ItemModal;