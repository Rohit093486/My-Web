import { Component } from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";
import { connect } from 'react-redux'
import { toast } from "react-toastify";


class Buy extends Component{
  constructor(props){
    super(props);
    this.state = {}   
  }
  total=0
  cakes = []
  cakesImg = []
  cakesPrice =[]

  componentDidMount() {
    console.log(this.props.Oder)
    this.props.Oder.data.map((each) => {      
      this.cakes.push(each.name);
      this.cakesImg.push(each.image);
      this.cakesPrice.push(each.price);
      this.total=this.total+each.price;
    });
    console.log(this.cakes);
    console.log(this.total);    
     this.Cakeoder.price=this.total
    this.Cakeoder.cakes = this.cakes
    this.Cakeoder.cakesImg = this.cakesImg
    this.Cakeoder.cakesPrice= this.cakesPrice
  }

  Cakeoder = {}

  userName=(event)=>{
    this.Cakeoder.name=event.target.value
 }   
 address=(event)=>{
    this.Cakeoder.address=event.target.value
 }
 city=(event)=>{
     this.Cakeoder.city=event.target.value
 }
 pin=(event)=>{
     this.Cakeoder.pincode=event.target.value
 }
 phone=(event)=>{
    this.Cakeoder.phone=event.target.value
  } 

  buy=(event)=>{
    event.preventDefault()
    console.log(this.Cakeoder);     
    let apiurl = "https://apifromashu.herokuapp.com/api/addcakeorder"
    
    axios({
        method:"post",
        url:apiurl,
        data:this.Cakeoder,
        headers:{"authtoken":localStorage.token}
    }).then((res)=>{
      console.log(res.data)
      
      toast("Your Order is Book")
      
    },(err) => { console.log(err) })
}    

  render() {
    const { loading } = this.state
    return (
      <div>        
         <main role="main" class=" ml-sm-auto col-lg-9">
          <div class="table-responsive" >
            <form style={{ marginTop: "10em", width: "60vw" }}>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationDefault01" style={{ width: "50vw", fontSize: "1em" }}>Name</label>
                  <input type="text" onChange={this.userName.bind(this)} class="form-control" style={{ width: "50vw", height: "3em" }} id="validationDefault01" placeholder="First name" required />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationDefault01" style={{ width: "50vw", fontSize: "1em" }}>Phone</label>
                  <input type="number" onChange={this.phone.bind(this)} class="form-control" style={{ width: "50vw", height: "3em" }} id="validationDefault01" placeholder="Phone" required />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-4 mb-3">
                  <label for="validationDefault01" style={{ width: "50vw", fontSize: "1em" }}>Address</label>
                  <input type="text" onChange={this.address.bind(this)} class="form-control" style={{ width: "50vw", height: "3em" }} id="validationDefault01" placeholder="Address" required />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationDefault03">City</label>
                  <input type="text" class="form-control" onChange={this.city.bind(this)} id="validationDefault03" placeholder="City" required />
                </div>
                <div class="col-md-3 mb-3">
                  <label for="validationDefault05">Pincode</label>
                  <input type="number" class="form-control" onChange={this.pin.bind(this)} id="validationDefault05" placeholder="Pin Code" required />
                </div>
              </div>
              <button class="btn btn-primary" type="submit" onClick={this.buy} style={{ marginRight: "2em", marginTop: "1em" }}>Continue Checkout</button>
            </form>
          </div>
        </main>
      </div>
    )
  }
    }

export default connect((state, props) => {
    console.log(state)
    return {
      Oder: state["oderplace"]
    }
  })(Buy);
