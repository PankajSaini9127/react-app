import React from "react";
import { Grid } from "@mui/material";

// loadinh spiner
import { RotatingTriangles } from "react-loader-spinner";

function Spinner() {
  return (
    <>
      <Grid
        container
        sx={{
          height: "75vh",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >


        <RotatingTriangles
          visible={true}
          height="80"
          width="80"
          ariaLabel="rotating-triangels-loading"
          wrapperStyle={{}}
          wrapperClass="rotating-triangels-wrapper"
        />

        
      </Grid>
    </>
  );
}

export default Spinner;
