import React, { useContext} from "react";

//Component
import Movie from "./Movie";

//From Mui
import { Grid } from "@mui/material";

//Context
import { AppContext } from '../App'

//Action for update state
import { BookMyShow } from "../Ac.tion";

//for navigate path
import { useNavigate } from "react-router-dom";

function Movies() {
  //for navigate path
  const Nevigate = useNavigate()

  //state from context API
  const {state:{data},dispatch}= useContext(AppContext)

  //selected elem Add to state Action
  const handleBooking = (id)=>{
     Nevigate("/bookticket")
    dispatch(BookMyShow(id))
  }

return (
    <Grid
      container
      sx={{ justifyContent: "space-evenly", my: 2 }}
    >
      <Grid item md={11}>
        <Grid container >
          {
            data.map((elem,i)=>{
                
                return <Movie key={i} elem={elem} id={i} handleBooking={handleBooking}/>
            })
          }
          </Grid>
      </Grid>
    </Grid>
  );
}

export default Movies;