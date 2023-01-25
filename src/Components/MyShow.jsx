import React, { useContext } from "react";

//MUI components
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

//navigate hook
import { useNavigate } from "react-router-dom";

//context APi
import { AppContext } from "../App";

function MyShow() {
  
  //state from context API
  const {
    state: { myShow },
  } = useContext(AppContext);

  const Navigate = useNavigate();

  return (
    <>
      {myShow.length === 0 ? (
        <>
         {/* if ticket booking is  0 than return this */}
          <Container
            sx={{ minHeight: "78vh", display: "grid", placeItems: "center" }}
          >
            <Typography variant="body1">
              <strong>0</strong> Booking Confirmed{" "}
            </Typography>
            <Button variant="outlined" onClick={() => Navigate(-1)}>
              Back
            </Button>
          </Container>
        </>
      ) : (

        // if ticket booking is 1 or more return this

        <Container sx={{ minHeight: "450px", mt: 5 }}>
          <Button variant="outlined" onClick={() => Navigate(-1)}>
            Back
          </Button>
          <Typography variant="h5" textAlign="center">
            My Show
          </Typography>
          <Grid container spacing={0}>
           {/* form show all booked show */}
            {myShow.map((item, index) => {
              const {
                poster,
                cName,
                movieName,
                seat,
                theater,
                time,
                yearOfPublish,
              } = item;
              return (
                <>
                  <Grid
                    item
                    container
                    sx={{ "@media(max-width:600px)": { display: "none" } }}
                  >
                    <Grid item md={1} sx={{ alignSelf: "center" }}>
                      {index + 1}
                    </Grid>
                    <Grid item xs={2}>
                      <Box component="img" src={poster} height="100px" />
                    </Grid>
                    <Grid item xs={3} sx={{ alignSelf: "center" }}>
                      <Typography variant="body1">
                        Movie:<strong> {movieName}</strong>{" "}
                      </Typography>
                      <Typography variant="body1">
                        Year Of Publish : <strong>{yearOfPublish}</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ alignSelf: "center" }}>
                      <Typography variant="body1">
                        Person Name: <strong>{cName}</strong>
                      </Typography>
                      <Typography variant="body1">
                        Theater : <strong>{theater}</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ alignSelf: "center" }}>
                      <Typography variant="body1">
                        {" "}
                        Show Time : <strong> {time}</strong>{" "}
                      </Typography>
                      <Typography variant="body1">
                        Seat : <strong> {seat} </strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={11} sx={{ mt: 1 }}>
                      <Divider />
                    </Grid>
                  </Grid>

                  {/* mobile version */}

                  <Grid
                    container
                    sx={{
                      justifyContent: "space-evenly",
                      display: "none",
                      mt: 2,
                      "@media(max-width:600px)": { display: "block" },
                    }}
                  >
                    <Grid item xs={12}>
                      <Card sx={{ m: 1 }}>
                        <CardMedia
                          sx={{
                            height: "300px !important",
                            width: "310px !important",
                          }}
                          image={poster}
                          title={movieName}
                        />
                        <CardContent>
                          <Typography
                            variant="body1"
                            textAlign="center"
                            fontSize="20px"
                          >
                            Movie: <strong>{movieName}</strong>
                          </Typography>
                          <Typography
                            variant="body1"
                            textAlign="center"
                            fontSize="20px"
                          >
                            Year: <strong>{yearOfPublish}</strong>
                          </Typography>
                          <Typography
                            variant="body1"
                            textAlign="center"
                            fontSize="20px"
                          >
                            Person Name: <strong>{cName}</strong>
                          </Typography>
                          <Typography
                            variant="body1"
                            textAlign="center"
                            fontSize="20px"
                          >
                            Theater: <strong>{theater}</strong>
                          </Typography>
                          <Typography
                            variant="body1"
                            textAlign="center"
                            fontSize="20px"
                          >
                            Time: <strong>{time}</strong>
                          </Typography>
                          <Typography
                            variant="body1"
                            textAlign="center"
                            fontSize="20px"
                          >
                            Seat: <strong>{seat}</strong>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sx={{ my: 2 }}>
                      <Divider />
                    </Grid>
                  </Grid>
{/* mobile version ends here */}

                </>
              );
            })}
          </Grid>
        </Container>
      )}
    </>
  );
}

export default MyShow;
