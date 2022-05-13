import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Feedbacklist from "./components/Feedbacklist";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./data/Feedbackdata";
import Feedbackform from "./components/Feedbackform";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Abouticon from "./components/Abouticon";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("are you sur to delete it?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const AddFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <>
      <FeedbackProvider>
        <Router>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Header></Header>
          </Link>

          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <div>
                    <Feedbackform handleAdd={AddFeedback} />
                    <FeedbackStats></FeedbackStats>
                    <Feedbacklist handleDelete={deleteFeedback}></Feedbacklist>
                  </div>
                }
              ></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>

          <Abouticon></Abouticon>
        </Router>
      </FeedbackProvider>
    </>
  );
}

export default App;
