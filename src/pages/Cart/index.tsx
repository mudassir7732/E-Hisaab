import {
  ControlPoint,
  DeleteOutline,
  RemoveCircleOutline,
  Search,
} from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThankYouModal from '../../components/ThankYouModal';
import * as yup from 'yup';
import axios from 'axios';
import {
  remove_item,
  increase_count,
  decrease_count,
} from '../../store/reducers/cartSlice';
import useStyles from './styles';

const ValidationSchema = yup.object({
  name: yup.string().required('Name required'),
  phone: yup.string().required('Phone required'),
  city: yup.string().required('City required'),
  state: yup.string().required('State required'),
  street: yup.string().required('Street required'),
});

interface CartItem {
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  image1: string;
  image2: string;
  image3: string;
  count: number;
}

interface State {
  cart: CartItem[];
}

const Cart: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const cartData = useSelector((state: State) => state.cart);

  const calculateTotalCost = () => {
    let sum = 0;
    let pro = 0;
    cartData.forEach((item) => {
      pro = item.price * item.count;
      sum += pro;
    });
    setTotalCost(sum);
  };

  useEffect(() => {
    calculateTotalCost();
  }, [cartData]);

  const placeOrder = async (values: { name: string; phone: string; city: string; state: string; street: string }) => {
    try {
      const res = await axios.post('http://192.168.88.250:5000/api/cod', {
        name: values.name,
        phoneNumber: values.phone,
        city: values.city,
        state: values.state,
        streetAddress: values.street,
      });
      console.log(res, ' = Result');
      setShowModal(true);
    } catch (err) {
      console.log(err, ' = Error');
    }
  };

  return (
    <Box className={classes.Container}>
      <Box className={classes.RightBlock}>
        <Typography>{totalCost}</Typography>
        <Formik
          initialValues={{
            name: '',
            phone: '',
            city: '',
            state: '',
            street: '',
          }}
          validationSchema={ValidationSchema}
          onSubmit={placeOrder}
        >
          {({ values, handleChange, errors, handleSubmit, touched }) => (
            <Form placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <Box className={classes.CredentialsCard} sx={{ boxShadow: 2 }}>
                <TextField
                  placeholder="Name"
                  size="small"
                  className={classes.Input}
                  name="name"
                  fullWidth
                  error={Boolean(errors.name && touched.name)}
                  value={values.name}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <Search className={classes.SearchIcon} />,
                  }}
                />
                <Typography>{errors.name && touched.name && errors.name}</Typography>

                <TextField
                  placeholder="Phone"
                  size="small"
                  className={classes.Input}
                  name="phone"
                  fullWidth
                  error={Boolean(errors.phone && touched.phone)}
                  value={values.phone}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <Search className={classes.SearchIcon} />,
                  }}
                />
                <Typography>{errors.phone && touched.phone && errors.phone}</Typography>

                <TextField
                  placeholder="City"
                  size="small"
                  className={classes.Input}
                  name="city"
                  fullWidth
                  error={Boolean(errors.city && touched.city)}
                  value={values.city}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <Search className={classes.SearchIcon} />,
                  }}
                />
                <Typography>{errors.city && touched.city && errors.city}</Typography>

                <TextField
                  placeholder="State"
                  size="small"
                  className={classes.Input}
                  name="state"
                  fullWidth
                  error={Boolean(errors.state && touched.state)}
                  value={values.state}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <Search className={classes.SearchIcon} />,
                  }}
                />
                <Typography>{errors.state && touched.state && errors.state}</Typography>

                <TextField
                  placeholder="Street Address"
                  size="small"
                  className={classes.Input}
                  name="street"
                  fullWidth
                  error={Boolean(errors.street && touched.street)}
                  value={values.street}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: <Search className={classes.SearchIcon} />,
                  }}
                />
                <Typography>{errors.street && touched.street && errors.street}</Typography>
              </Box>

              <Box className={classes.TotalPrice} sx={{ boxShadow: 2 }}>
                <Typography>Total Price</Typography>
                <Typography>{totalCost}</Typography>
              </Box>

              <Box sx={{ marginInline: '2vh', paddingBottom: '2vh' }}>
                <Button fullWidth variant="contained" onClick={handleSubmit}>
                  Place Order (COD)
                </Button>
              </Box>
            </Form>
          )}
        </Formik>

        <ThankYouModal show={showModal} close={() => setShowModal(false)} />
      </Box>

      <Box className={classes.LeftBlock}>
        {cartData.map((item, index) => (
          <Box key={index} className={classes.ItemCard} sx={{ boxShadow: 2 }}>
            <Box>
              <Typography sx={{ textDecorationLine: 'underline', fontStyle: 'italic' }}>Package {index + 1}</Typography>
              <Typography>Store Name</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <img src={item.image1} className={classes.Image} alt={item.title} />
                <Box>
                  <Typography
                    sx={{
                      color: '#006500',
                      fontWeight: '900',
                      textDecorationLine: 'underline',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Typography>{item.price} x </Typography>
                    <Typography>{item.count} = </Typography>
                    <Typography>{item.price * item.count}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <ControlPoint
                  sx={{ height: '16.5px', width: '16.5px' }}
                  onClick={() => dispatch(increase_count(index))}
                />
                <Typography sx={{ fontSize: '13px', paddingInline: '1vh' }}>{item.count}</Typography>
                <RemoveCircleOutline
                  sx={{ height: '16.5px', width: '16.5px' }}
                  onClick={() => dispatch(decrease_count(index))}
                />
              </Box>
              <DeleteOutline sx={{ alignSelf: 'end', height: '19px', color: 'red' }} onClick={() => dispatch(remove_item(index))} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Cart;
