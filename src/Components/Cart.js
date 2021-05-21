import { Component } from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";
import CartCake from "./CartCake";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";


class Cart extends Component {    
    constructor(props) {
        super(props);
        this.state={
            cakes: [],
            loading:false
        }
      }
    componentDidMount() {
        this.setState({loading:true})
        axios.post("https://apifromashu.herokuapp.com/api/cakecart",{},{
            headers:{"authtoken":localStorage.token}     
        }).then((Response)=>{
            console.log(Response);
            this.props.dispatch({
                type: "Oder",
                payload: Response.data
           })
            this.cakes = Response.data.data
            // console.log(this.cakes[0].name);            
            this.setState({
                cakes: Response.data.data,
                loading:false
            })
                    
        },(error)=>{
            console.log("error from signup api",error)    
        })

    };
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHRWfsD4kVgdyWurO1mtDi2PJtVhgiA8IYQ&usqp=CAU"

    render() {
        const { loading } = this.state
          return (            
              <div>              
                 
                  <h1 style={{marginTop:"2em",marginBottom:"2em",fontSize:"3.2em" , fontFamily:"cursive"}}><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" style={{marginTop:"-8px"}} class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>Your Cart</h1>

                  {loading && <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10em" }}>
                        <Loader type="ThreeDots" color="#00BFFF" height={80} width={100} />
                    </div>}
                    
                  <div style={{ display: "flex", justifyContent: "space-around" }}>
                      {!loading &&
                <div>
                {   this.state.cakes.map((each, index) => {
                      console.log(each,index)
                       return <CartCake key={index} cakedata={each} />                                    
                     })                             
                          }                          
                          {
                             this.state.cakes.length <= 0 && <div>
                              <div class="card" style={{marginLeft:"1em"}}>                    
                              <div class="card mb-3 border-0 " style={{maxWidth: "600px"}}>
                                <div class="row no-gutters ">
                                    <div class="col-md-4">
                                    <img src={this.image} alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                    <div class="card-body">
                                        <b class="card-title">Oop!</b>
                                        <p class="card-text">Sorry, no results found!</p>
                                        <h4>Please check the spelling or try searching for something else</h4>
                                    </div>    
                                </div>
                                            </div>
                                            </div>
                    </div>
                              </div>
                          }                          
                      </div>
                      }
                      { this.state.cakes.length <= 0 ?"":<div style={{ marginTop: "2em", width: "15vw", height: "10vh" }} >
                          <Link to="/route"  style={ {textDecoration:"none"}}><button type="button" class="btn btn-success">CheckOut</button></Link>
                      </div>
                      }
                  </div>
            </div>
        )
    }
}
export default connect((state, props) => {
    // console.log(state)
    return {
      Oder: state["oderplace"]
    }
  })(Cart);