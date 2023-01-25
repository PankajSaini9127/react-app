import React from "react";

// MUI components
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

//navigate hook
import { useNavigate } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              fontFamily="cursive"
              onClick={() => navigate("/")}
            >
              BookMyTicket
            </Typography>
            <Button
              color="inherit"
              sx={{
                fontWeight: "500",
                fontSize: "15px",
                fontFamily: "cursive",
              }}
              onClick={() => navigate("/myshow")}
            >
              My Show
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
