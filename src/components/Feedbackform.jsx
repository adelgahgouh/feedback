import {  useContext, useEffect, useState } from "react"
import FeedbackContext from "../context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card"


function Feedbackform() {
    const {AddFeedback,feedbackedit,UpdateFeedback} = useContext(FeedbackContext);

    const[text,settext]=useState(""); 
    const[btnDisabled,setbtnDisabled]=useState(true); 
    const[message,setmessage]=useState(""); 
    const[rating,setrating]=useState(10); 
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback={
                text,rating,
            }
       if(feedbackedit.edit==true){

           UpdateFeedback(feedbackedit.item.id,newFeedback);
       }else{
            AddFeedback(newFeedback)
        settext("")
    }
        }
        

    }
    useEffect(()=>{
        if(feedbackedit.edit===true){
        settext(feedbackedit.item.text)
        setrating(feedbackedit.item.rating)

        setbtnDisabled(true)}

     } ,[feedbackedit])
   const handleTextChange=(e)=>{
        //e.target.value
       if(text ===""){
        setbtnDisabled(true)
        setmessage("")
       }else if((text !=="") && (text.trim().length <=10)){
        setbtnDisabled(true)
        setmessage("Text must be at least 10 characters")
       }else{
        setbtnDisabled(false)
        setmessage("")
       }
        settext(e.target.value);
    } 
  return ( 
<Card >
    <form onSubmit={handleSubmit} >
        <h2>How would rate our service ?</h2>
        <RatingSelect select={(rate)=>setrating(rate)}></RatingSelect>
        
        <div className="input-group">
            <input type="text"  value={text}   onChange={handleTextChange} 
            placeholder="Write your review "/>
            <Button type="submit" isDisabled={btnDisabled} >send</Button>
        </div>
        {message && <div className="message" >{message}</div>}
    </form>
</Card>

    )
}

export default Feedbackform