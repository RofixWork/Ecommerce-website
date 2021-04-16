import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Badge, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    transform: "translateZ(0)",

    "& .MuiToolbar-root": {
      justifyContent: "space-between",
    },
  },
  title: {
    width: 90,
  },
  icon: {
    color: "#222",
    fontSize: 28,
  },
}));
const Navbar = () => {
  const classes = useStyles();
  const { totalQuantities } = useSelector((state) => state.cart);
  return (
    <>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <Link to="/">
            <img src="/images/logo.webp" className={classes.title} alt="" />
          </Link>
          <Link to="/cart">
            <IconButton>
              <Badge badgeContent={totalQuantities} color="secondary">
                <LocalMallIcon className={classes.icon} />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
