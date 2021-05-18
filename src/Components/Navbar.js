import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends Component{    
    constructor(props) {
        super(props)
      this.state = {        
        searchtext: undefined,        
        }
  }
  // componentDidMount() {
  //   this.setState({      
  //     token:false
  //     })
   
  // }
  searchtext
  getsearchText = (event) => {
    this.searchtext = event.target.value
    this.setState({
      searchtext:this.searchtext
  })
  }
  token = localStorage.token;
  logoutbutn = () => {
    localStorage.removeItem("token")     
  }
  render() {
      return (
      <div >
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor:"#F7F2F2" ,border:"ThreeDShadow 2px solid",zIndex:50 }}>
            <Link to="/"><h5 style={{color:"tomato"}}>🎂My Cake</h5></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" onChange={this.getsearchText} style={{marginLeft:"1em"}} type="search" placeholder="Search" aria-label="Search"></input>
      <Link to={`/search?q=${this.searchtext}`}><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
      <Link to="/dash"><button type="button" class="btn" style={{marginLeft:"1em",fontSize:"10px", backgroundColor:"white" ,color:"tomato"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi-person-lines-fill" viewBox="0 0 16 16" >
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
</svg></button></Link>
      </form>
                  
      </li>
              </ul>
            <Link to ="/cart"><button type="button" class="btn" style={{marginRight:"1em", backgroundColor:"white",fontSize:"10px" ,color:"tomato"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
              </svg></button></Link>
              
               {/* <button type="button" class="btn btn-outline-info">logout</button>
               <Link to="/login"><button type="button" class="btn btn-outline-info"> login</button></Link> */}
              {!this.state.islogged?<button type="button" class="btn btn-outline-info" onClick={this.logoutbutn}>logout</button>:<Link to="/login"><button type="button" class="btn btn-outline-info"> login</button></Link>}     
     </div>
</nav> 
      </div>              
        )
    }
}

export default connect((state, props) => {
  console.log(state)
  return {
    islogged: state["isloggedin"]
  }
})(Navbar);