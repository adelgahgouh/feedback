import React from "react";
import Feedbacklist from "./components/Feedbacklist";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import Feedbackform from "./components/Feedbackform";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Abouticon from "./components/Abouticon";
import { FeedbackProvider } from "./context/FeedbackContext";
import FeedbackData from "./data/Feedbackdata";
function App() {
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
                    <Feedbackform />

                    <FeedbackStats></FeedbackStats>
                    <Feedbacklist></Feedbacklist>
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
