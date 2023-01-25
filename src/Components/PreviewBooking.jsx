import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmBook } from "../Ac.tion";
import { AppContext } from "../App";

function PreviewBooking() {
  const {
    state: { selectToBook, bookingDetails },
    dispatch
  } = useContext(AppContext);

  const TicketBooked = {
      movieName: selectToBook[0].Title,
      yearOfPublish : selectToBook[0].Year,
      poster : selectToBook[0].Poster,
      cName : bookingDetails.name,
      theater : bookingDetails.theater,
      seat : bookingDetails.seat,
      time : bookingDetails.time
  }

  const [open,setOpen] =useState(false)

  const Navigate = useNavigate()

  const handleConfirm = ()=>{
    setOpen(true)
    dispatch(confirmBook(TicketBooked))
  }

  const handleClose = ()=>{
    setOpen(false)
    Navigate("/")
  }

  return (
    <>
      <Container sx={{ mt: 2, minHeight: "450px" }}>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert
          variant="filled"
            severity="success"
            sx={{ width: "100%" }}
          >
            Ticket Booking Confirmed
          </Alert>
        </Snackbar>
        <Button variant="outlined" onClick={()=>Navigate(-1)}>Back</Button>
        <Typography variant="h5" textAlign="center" >
          Preview Booking
        </Typography>
        <Grid container spacing={2} sx={{justifyContent:"space-evenly",'@media(max-width:600px)':{mt:2}}}>
          <Grid item container spacing={2} sm={6} xs={11} sx={{ flexDirection: "row", '@media(max-width:600px)' : {flexDirection:"column"} }}>
            <Box component="img" src={selectToBook[0].Poster} height="300px" />
            <Grid sx={{ alignSelf: "center" }}>
              <Typography variant="body1" fontSize="20px" textAlign="center" sx={{'@media(max-width:600px)':{fontSize:"25px",mt:1}}}>
                {selectToBook[0].Title}
              </Typography>
              <Typography variant="body1" fontSize="15px" textAlign="center">
                {selectToBook[0].Year}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container sm={6} sx={{justifyContent:"space-evenly"}} spacing={1}>
            <Grid item sm={6}  sx={{ alignSelf: "center" }}>
              <Typography variant="h6" textAlign="center">Name: {bookingDetails.name}</Typography>
              <Typography variant="h6" textAlign="center">
                Theater: {bookingDetails.theater}
              </Typography>
            </Grid>
            <Grid item sm={6} sx={{ alignSelf: "center" }}>
              <Typography variant="h6" textAlign="center">Time: {bookingDetails.time}</Typography>
              <Typography variant="h6" textAlign="center">
                Ticket: {bookingDetails.seat} Person
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ justifyContent: "flex-end" ,'@media(max-width:600px)':{justifyContent:"space-evenly"}}}>
            <Grid item xs={11} md={2} sx={{'@media(max-width:600px)':{my:2}}}>
              <Button variant="outlined" fullWidth onClick={handleConfirm} sx={{'@media(max-width:600px)':{fontSize:"17px"}}}>
                Confirm Booking
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default PreviewBooking;
