import  { FaTimes,FaEdit} from 'react-icons/fa'
import Card from "./shared/Card"
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";
function Feedbackitem({item}) {
  const {deleteFeedback,editFeedback} = useContext(FeedbackContext);

  return (
<Card reverse={false}>         
     <div className="num-display">{item.rating}</div>
    <button className="close" onClick={()=>deleteFeedback(item.id)}>
    <FaTimes color="purple"></FaTimes>

    </button>

    <button className="edit" onClick={()=>editFeedback(item)}>
    <FaEdit color="purple"></FaEdit>

    </button>

            <div className="text-display"> 
                {item.text} 
            </div>
            </Card>  
  ) 
}

export default Feedbackitem