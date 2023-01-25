


function Reducer( state ,action) {
     switch (action.type) {
      case "LOADING": return {...state,loading:true}
 
      case "FETCH_API": return {...state, data:action.payload,loading:false} 
     

       case "BOOK_MY_SHOW" :return{
          ...state,
          selectToBook : state.data.filter((item,id)=>{
            if(id=== action.payload){
               return item
            }
            return ""
          })
       }
       case "BOOKING" : return {
         ...state,
         bookingDetails: action.payload
       }
       case "CONFIRM_BOOKING" : return {
         ...state,
         myShow : [...state.myShow, action.payload]
       }
            
           
     
        default:return state;
            
     }
  
    
}

export default Reducer