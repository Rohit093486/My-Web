import { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
class CartCake extends Component {
    constructor(props) {
        super(props)
      this.state = {
          qty: this.props.cakedata.quantity,
          price:this.props.cakedata.price,
          total: this.props.cakedata.price,
          totalPrice: 0,          
        }               
    }
        
 
  
  
    remove = () => {
        console.log(this.props.cakedata.cakeid)
        axios.post('https://apifromashu.herokuapp.com/api/removecakefromcart',{ cakeid: this.props.cakedata.cakeid },
            { headers: { "authtoken": localStorage.token}})
            .then((ress) => {            
            console.log(ress)
        }, (err) => {
            console.log(err)
        })
    }
    
    add=()=> {
        this.setState({
          qty: this.state.qty + 1
          
        });
        
      }
    
      subtract=()=> {
        this.setState({
          qty: this.state.qty - 1          
        });
        
  }
   
  cal=()=> {
    this.setState({
      total:this.state.qty*this.state.price
    })     
  }
  // total = () => {
  //   this.setState({

  //   })
  // }
  
  render() {
    console.log(this.state.qty,"qty");
      console.log(this.state.price,"price")
    console.log(this.state.total, "total")
    // console.log(this.state.cartItem);
    return (
          
            
            <div class="col-md-5 ml-sm-auto col-lg-10 px-md-1" style={{ top: "1em", right: "7em" }}>
                
       <table class="table">   
  <tbody>
    <tr>
    <td style={{width:"95px"}}><img style={{height:"50px",width:"50px"}} src={this.props.cakedata.image} class="card-img-top" alt="..."></img></td>
      <td style={{width:"20vw"}}>{this.props.cakedata.name}</td>
                  <td style={{ width: "100px" }}>Rs{this.props.cakedata.price}</td>
                  
                  
                            
        <td style={{ width: "150px" }}><button type="button" onClick={this.add} class="btn-group btn-group-sm border-0" style={{ backgroundColor: "white" }} role="group" aria-label="..."><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg></button>
             {this.state.qty}
             <button type="button" class="btn-group btn-group-sm border-0" onClick={this.subtract} style={{  backgroundColor: "white" }} disabled={this.state.qty <= 1} role="group" aria-label="..."><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg></button>
        </td>

              <td style={{ width: "20vw" }}>{this.state.total} <button onClick={this.cal} style={{color:"black" ,backgroundColor:"white"  }} class="btn-group btn-group-sm border-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-align-middle" viewBox="0 0 16 16">
  <path d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10zM1 8a.5.5 0 0 0 .5.5H6v-1H1.5A.5.5 0 0 0 1 8zm14 0a.5.5 0 0 1-.5.5H10v-1h4.5a.5.5 0 0 1 .5.5z"/>
</svg></button></td>
              

          <td style={{ width: "150px" }}> 
     <button type="button" style={{color:"black" ,backgroundColor:"white"  }} onClick={this.remove} class="btn-group btn-group-sm border-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg></button> 
                    
             
                  </td>                
                        </tr>
                                           
  </tbody>  
                </table>                
            </div>
              
        )
    }
}



export default CartCake;