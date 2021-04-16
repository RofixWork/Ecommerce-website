import React from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  Typography,
  Button,
  ButtonGroup,
  Box,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "65px",
    padding: "60px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0",
    },
    "& .MuiPaper-root": {
      padding: theme.spacing(2),
    },
    "& .MuiTypography-h6": {
      fontSize: 22,
      "&:nth-of-type(1)": {
        textDecoration: "line-through",
        fontStyle: "italic",
        opacity: 0.8,
      },
      "&:nth-of-type(2)": {
        marginLeft: 14,
      },
    },
  },
  imageProduct: {
    margin: "0 auto",
    display: "block",
    width: "90%",
    height: "400px",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
      width: "100%",
    },
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  btnCart: {
    flexGrow: 1,
    marginLeft: "5px",
  },
}));
const Details = () => {
  const [quantity, setQuantity] = React.useState(1);
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  React.useEffect(() => {
    dispatch({ type: "PRODUCT", payload: id });
  }, [dispatch, id]);

  const incQuantity = () => setQuantity((prev) => prev + 1);
  const decQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  //addToCart
  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Paper>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5} md={5} lg={6}>
              <Box className={classes.imageProduct}>
                <img src={`/images/${product.image}`} alt="" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={6}>
              <Typography style={{ textTransform: "capitalize" }} variant="h4">
                S{product.name}
              </Typography>
              <Box margin="15px 0" display="flex" alignItems="center">
                <Typography variant="h6">${product.price}</Typography>
                <Typography variant="h6">${product.discountPrice}</Typography>
              </Box>
              <Box display="flex">
                <ButtonGroup variant="outlined" color="default" size="large">
                  <Button onClick={decQuantity}>-</Button>
                  <Button>{quantity}</Button>
                  <Button onClick={incQuantity}>+</Button>
                </ButtonGroup>
                <Button
                  className={classes.btnCart}
                  variant="contained"
                  color="secondary"
                  onClick={addToCart}
                >
                  add to cart
                </Button>
              </Box>
              <Box marginTop="25px">
                <Typography variant="h5">Details:</Typography>
                <Typography variant="subtitle1">{product.desc}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default Details;
