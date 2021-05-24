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
            this.cakes = Response.data.data
            // console.log(this.cakes[0].name);            
            this.setState({
                cakes: Response.data.data,
                loading:false
            })
            this.props.dispatch({
                type: "Oder",
                payload: Response.data
           })                    
        },(error)=>{
            console.log("error from signup api",error)    
        })

    };
    image = "data:image/png;base64,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"

    render(){
        const { loading } = this.state
        console.log(this.state.cakes);
          return (            
              <div> 
                  <h1 style={{marginTop:"2em",marginBottom:"1em",fontSize:"3.2em" , fontFamily:"cursive"}}><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" style={{marginTop:"-8px"}} class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>Your Cart</h1>

                  {loading && <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10em" }}>
                        <Loader type="ThreeDots" color="#00BFFF" height={80} width={100} />
                    </div>}
                    
                  <div style={{ display: "flex",justifyContent:"space-around" }}>
                      {!loading &&<div>{this.state.cakes.map((each,index) => {
                      console.log(each,index)
                       return <CartCake key={index} cakedata={each} />                                    
                     })                             
                       }                          
                          {!loading && this.state.cakes.length<=0 && <div>
                              <div class="card border-0">                    
                              <div class="card mb-3 border-0" style={{maxWidth: "700px"}}>
                                <div class="row no-gutters ">
                                    <div class="col-md-4">
                                              <img src={this.image} alt="..." />
                                          </div>
                                          <div class="col-md-8">
      <div class="card-body" >
   
        <h4 style={{marginLeft:"5em"}}>Your Shopping Cart is Empty! Click<Link to="/"> Here</Link>  to Continue Shopping</h4>
      </div>    
  </div>
                                            </div>
                                            </div>
                    </div>
                              </div>
                          }                          
                      </div>
                      }
                      {this.state.cakes.length<=0 ?<div></div>:<div style={{ marginTop: "2em", width: "15vw", height: "10vh" }} >
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