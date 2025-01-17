import { Component } from "react";
import "./Registration.css";
import axios from "axios";
import { toast } from "react-toastify";


class Registration extends Component {
    constructor() {
        super()
        this.state = {}
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
            console.log(res.data.message);
            if (!res.data.message == "User Already Exists") {
                toast.success("Id Create Sucessfully");
            this.props.history.push('/login')
            console.log("response",res);
            } else {
                toast.warning("User Already Exists")
            }
            
        }, (err) => {
            toast.warning("Empty 👨🏽‍✈️")
            console.log("error",err);
        })
    }
     
    render() {
        return (
            <div className="login">
            <form className="login__form needs-validation" novalidate>
                <h1>Registration Here👨‍✈️</h1>
                <input type="name" placeholder="Name"  onChange={this.getname} required/>
                <input type="email" placeholder="Email"  onChange={this.getemail} required/>
                <input type="password" placeholder="Password" onChange={ this.getpassword} required/>
                <button type="submit" className="submit_btn" onClick={this.register}>Sumbit</button> 
            </form>
        </div>
        )
    }
}

export default Registration;