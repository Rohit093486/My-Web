import { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import axios from 'axios';
class OrderList extends Component {
    constructor(props) {
        super(props)
      this.state = {
        MyList:[],
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
    console.log(this.state.MyList);
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
              this.state.MyList.map((each,index) => {
                console.log(each)
                return (
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h2 class="mb-0">
                      <button class="btn  btn-block text-left" type="button" data-toggle="collapse"  data-target={"#collapse"+index} aria-expanded="true" aria-controls="collapseOne">
                          <tabel>
                            <tr style={{ color: "black", textDecoration: "none" }}>
                              <td style={{ width: "30%" }}> <li><span style={{color:"tomato"}}>Name :</span> {each.name} </li>
                                <li><span style={{color:"tomato"}}>Address :</span> {each.address}({each.city}) </li>
                                <li> <span style={{ color: "tomato" }}>Phone : </span>{each.phone} </li>
                              </td>
                              <td style={{ width: "30%" }} ><span style={{color:"tomato"}}>Order date : </span> {each.orderdate}</td>
                            
                              <td style={{ width: "20%" }}><span style={{color:"tomato"}}>Order Id: </span>  {each.orderid}</td>
                            
                              <td style={{ width: "20%" }} ><span style={{color:"tomato"}}>Total Price: </span>  Rs:{each.price}</td>
                            
                              <td style={{ width: "30%" }} ><span style={{color:"tomato"}}>Payment: </span>  {each.mode}</td>
                            </tr>
                          </tabel>
                        </button>
                      </h2>
                    </div>
                    
                    <div id={"collapse"+index} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div class="card-body" style={{ backgroundColor: "#F7F2F2" }}>
                        <tabel style={{ width: "50vw", bottom: "1em" }}>
                          <tr style={{display:"flex" ,justifyContent:"space-between",color:"tomato"}}>
                            <th>Image</th>
                            <th>Cake Name</th>
                            <th>Price</th>
                          </tr>
                          </tabel>
                        {
                          each.cakes.map((each)=>{
                            console.log(each)
                            return(
                             <div style={{ marginTop: "1em", left: "1em" }}>
                              <tr style={{display:"flex" ,justifyContent:"space-between"}}>
                                <td><img style={{ height: "35px", width: "35px" }} src={each.image}></img></td>
                                <td>{each.name }</td>
                                <td>Rs.{ each.price}</td>
                                </tr>
                               </div>
                            )
                          })
                      }  
                        {/* </tabel> */}
                        
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