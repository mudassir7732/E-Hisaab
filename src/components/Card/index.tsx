import { Close } from '@mui/icons-material';
import { Box, Button, IconButton, Slide, Snackbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useDispatch } from 'react-redux';
import { add_item } from '../../store/reducers/cartSlice';
import ItemModal from '../ItemModal';
import useStyles from './styles';
import { CardProps } from '../../types/cardProps';

const TransitionDown = (props: any) => {
  return <Slide {...props} direction="down" />;
};

const Card: React.FC<CardProps> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showSnackbar, setSnackbar] = useState(false);
  const [transition, setTransition] = useState<any>(undefined);
  const [counter, setCounter] = useState(1);
  const classes = useStyles();
  const dispatch = useDispatch();

  const { title, price, description, thumbnail, image1, image2, image3 } = props;
  const images = [thumbnail, image1, image2, image3];

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const confirmOrder = ({ title, price, image, count }: { title: string; price: number; image: string; count: number }) => {
    dispatch(add_item({ title, price, image, count }));
    setTransition(() => TransitionDown);
    setShowModal(false);
    setSnackbar(true);
  };

  return (
    <Box className={classes.Container}>
      <Snackbar
        open={showSnackbar}
        TransitionComponent={transition}
        onClose={() => setSnackbar(false)}
        autoHideDuration={2500}
        message="Added to Cart"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        action={
          <IconButton color="inherit" onClick={() => setSnackbar(false)}>
            <Close />
          </IconButton>
        }
      />
      <Carousel autoPlay navButtonsAlwaysInvisible IndicatorIcon={false} className={classes.CarouselStyle}>
        {images.map((item) => (
          <img src={item} className={classes.Thumbnail} key={item} alt={title} />
        ))}
      </Carousel>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: '1vh',
          marginInline: '1.1vw',
        }}
      >
        <Typography className={classes.Title} sx={{ color: 'black', textDecorationLine: 'underline' }}>
          Rs.{title}
        </Typography>
        <Typography className={classes.Title} sx={{ color: 'red' }}>
          Rs.{price}
        </Typography>
      </Box>
      <Typography className={classes.desc}>{description.slice(0, 35).concat('...')}</Typography>
      <Button variant="text" className={classes.ButtonStyle} onClick={() => setShowModal(true)}>
        Add To Cart
      </Button>

      <ItemModal
        show={showModal}
        close={() => setShowModal(false)}
        increase={increaseCounter}
        decrease={decreaseCounter}
        counter={counter}
        confirmOrder={confirmOrder}
        title={title}
        price={price}
        desc={description}
        image={thumbnail}
        count={counter}
      />
    </Box>
  );
};

export default Card;
