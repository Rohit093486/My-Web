
import { Component } from "react";

class CartSumary extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
  render() {
      console.log(this.props)
        return ( 
            <div >
                <main role="main" class=" ml-sm-auto col-lg-5">
                   <div class="table-responsive" style={{marginLeft:"-25em"}}>
                   <table class="table" >             
                        <tr style={{border:"1px solid #BDC3C7"}}>
                           <td style={{ width: "100px" }}>{this.props.cakedata.name}</td>
                 <td style={{ width: "150px" }}>{this.props.cakedata.price}</td>
                              </tr>                          
                          </table>
                        </div>
                      </main>         
            
                    
                </div>           
        )
    }
}

export default CartSumary ;