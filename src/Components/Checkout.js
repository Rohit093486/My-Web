import { Component } from "react";
import CartSumary from "./CartSumary";
import axios from "axios";
import { Link } from "react-router-dom";


class Checkout extends Component {
    constructor() {
        super()
        this.state = { cakes: [] }
    }
    componentDidMount() {
        axios.post("https://apifromashu.herokuapp.com/api/cakecart",{},{
            headers:{"authtoken":localStorage.token}     
        }).then((Response)=>{
            console.log(Response);                                
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
                <div><h1 style={{ marginTop: "2.5em",marginLeft: "2em" }}>Your Cart</h1>
                {
                     this.state.cakes.map((each, index) => {
                      console.log(each,index)
                       return <CartSumary key={index} cakedata={each} />                                    
                     })     
                    }
                    <Link to="/address"  style={{textDecorationColor:"#F0F3F4 "}}><button type="button" style={{marginLeft:"30em"}} class="btn btn-success">Next</button></Link> 
                </div>
                </div>
        )
    }
}

export default Checkout;
;