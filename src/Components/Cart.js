import { Component } from "react";
import axios from 'axios';
import CartCake from "./CartCake";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";


class Cart extends Component {    
    constructor(props) {
        super(props);
        this.state={
            cakes:[]
        }
      }
      componentDidMount() {
        axios.post("https://apifromashu.herokuapp.com/api/cakecart",{},{
            headers:{"authtoken":localStorage.token}     
        }).then((Response)=>{
            console.log(Response);
            this.props.dispatch({
                type: "Oder",
                payload: Response.data
           })
            
            this.cakes = Response.data.data
            console.log(this.cakes[0].name);
            
            this.setState({
                cakes: Response.data.data
            })
                    
        },(error)=>{
            console.log("error from signup api",error)    
        })

      };

    render() {        
          return (
            
              <div>
                  
                 
                  <h1 style={{marginTop:"2em",marginBottom:"2em",fontSize:"3.2em" , fontFamily:"cursive"}}><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" style={{marginTop:"-8px"}} class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>Your Cart</h1>
                 <div style={{display:"flex",justifyContent:"space-around"}}>
                <div>
                {
                     this.state.cakes.map((each, index) => {
                      console.log(each,index)
                       return <CartCake key={index} cakedata={each} />                                    
                     })     
                }
                  </div>
                  <div style={{marginTop:"2em",width:"15vw",height:"10vh"}} >
                      <Link to="/route"><button type="button" class="btn btn-success">CheckOut</button></Link>
                      </div> 
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