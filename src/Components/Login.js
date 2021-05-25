import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {connect} from "react-redux"


class Login extends Component {
    constructor(props) {
        super(props)  
        this.state = {
            Loading:true,
            userDetail: {},
            nameErr: "",
            passErr:""
        }
    }
    vaild=()=>{
        if(!this.state.userDetail.email ){
            this.setState({
                nameErr:"please enter your Email",                
            })
        }
        else if(!this.state.userDetail.password){
            this.setState({
                passErr:"please enter vaild password"
            })
        }
        else if(!this.state.userDetail.email && !this.state.userDetail.password || !this.state.userDetail.email.includes("@")){
            this.setState({
                nameErr:"Invaild Credentails",
                passErr:"Password length must be aleast 4 or above Character"
            })
        }
        else if(this.state.userDetail.email && !this.state.userDetail.email.includes("@")){
            this.setState({
                nameErr:"Invaild Email"
            })
        }
        
        else if(!this.state.userDetail.password || this.state.userDetail.password.length<4){
            this.setState({
                passErr:"Please Enter Your Vaild Password"
            })
        }
        else if(!this.state.userDetail.password  && this.state.userDetail.password.length<4){
            this.setState({
                passErr:"Password length must be aleast 4 or above Character"
            })
        }
        else{
            return true;
        }
    }
    
    userDetail = {}
    message = {};
    getemail = (event) => {
        console.log(event.target.value);
        this.userDetail.email = event.target.value;
        this.setState({
            userDetail:this.userDetail
        })
    }
    getpassword = (event) => {
        console.log(event.target.value);
        this.userDetail.password = event.target.value;
        this.setState({
            userDetail:this.userDetail
        })
    }    
    Click = (event) => {
        this.setState({
            nameErr:"",
            passErr:""
        })
        event.preventDefault()
        console.log("hello", this.userDetail);
        
        
        if(this.vaild()) {
            console.log(this.state.userDetail);
            axios({
                method:"post",
                url:"https://apifromashu.herokuapp.com/api/login",
                data:this.state.userDetail        
            }).then((res) => {
                console.log("my mess", res);
                this.message = res.data;
                
                if(this.message.message!== 'Invalid Credentials'){
                    toast.success("Welcome To CakeShop");                    
                    console.log("message ;.....", this.message);
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("name", res.data.name);
                    this.props.dispatch({
                        type: "Login",
                        payload: res.data
                   })
                    this.props.history.push('/');
                } else {                    
                    toast.warning("Check your Detail");
                }              
            },(err)=>{
                console.log("error",err);
                toast.warning("Server not Found");
            })         
        }       
    } 
    render() {       
        return (
            <div className="login">
            <form className="login__form needs-validation" novalidate>
                <h1>Login Here👨‍✈️</h1>                
                    <input type="email" placeholder="Email" onChange={this.getemail} />
                    <p>{this.state.nameErr}</p>
                    <input type="password" placeholder="Password" onChange={this.getpassword} />
                    <p>{this.state.passErr}</p>
                    <Link to="/forget" style={{textDecoration:"none"}}><p style={{color:"black",marginRight:"22em",marginBottom:"-5px"}}>Forget Password ?</p></Link>     
                    <button type="submit" className="submit_btn" onClick={this.Click}>Login</button>
                   <Link to="/registration" style={{textDecoration:"none"}}><p style={{color:"black",marginRight:"22em",marginTop:"1em"}}>Registration 👨🏽‍✈️!</p></Link>
                
            </form>
            </div>
           
          
        )
    }
}
export default connect () (Login);