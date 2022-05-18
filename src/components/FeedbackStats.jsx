import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext);

  const feedback_length = feedback.length;
  let averrage =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback_length;
  averrage = averrage.toFixed(1).replace(/[.,]0/, "");
  return (
    
    <div className="feedback-stats">
      <h4>{feedback_length} Reviews</h4>
      <h4>Average Rating :{isNaN(averrage) ? 0 : averrage}</h4>
    </div>
  );
}

export default FeedbackStats;
