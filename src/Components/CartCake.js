import { Component } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { connect } from "react-redux";
class CartCake extends Component {
    constructor(props) {
        super(props)
      this.state = {
        //   qty: this.props.cakedata.quantity,
        //   price:this.props.cakedata.price,
        //   total: this.props.cakedata.price,
        // totalPrice:0,
        cakeInfo: [],        
      }      
  }
  cakeinfo = []
  componentDidMount() {
    this.cakeinfo.push(this.props.cakedata);
    this.setState({
        cakeInfo:this.cakeinfo
    })
   
}
    remove = () => {
      console.log(this.props.cakedata.cakeid);
      this.setState({loading:true})
        axios.post('https://apifromashu.herokuapp.com/api/removecakefromcart',{ cakeid: this.props.cakedata.cakeid },
            { headers: { "authtoken": localStorage.token}})
            .then((res) => {            
              console.log(res)
              if(res){
                toast.warn("Item is removed");
                this.setState({
                    cakeinfo:this.cakeinfo.splice(0,1)
                })
                // window.location.href="/cart"
            }
        },(err) => {
            console.log(err)
        })
    }
    
  //   add=()=> {
  //       this.setState({
  //         qty: this.state.qty + 1          
  //       });        
  //     }    
  //     subtract=()=> {
  //       this.setState({
  //         qty: this.state.qty - 1          
  //       });
        
  // }
   
  // cal=()=> {
  //   this.setState({
  //     total:this.state.qty*this.state.price
  //   })     
  // }
  // total = () => {
  //   this.setState({

  //   })
  // }
  
  render() {
   
    // console.log(this.state.qty,"qty");
    //   console.log(this.state.price,"price")
    // console.log(this.state.total, "total")
    // console.log(this.state.cartItem);
    // console.log(this.state.cakeInfo)
    return (
      <div>
         
        {this.state.cakeInfo.length-1?"":  <div>
          <div style={{ marginTop: "1em", left: "1em" }}>
            <table style={{ width: "50vw", bottom: "1em" }}>
              <tbody>
                <tr style={{ border: "1px solid #BDC3C7" }}>
                  <td ><img style={{ height: "50px", width: "50px" }} src={this.props.cakedata.image} class="card-img-top " alt="..."></img></td>
                  <td >{this.props.cakedata.name}</td>
                  <td >Rs{this.props.cakedata.price}</td>
                  <td >
                    <button type="button" style={{ color: "black", backgroundColor: "white" }} onClick={this.remove} class="btn-group btn-group-sm border-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg></button>
                  </td>
                </tr>                                           
              </tbody>
            </table>
          </div>
          </div>
        }
            </div>
        )
    }
}



export default  connect((state,props)=>{
  console.log(state)
  })(CartCake)