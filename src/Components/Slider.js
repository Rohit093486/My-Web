import { Link } from "react-router-dom";
function Slider(props) {  
  return (
      <div>
            <div>
                 <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block sidebar" style={{backgroundColor:"#F7F2F2 "}}>
          <div class="sidebar-sticky">
                <p style={{ marginTop: "1em", fontSize: "2em", fontFamily: "cursive" }}> Checkout Step</p>
                <ul>
                 <li style={{ marginTop: "2em", fontSize: "1.4em"}}>Cart Summary</li>
                  <hr></hr>
                  <li style={{ marginTop: "2em", fontSize: "1.4em"}}>Address</li>
                  <hr></hr>                  
                </ul>
              </div>
            </nav>
                    </div>
                    </div>
            </div> 
    </div>
  );
}

export default Slider;