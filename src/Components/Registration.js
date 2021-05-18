import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


class Registration extends Component {
    constructor() {
        super()
        this.state = {
          
        }
    }

    userDetail = {}

    getemail = (event) =>{
        console.log(event.target.value);
       this.userDetail.email= event.target.value;
    } 

    getname =(event)=> {
        console.log(event.target.value);
       this.userDetail.name= event.target.value;
    }

    getpassword =(event)=> {
        console.log(event.target.value);
       this.userDetail.password= event.target.value;
    }
   
    
   
     
    register = (e) => {
        e.preventDefault()
        console.log(this.userDetail);
        axios({
            method:"post",
            url:"https://apifromashu.herokuapp.com/api/register",
            data:this.userDetail
        }).then((res) => {
            toast("Id Create Sucessfully");
            this.props.history.push('/login')
            console.log("response",res);
        },(err)=>{
            console.log("error",err);
        })
    }
     
    render() {
        return (
            <div>  
                 <div>
                <form style={{ padding: "10em 20em",backgroundColor:"#DCE5EC" ,marginTop:"4em"}}>
                <h3 style={{color:"red"}}>Registration</h3>
            <div class="form-group">
            <label for="exampleInputEmail1">EMAIL ADDRESS</label>
            <input type="email"  name="email" class="form-control" onChange={this.getemail} id="exampleInputEmail1" aria-describedby="emailHelp" required></input>   
            </div>

            <div class="form-group">
            <label for="exampleInputEmail1">NAME</label>
            <input type="text"  name="name" class="form-control"  onChange={this.getname}id="exampleInputEmail1" aria-describedby="emailHelp" required></input>   
            </div>
                        
            <div class="form-group">
            <label for="exampleInputPassword1">PASSWORD</label>                        
            <input type="password" name="pswd" class="form-control"  onChange={this.getpassword} id="exampleInputPassword1" required></input>
            </div>  
                  <button type="submit" class="btn btn-primary" onClick={this.register}>Submit</button>                   
                    
        </form> 

            </div>
      
            </div>
        )
    }
}

export default Registration;