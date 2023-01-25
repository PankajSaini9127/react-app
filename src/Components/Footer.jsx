import { AppBar, Container,  Toolbar, Typography } from "@mui/material";
import React from "react";

//icons
// import CopyrightIcon from "@mui/icons-material/Copyright";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

// import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import InstagramIcon from "@mui/icons-material/Instagram";


function Footer() {

  return (
    <>
    <AppBar position="static" sx={{bottom:"0"}}>
      <Container>
        <Toolbar>
          <Typography>Footer</Typography>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}

export default Footer;
