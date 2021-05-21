import { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import axios from 'axios';
class OrderList extends Component {
    constructor(props) {
        super(props)
      this.state = {
        MyList: [],
        loading: false
      }               
  }
  componentDidMount() {    
    let apiurl = "https://apifromashu.herokuapp.com/api/cakeorders"
    this.setState({loading:true})
    axios({
      method: "post",
      url: apiurl,
      headers: { "authtoken": localStorage.token }
    }).then((res) => {
      console.log(res.data.cakeorders)      
      this.setState({
        MyList: res.data.cakeorders,
        loading:false
      })
      
    }, (err) => { console.log(err) })
    
  }  
  render() {
    console.log(this.props);
    const { loading } = this.state
    return ( 
      <div style={{ marginTop: '4em'}}>
        <h1 style={{ color: "black", fontFamily: "cursive", marginTop: "2em" }}>ORDER LIST</h1>
        {loading && <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15em" }}>
                        <Loader type="ThreeDots" color="#00BFFF" height={80} width={100} />
                    </div>}
        {!loading&&<div class="accordion" id="accordionExample">
          <div>
            {
              this.state.MyList.map((each, index) => {
                console.log(each)
                return (
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <tabel>
                            <tr style={{ color: "black", textDecoration: "none" }}>
                              <td style={{ width: "30%" }}> <li>Name : {each.name} </li>
                                <li>Address : {each.address}({each.city}) </li>
                                <li>Phone : {each.phone} </li>
                              </td>
                              <td style={{ width: "30%" }} > Order date :  {each.orderdate}</td>
                            
                              <td style={{ width: "20%" }}> Order Id:  {each.orderid}</td>
                            
                              <td style={{ width: "20%" }} > Total Price: {each.price}</td>
                            
                              <td style={{ width: "30%" }} > Payment: {each.mode}</td>
                            </tr>
                          </tabel>
                        </button>
                      </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div class="card-body" style={{ backgroundColor: "#F7F2F2" }}>                        
                        <ul>
                        <li> <span style={{ color: "tomato" }}>Cake Name :</span> {`${each.cakes} `} </li>
                                                    
                        </ul>
                        
                      </div>
                    </div>
          
                  </div>
            
              
                )
              })
            }
          </div>
        </div>
        }
          </div>
      
          )
    }
}
export default OrderList;