import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useParams, withRouter } from "react-router-dom";

const footer = () => {

return(
<div className="footer_div">
  <h2>
  Made with ❤️ © 2020-21 Project <span className="footer_sakura">Sakura</span>
  </h2>  
</div>
);
} 
export default withRouter(footer);
