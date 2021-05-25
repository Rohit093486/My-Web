import { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";

class Forget extends Component {
    constructor() {
        super()
        this.state = {
          userDetail:{},
          nameErr: "",
        }
  }
  vaild = () => {
    if (!this.state.userDetail.email){
      this.setState({
        nameErr: "please enter your Email",
      })
    }
    else if(!this.state.userDetail.email.includes("@")){
      this.setState({
          nameErr:"Invaild Email"
      })
  }else{
    return true;
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
  Click = (event) => {
    this.setState({
      nameErr:"",      
  })
    event.preventDefault()
    console.log("hello", this.userDetail);
    if (this.vaild()) {
      axios({
        method: "post",
        url: "https://apifromashu.herokuapp.com/api/recoverpassword",
        data: this.userDetail
      }).then((res) => {
        console.log(res.data)
        if (res.data.message=="Password Sent to your email") {
          toast.success("Send Password");
          // this.props.history.push('/login')
          console.log("response", res);
        } else {
          toast.warning("No Such Email exists")
        }
      }, (err) => {
        toast.warn("Server not Found");
        console.log("error", err);
      })        
    }
  }
    render() {
        return (
          <div className="login">
          <form className="login__form needs-validation">
              <h1>Forget Password👨‍✈️</h1>                
              <input type="email" placeholder="Email" onChange={this.getemail} />
              <p>{this.state.nameErr}</p>
              <button type="submit" className="submit_btn" onClick={this.Click}>Get Password</button>
          </form>
      </div>
        )
    }
}

export default Forget;