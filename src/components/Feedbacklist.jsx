import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Feedbackitem from "./Feedbackitem";

function Feedbacklist({ handleDelete }) {
  const feedback = useContext(FeedbackContext);
  console.log("this is context=" + feedback);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <Feedbackitem
          item={item}
          key={item.id}
          handleDelete={handleDelete}
        ></Feedbackitem>
      ))}
    </div>
  );
}

export default Feedbacklist;
