import { Component } from "react";
import CartSumary from "./CartSumary";
import Loader from "react-loader-spinner";
import axios from "axios";
import { Link } from "react-router-dom";


class Checkout extends Component {
    constructor() {
        super()
        this.state = {
            cakes:[],
            loading: false
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
        },(error)=>{
            console.log("error from signup api",error)    
        })    
      };
    render() {
        const { loading } = this.state
        return (
            <div>                 
                <div><h1 style={{ marginTop: "2.5em", marginLeft: "2em" }}>Your Cart</h1>
                {loading && <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10em" }}>
                        <Loader type="ThreeDots" color="#00BFFF" height={80} width={100} />
                    </div>}
                    {!loading&&
                     this.state.cakes.map((each, index) => {
                      console.log(each,index)
                       return <CartSumary key={index} cakedata={each} />                                    
                     })     
                    }
                    {!loading &&<Link to="/address" style={{ textDecoration: "none" }}><button type="button" style={{ marginLeft: "30em" }} class="btn btn-success">Next</button></Link>}
                </div>
                </div>
        )
    }
}

export default Checkout;
;