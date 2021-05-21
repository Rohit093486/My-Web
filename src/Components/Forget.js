import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

class Forget extends Component {
    constructor() {
        super()
        this.state = {
          userDetail:{}          
        }
  }
    userDetail = {}
    getemail = (event) => {
        console.log(event.target.value);
      this.userDetail.email = event.target.value;
      this.setState({
        userDetail:this.userDetail
    })
    }    
      Click =(event)=> {
        event.preventDefault()       
        console.log("hello", this.userDetail);
        // if (this.vaild()) {
          axios({
            method:"post",
            url: "https://apifromashu.herokuapp.com/api/recoverpassword",
            data: this.userDetail
          }).then((res) => {
            toast("Send Password");
            this.props.history.push('/login')
            console.log("response", res);
          }, (err) => {
            console.log("error", err);
          })
        // }
      }
     
     
    render() {
        return (
          <div className="login">
          <form className="login__form">
              <h1>Forget Password👨‍✈️</h1>                
              <input type="email" placeholder="Email"  onChange={this.getemail}/>                                      
              <button type="submit" className="submit_btn" onClick={this.Click}>Get Password</button>
          </form>
      </div>
        )
    }
}

export default Forget;