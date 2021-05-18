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
    let apiurl = "https://apifromashu.herokuapp.com/api/cakeorders"
    axios({
      method: "post",
      url: apiurl,
      headers: { "authtoken": localStorage.token }
    }).then((res) => {
      console.log(res.data.cakeorders)
      
      this.setState({
        MyList:res.data.cakeorders
    })      
    }, (err) => { console.log(err) })
    
  }  
  render() {
          
    return (
              
          <div style={{ marginTop: '4em', backgroundColor: "#F7F2F2" }}>
        <h1 style={{ backgroundColor: "#F7F2F2", color: "tomato" }}>ORDER LIST</h1>
        <div class="accordion" id="accordionExample">
        <div>
          {
            this.state.MyList.map((each) => {
              console.log(each)
              return (
                
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h2 class="mb-0">
                      <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <tabel>
                            <tr style={{display:"flex",justifyContent:"space-between",color:"black"}}>
                          <td> <li>Name : {each.name} </li>
                            <li>Phone : {each.phone} </li>
                          </td>
                          
                              <td > Order date :  {each.orderdate}</td>
                              </tr>
                            </tabel>  
                      </button>
                    </h2>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div class="card-body" style={{ backgroundColor: "#F7F2F2" }}>
                        
                          <ul>
                          <li><span style={{color:"tomato"}}>Cake Id :</span> {each.orderid} </li>
                            <li> <span style={{color:"tomato"}}>Cake Name :</span> {each.cakes} </li>
                            <li> <span style={{color:"tomato"}}>Address  :</span> {each.address} </li>
                            <li> <span style={{color:"tomato"}}>City :</span> {each.city} </li>
                            <li> <span style={{color:"tomato"}}>Pin  :</span> {each.pincode} </li>
                            <li> <span style={{color:"tomato"}}>Cake Price  :</span>  {each.price}</li>
                            <li> <span style={{color:"tomato"}}>Payment Mode  :</span> {each.mode}</li>
                            <li> <span style={{color:"tomato"}}>Order  :</span> { each.mode}</li>
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