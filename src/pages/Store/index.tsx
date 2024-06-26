import React, { FC, useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Ellipse from "../../assets/icons/Ellipse1.png";
import Card from "../../components/Card";
import axios from "axios";
import useStyles from "./styles";

const Store: FC = () => {
  const [nameFilter, setNameFilter] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [priceRange, setPriceRange] = useState<number>(Infinity);
  const classes = useStyles();

  useEffect(() => {
    getCardData();
  }, []);

  const getCardData = async () => {
    await axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res?.data?.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, " = Error");
      });
  };

  const getSearchData = async () => {
    const client = axios.create({
      baseURL: `https://dummyjson.com/products/search?q=${nameFilter}`,
    });
    await client
      .get()
      .then((res) => {
        setData(res?.data?.products);
      })
      .catch((err) => {
        console.log(err, 'fetch item error')
      });
  };

  const useDebounce = (e) => {
    setTimeout(() => {
      getSearchData(e)
    }, 1800);
  }

  return (
    <>
      {loading && (
        <Backdrop
          open={loading}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <Box className={classes.Container}>
        <Box className={classes.TopBlock}>
          <img src={Ellipse} className={classes.Image} />
          <Box sx={{ padding: "5px" }}>
            <Typography className={classes.Title}>Pine Technologies</Typography>
            <Typography className={classes.Text}>
              It is a big established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. the point of
              using lorem ipsum is that it has a
            </Typography>
            <Typography className={classes.Text} sx={{ paddingTop: "2vh" }}>
              Shop # 206 ZS Plaza Gilgit
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography className={classes.Text}>03402042304</Typography>
              <Typography className={classes.Text}>Garments</Typography>
            </Box>
          </Box>
        </Box>

        <Box className={classes.SearchBarContainer}>
          <TextField
            placeholder="Search bar"
            className={classes.SearchBarStyle}
            onChange={(e) => useDebounce(e)}
            value={nameFilter}
            InputProps={{
              startAdornment: (
                <Search sx={{ fontSize: "20px", color: "#808080" }} />
              ),
            }}
          />
          <FormControl>
            <InputLabel className={classes.InputLabelStyle}>
              Min Price-Max Price
            </InputLabel>
            <Select
              className={classes.SearchBarStyle}
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <MenuItem value={200}>Less than 200</MenuItem>
              <MenuItem value={300}>Less than 300</MenuItem>
              <MenuItem value={400}>Less than 400</MenuItem>
              <MenuItem value={500}>Less than 500</MenuItem>
              <MenuItem value={600}>Less than 600</MenuItem>
              <MenuItem value={700}>Less than 700</MenuItem>
              <MenuItem value={800}>Less than 800</MenuItem>
              <MenuItem value={900}>Less than 900</MenuItem>
              <MenuItem value={1000}>Less than 1000</MenuItem>
              <MenuItem value={Infinity}>More than 1000</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box className={classes.CardsContainer}>
          {data &&
            data
              .filter((filtered) => filtered.price < priceRange)
              .map((item) => {
                return (
                  <>
                    {item?.title && (
                      <Card
                        title={item?.title}
                        price={item?.price}
                        description={item?.description}
                        thumbnail={item?.thumbnail}
                        image1={item?.images[0]}
                        image2={item?.images[1]}
                        image3={item?.images[2]}
                      />
                    )}
                  </>
                );
              })}
        </Box>
      </Box>
    </>
  );
}
export default Store;