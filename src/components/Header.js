import React from "react";
import { makeStyles } from "@material-ui/core";

const imageHeader =
  "https://images.pexels.com/photos/5926462/pexels-photo-5926462.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${imageHeader})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "rgba(0,0,0,.3)",
    backgroundBlendMode: "overlay",
  },
}));
const Header = () => {
  const classes = useStyles();
  return <div className={classes.header}></div>;
};

export default Header;
