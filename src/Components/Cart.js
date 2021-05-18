import { Component } from "react";
import axios from 'axios';
import CartCake from "./CartCake";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";


class Cart extends Component {
    // cakes = [];
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
                  <Link to="/addres"><button type="button" class="btn btn-primary " style={{marginTop:"4em" ,width:"80%"}}>Buy</button></Link>
                  <div class="col-md-5 ml-sm-auto col-lg-10 px-md-1" style={{ top: "1em", right: "7em" }}>
                      <table class="table">
         
    <tr >
      <th>Image</th>
      <th>Name</th>
      <th>Price</th>
      <th>Quantity</th>  
      <th>Amount</th>
      <th>Action</th>
    </tr>

                      </table>
                      
            </div>            
                <div  className="row">
                {
                     this.state.cakes.map((each, index) => {
                      console.log(each,index)
                       return <CartCake key={index} cakedata={each} />                                    
                       })
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