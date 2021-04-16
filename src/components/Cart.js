import React from "react";
import {
  Box,
  Typography,
  Container,
  makeStyles,
  Grid,
  Button,
  ButtonGroup,
  IconButton,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 80,
    "& .MuiTableHead-root": {
      backgroundColor: "#f4f4f4",
    },
  },
  imgProduct: {
    width: 80,
    height: 100,
  },
  head: {
    backgroundColor: "#f50057",
    color: "white",
    padding: "5px",
  },
  details: {
    padding: "10px",
  },
}));
const Cart = () => {
  const classes = useStyles();
  const { products, totalPrice, totalQuantities } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const Increment = (id) => {
    dispatch({ type: "INC", payload: id });
  };
  const Decrement = (id) => {
    dispatch({ type: "DEC", payload: id });
  };
  const Remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  return (
    <>
      <Box className={classes.root}>
        <Container maxWidth="xl">
          <Typography variant="h6">
            {products.length ? "Your Cart" : "Cart Empty..."}
          </Typography>
          {products.length ? (
            <Grid container spacing={1}>
              <Grid item md={8} sm={12} xs={12}>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Picture</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Inc/Dec</TableCell>
                        <TableCell>Total Price</TableCell>
                        <TableCell>Remove</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {products.map((pr) => {
                        const { id, name, image, discountPrice, quantity } = pr;
                        return (
                          <TableRow key={id}>
                            <TableCell component="th" scope="row">
                              <img
                                src={`/images/${image}`}
                                className={classes.imgProduct}
                                alt=""
                              />
                            </TableCell>

                            <TableCell>{name}</TableCell>

                            <TableCell>${discountPrice}</TableCell>

                            <TableCell>
                              <ButtonGroup variant="outlined" color="default">
                                <Button onClick={() => Decrement(id)}>-</Button>
                                <Button>{quantity}</Button>
                                <Button onClick={() => Increment(id)}>+</Button>
                              </ButtonGroup>
                            </TableCell>

                            <TableCell>
                              ${(discountPrice * quantity).toFixed(2)}
                            </TableCell>

                            <TableCell>
                              <IconButton onClick={() => Remove(id)}>
                                <DeleteOutlineIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <Paper>
                  <Box className={classes.head}>
                    <Typography variant="h6">Summary</Typography>
                  </Box>
                  <Box className={classes.details}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      marginY={1}
                    >
                      <Typography variant="h6">Total Items:</Typography>
                      <Typography variant="h6">{totalQuantities}</Typography>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      marginY={1}
                    >
                      <Typography variant="h6">Total Price:</Typography>
                      <Typography variant="h6">
                        ${totalPrice.toFixed(2)}
                      </Typography>
                    </Box>
                    <Button fullWidth variant="contained" color="secondary">
                      checkout
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          ) : null}
        </Container>
      </Box>
    </>
  );
};

export default Cart;
