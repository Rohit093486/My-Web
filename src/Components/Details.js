import { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";



class Details extends Component {

    
    constructor(props) {
        super(props)
        this.state = {}
    }

   

    registers = () => {
     
        //   const history = new useHistory();
        var cartCake = {
            cakeid: this.props.cakedata.cakeid,
            name: this.props.cakedata.name,
            image: this.props.cakedata.image,
            weight: this.props.cakedata.weight,
            price: this.props.cakedata.price,
        };
        console.log(cartCake);    
        
        axios.post("https://apifromashu.herokuapp.com/api/addcaketocart",cartCake,{
            headers: { "authtoken":localStorage.getItem("token")}
        }).then((res) => {
            console.log("helloresss", res);
            
           if( res.data !== "Session Expired"){
               toast("Added to cart");
              
            }
           else {
               toast("Please Login Your ID");
            }
            
            
        }, ((err) => {
            console.log("hello",err);
          }))
  
    }

    
    

    render() {
        console.log("state,", this.props)
        return (
            <div>
            <div class="card mb-3" style={{ maxWidth: "80vw" ,marginLeft:"13em" ,border:"none" ,}}>
            <Link to={`/cakedetails/${this.props.cakedata.cakeid}`}>
            <div  class="card detail-card border-0" style={{marginTop:"5em"}}>
              <div class="row no-gutters">
                <div class="col-md-4" >
                <img src={this.props.cakedata.image} style={{height:"100%" ,width:'23vw'}}class="card-img-top cakeImg " alt="..."></img>
                </div>
                <div class="col-md-8">
                  <div class="card-body" style={{color:"burlywood" ,fontSize:"1em" ,marginRight:"25em"}}>
                      <h3 class="card-title">{this.props.cakedata.name}</h3>                
                            <p class="card-text">Ratings : {this.props.cakedata.ratings}</p>  
                            <p class="card-text">Price : {this.props.cakedata.price}</p>  
                            <p class="card-text">Description : {this.props.cakedata.description}</p>
                            <p class="card-text">Weight : {this.props.cakedata.weight} kg</p>  
                            <p class="card-text">Flavour : {this.props.cakedata.flavour}</p>  
                            <p class="card-text">Type : {this.props.cakedata.type}</p>                  
                            <p class="card-text">Like : {this.props.cakedata.likes}😍</p>   
                            <button  onClick={(e) => {
                  e.preventDefault()
                //    console.log("hiiiiii")
                  this.registers();
                 
                }} type="button" class="btn btn-success">Add To Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16" style={{color:"black"}}>
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
              </svg><i class="fas fa-cart-plus"></i></button>                 
                  </div>            
                </div>
                    </div>
                    </div>
                </Link>                
                </div>                
                </div>
        )
    }
}
export default Details;