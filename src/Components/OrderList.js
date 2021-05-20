import { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios';
class OrderList extends Component {
    constructor(props) {
        super(props)
      this.state = {
        MyList:[]
      }               
  }

  componentDidMount(){          
    let apiurl ="https://apifromashu.herokuapp.com/api/cakeorders"
    axios({
      method: "post",
      url: apiurl,
      headers: { "authtoken": localStorage.token }
    }).then((res) => {
      console.log(res.data)      
      this.setState({
        MyList:res.data.cakeorders
      })
      
    }, (err) => { console.log(err) })
    
  }  
  render() {
    console.log(this.props)
    return (
              
          <div style={{ marginTop: '4em', backgroundColor: "#F7F2F2" }}>
        <h1 style={{ backgroundColor: "#F7F2F2", color: "tomato" }}>ORDER LIST</h1>
        <div class="accordion" id="accordionExample">
        <div>
          {
            this.state.MyList.map((each,index) => {
              console.log(each)
              return (                
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                      <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <tabel>
                            <tr>
                          <td style={{width:"30%"}}> <li>Name : {each.name} </li>
                            <li>Address : {each.address}({each.city}) </li>
                            </td>
                            <td style={{ width: "30%" }} > Order date :  {each.orderdate}</td>
                            
                            <td style={{ width: "20%" }}> Order Id:  {each.orderid}</td>
                            
                            <td style={{ width: "20%" }} > Total Price: {each.price}</td>
                            
                            <td  style={{ width: "30%" }} > Payment: {each.mode}</td>
                              </tr>
                            </tabel>  
                      </button>
                    </h2>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div class="card-body" style={{ backgroundColor: "#F7F2F2" }}>
                        
                    <ul>                        
                        <li> <span style={{ color: "tomato" }}>Cake Name :</span> {`  ${each.cakes} `} </li>                        
                                                    
                    </ul>
                        
                    </div>
                  </div> 
          </div>
              
              )
            })
            }
            </div>
        </div>
              
          </div>
      
          )
      
    
    }
}
export default connect((state, props) => {
  console.log(state)
  return {
    Oder: state["MyOder"]
  }
})(OrderList);
// export default OrderList;