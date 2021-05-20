import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class Navbar extends Component{    
    constructor(props) {
        super(props)
      this.state = {        
        searchtext: undefined,        
        }
  } 
  searchtext
  getsearchText = (event) => {
    this.searchtext = event.target.value
    this.setState({
      searchtext:this.searchtext
  })
  }
  token = localStorage.token;
  logout = () => {   
    window.location.href="/"  
    localStorage.clear()     
  }
  render() {
      return (
      <div >
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor:"#F7F2F2" ,border:"ThreeDShadow 2px solid",zIndex:50 }}>
            <Link to="/"  style={{textDecorationColor:"#F0F3F4 "}}><h4 style={{ textShadow: '1px 1px 1px', fontFamily: "cursive", color: "#F39618" }}>My Cake</h4></Link>
            {this.props.islogged &&<p style={{ marginLeft: "2em", fontFamily: "cursive", fontSize: "1.2em" }}>{`Welcome  ${localStorage.name}`}</p>}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" onChange={this.getsearchText} style={{marginLeft:"1em"}} type="search" placeholder="Search" aria-label="Search"></input>
      <Link to={`/search?q=${this.searchtext}`}  style={{textDecorationColor:"#F0F3F4 "}}><button class="btn btn-outline-success my-2 my-sm-0" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg></button></Link>
                    
      <Link to="/dash"  style={{textDecorationColor:"#F0F3F4 "}}><button type="button" class="btn btn-warning" style={{marginLeft:"1em",color:"white"}}>Admin</button></Link>                    
      </form>
                  
      </li>
              </ul>

              {this.props.islogged && <Link to="/OrderBag"  style={{textDecorationColor:"#F0F3F4 "}}><button type="button" class="btn btn-warning" style={{ marginRight: "1em",color:"white" }}>My Order </button></Link>}


              {this.props.islogged && <Link to="/cart"  style={{textDecorationColor:"#F0F3F4 "}}><button type="button" class="btn btn-warning" style={{ marginRight: "1em",color:"white",fontSize:"1.1em"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg></button></Link>}
              
            {this.props.islogged && <button type="button" class="btn btn-danger" onClick={this.logout.bind(this)}>Logout</button>} 
            {!this.props.islogged &&<Link to="/login"  style={{textDecorationColor:"#F0F3F4 "}}><button type="button" class="btn  btn-success">Login</button></Link>}    
     </div>
</nav> 
      </div>              
        )
    }
}

export default connect((state, props) => {
  console.log(state)
  return {
    islogged:state["isloggedin"]
  }
})(Navbar);