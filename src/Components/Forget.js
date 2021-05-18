import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

class Forget extends Component {
    constructor() {
        super()
        this.state = {
          userDetail:{},
          // nameErr:""
        }
  }
  
//   vaild=()=>{
//     if(!this.state.userDetail.email.includes("@")){
//         this.setState({
//             nameErr:"Invaild Email",           
//         })
//     }
// }

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
            <div>  
            <div>
           <form style={{ padding: "15.5em 20em",backgroundColor:"#DEECDC",marginTop:"4em"}}>
           <h3 style={{ color: "red" }}>FORGOTTEN PAGE</h3>
                        
            <div class="form-group">
              <label for="exampleInputEmail1">EMAIL ADDRESS</label>
              <input type="email" name="email" class="form-control" id="exampleInputEmail1" onChange={this.getemail} aria-describedby="emailHelp" required></input>
              <p>{this.state.nameErr}</p>
                </div>
       
    <Link to="/login"><button type="submit" class="btn btn-primary" onClick={this.Click}>Submit</button></Link>                  
               
   </form> 

       </div>
 
       </div>
        )
    }
}

export default Forget;