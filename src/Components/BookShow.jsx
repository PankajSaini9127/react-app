import React, { useContext, useState } from "react";

//mui Components
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

//hook for Navigate
import { useNavigate } from "react-router-dom";

//context Api
import { AppContext } from "../App";

//Action
import { Booking } from "../Ac.tion";


export default function BookShow() {

  //state from context Api
  const {
    state: { selectToBook },
    dispatch
  } = useContext(AppContext);

  const Navigate = useNavigate();

  // form data
  const Data = {
    name:"",
    theater :"",
    time :"",
    seat:""
  }

  //state manage form
  const [formData, setFormData] = useState(Data)

  //on change of form feed
  const handleChange = (e)=>{
       setFormData({
        ...formData,
        [e.target.name]:e.target.value
       })
  }

  //onSubmit of Form 
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(Booking(formData))
    Navigate("/previewbooking")
  }
  
  const { Poster, Title, Year } = selectToBook[0];

  return (
    <Container sx={{ minHeight: "78vh" }}>
      <Grid container sx={{ mt: 3, justifyContent: "space-evenly" }}>
     
     {/* Movie Details For Booking */}
        <Grid item md={6}>
        <Button variant="outlined" onClick={()=>{Navigate("/")}}>Back</Button>
          <Typography variant="h6" textAlign="center">
            Movie Details
          </Typography>
          <Grid container sx={{ justifyContent: "space-evenly" }}>
            <Grid item md={7}>
              <Box
                component="img"
                src={Poster}
                height="300px !important"
                width="300px !important"
              />
              <Typography variant="h6" textAlign="center">
                {Title}
              </Typography>
              <Typography variant="body1" textAlign="center">
                Year : {Year}
              </Typography>
            </Grid>

            {/* <Grid item md={5}>
              <Typography variant="body1">{Title}</Typography>
            </Grid> */}
          </Grid>
        </Grid>

        {/* Booking Form */}
        <Grid Item md={4} sx={{ minHeight: "100px", p: 2 }}>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3} sx={{justifyContent:"space-evenly"}}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    type="text"
                    variant="outlined"
                    label="Name"
                    fullWidth
                    name="name"
                    onChange={handleChange}
                    helperText="Please Fill Full Name"
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Theater</InputLabel>
                  <Select name="theater" onChange={handleChange} required>
                    <MenuItem value="Miraj">Miraj</MenuItem>
                    <MenuItem value="BioScope">BioScope</MenuItem>
                    <MenuItem value="Darpan">Darpan</MenuItem>
                    <MenuItem value="Kohinoor">Kohinoor</MenuItem>
                    <MenuItem value="Narsani">Narsani</MenuItem>
                    <MenuItem value="PVR">pvr</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Time</InputLabel>
                  <Select name="time" onChange={handleChange} required>
                    <MenuItem value="9.00 AM - 12.00 PM">9.00 AM - 12.00 PM</MenuItem>
                    <MenuItem value="1.00 PM - 4.00 PM">1.00 PM - 4.00 PM</MenuItem>
                    <MenuItem value="5.00 PM - 8.00 PM">5.00 PM - 8.00 PM</MenuItem>
                    <MenuItem value="9.00 PM - 12.00 PM">9.00 PM - 12.00 PM</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Seat</InputLabel>
                  <Select name="seat" onChange={handleChange} required>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button variant="outlined" fullWidth type="submit">Confirm</Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
