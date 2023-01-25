import React, { useContext } from "react";
import Footer from "../Components/Footer";
import Movies from "../Components/Movies";
import Navbar from "../Components/Navbar";

import Spinner from "../Components/Spinner";

import { AppContext } from "../App";
import { Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import BookShow from "../Components/BookShow";
import PreviewBooking from "../Components/PreviewBooking";
import MyShow from "../Components/MyShow";

function Router() {
  const { state:{loading} } = useContext(AppContext);
  
  const MoviesFun = () => {
    return (
      <Grid sx={{ minHeight: "78vh" }}>
        {
        loading ? <Spinner /> : <Movies />}
      </Grid>
    );
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} exact element={<MoviesFun />} />
        <Route path={"/bookticket"} element={<BookShow />} />
        <Route path={"/previewbooking"} element={<PreviewBooking />} />
        <Route path={"/myshow"} element={<MyShow />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
