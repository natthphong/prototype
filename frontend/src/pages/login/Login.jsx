import React, { useState } from "react";
import "./login.css";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import { Box, Button, Container, TextField, Typography } from "@mui/material";

import Header from "../component/Header/Header";
export default function Login() {
  const [User, setUser] = useState({
    username: "",
    password: "",
  });

  //const {Users,dispatch} =useContext(UserContext);
  //console.log(Users);

  const haddleUser = (e) => {
    setUser({ ...User, [e.target.id]: e.target.value });
  };
  const navigate = useNavigate();
  const clickRegister = async (e) => {
    e.preventDefault();

    toast.success("Login Success!");
    setTimeout(function () {
      navigate("/home");
    }, 1500);
  };

  return (
    <div className="lcon">
      <Toaster  position="top-center" reverseOrder={false} />
      <Header rl={"rl"} />
      <div className="lcontainner">
        <img src="./profile.png" className="imgproflie" alt="" />
        <Container maxWidth="sm">
          <form onSubmit={clickRegister}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Login
              </Typography>
            </Box>
            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            ></Box>
            <TextField
              required
              fullWidth
              margin="normal"
              type="text"
              name=""
              id="username"
              onChange={haddleUser}
              placeholder="username"
            />
            <TextField
              fullWidth
              margin="normal"
              type="password"
              name=""
              id="password"
              onChange={haddleUser}
              placeholder="password"
              required
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              {" "}
              <Link
                to="/register"
                variant="subtitle2"
                underline="hover"
                sx={{
                  cursor: "pointer",
                }}
              >
                Sign Up
              </Link>
            </Typography>
          </form>
        </Container>
      </div>
    </div>
  );
}
