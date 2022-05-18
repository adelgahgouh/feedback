import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/Feedbackdata";

const FeedbackContext = createContext();

export  const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [feedbackedit, setFeedbackedit]=useState({
  item:{},edit:false
  }) 
  const AddFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const UpdateFeedback = (id,upitem) => {
setFeedback(feedback.map((item)=>item.id===id?{
  ...item,...upitem}:item
))
  };

  const editFeedback = (item) => {
    setFeedbackedit({item,edit:true})
  };

  const deleteFeedback = (id) => {
    if (window.confirm("are you sur to delete it?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return(

  <FeedbackContext.Provider
    value={{
      feedback,feedbackedit,editFeedback,deleteFeedback,AddFeedback,UpdateFeedback,
    }}
  >
  {children}
  </FeedbackContext.Provider>);
};

export default FeedbackContext;
