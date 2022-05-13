import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
function Abouticon() {
  return (
    <div className="about-link">
      <Link to={"/about"} style={{ textDecoration: "none" }}>
        <FaQuestion size={30}></FaQuestion>
      </Link>
    </div>
  );
}

export default Abouticon;
