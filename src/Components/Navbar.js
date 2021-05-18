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

              <Link to ="/OrderBag"><button type="button" class="btn" style={{marginRight:"1em", backgroundColor:"white",fontSize:"10px" ,color:"tomato"}}>My Order <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"/>
</svg></button></Link>


            <Link to ="/cart"><button type="button" class="btn" style={{marginRight:"1em", backgroundColor:"white",fontSize:"10px" ,color:"tomato"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></button></Link>
              
              
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