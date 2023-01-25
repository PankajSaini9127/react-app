const fetchApi =(data)=>{
    return{
        type : "FETCH_API",
        payload : data
    }
}

const Loading = ()=>{
    return{
        type :"LOADING"
    }
}
 const BookMyShow = (id)=>{
    // console.log(id)
    return{
        type:"BOOK_MY_SHOW",
        payload:id
    }
 }

 const Booking = (data)=>{
    return {
        type :"BOOKING",
        payload: data
    }
 }

 const confirmBook = (data)=>{
    return{
        type:"CONFIRM_BOOKING",
        payload:data
    }
 }



export {fetchApi,Loading,BookMyShow,Booking,confirmBook}