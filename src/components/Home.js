import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import {
  Container,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px",

    "& .MuiPaper-root": {
      transition: "transform .3s cubic-bezier(0.05, 0.06, 0.58, 1)",
      "&:hover": {
        transform: "translateY(-10px)",
        transition: "transform .3s cubic-bezier(0.05, 0.06, 0.58, 1)",
      },
    },

    "& .MuiCardMedia-root": {
      height: 300,
    },
    "& .MuiTypography-h6": {
      textTransform: "capitalize",
      fontSize: 18,
      [theme.breakpoints.down("sm")]: {
        fontSize: 16,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 15,
      },
    },
    "& .MuiTypography-subtitle1": {
      fontSize: 18,
      opacity: 0.8,
      "&:nth-of-type(1)": {
        fontWeight: 500,
        textDecoration: "line-through",
        fontStyle: "italic",
      },
      "&:nth-of-type(2)": {
        fontWeight: 700,
      },
    },
  },
  price: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  discount: {
    display: "inline-block",
    marginLeft: 8,
  },
}));
const Home = () => {
  const classes = useStyles();
  const { products } = useSelector((state) => state.products);
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            {products.map((product) => {
              const {
                id,
                name,
                image,
                price,
                discount,
                discountPrice,
              } = product;
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                  <Card>
                    <Link to={`/details/${id}`}>
                      <CardActionArea>
                        <CardMedia image={`/images/${image}`} title={name} />
                        <CardContent>
                          <Typography variant="h6">{name}</Typography>
                          <div className={classes.price}>
                            <Typography variant="subtitle1">
                              ${price}
                              <Typography
                                variant="body1"
                                className={classes.discount}
                                color="secondary"
                              >
                                {discount}%
                              </Typography>
                            </Typography>
                            <Typography variant="subtitle1">
                              ${discountPrice}
                            </Typography>
                          </div>
                        </CardContent>
                      </CardActionArea>
                    </Link>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Home;
