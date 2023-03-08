import {  React, useContext, useState } from "react";
import "./register.css"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { UserContext } from "../context/registerContext";
import Header from "../component/Header/Header";
export default function Register() {

  const [User, setUser] = useState({
    username: "",
    password: "",
  });

  //const {Users,dispatch} =useContext(UserContext);

  const haddleUser = (e) => {
    setUser({ ...User, [e.target.id]: e.target.value });
  };
  const navigate = useNavigate();
  const clickRegister = async (e) => {
    e.preventDefault();
    //dispatch({type:"Register" , payload:[...Users ,User]})
        navigate("/login");
      
  };
  
  return (
    <div className="lcon">
      <Header/>
    
     
      <div className="lcontainner">
        <img src="./profile.png" className="imgproflie" />
        <Container maxWidth="sm">
          <form onSubmit={clickRegister}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Sign up
              </Typography>
            </Box>
            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            ></Box>
            <TextField
              fullWidth
              margin="normal"
              type="text"
              name=""
              id="username"
              onChange={haddleUser}
              placeholder="username"
              required
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
                onClick={clickRegister}
              >
                Sign Up Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              {" "}
              <Link
                to="/login"
                variant="subtitle2"
                underline="hover"
                sx={{
                  cursor: "pointer",
                }}
              >
                Sign In
              </Link>
            </Typography>
          </form>
        </Container>
        </div>
 
    </div>
  );
}
