import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {connect} from "react-redux"


// const Loading = () => <div className="loading">
//     <div></div>
//     <div></div>
// </div>
    


class Login extends Component {
    constructor(props) {
        super(props)
        
        // this.getemail = this.getemail.bind(this);
        // this.getpassword = this.getpassword.bind(this);
        // this.Click = this.Click.bind(this);       
        this.state = {
            Loading:true,
            userDetail: {}            
        }
    }
    // componentDidMount() {
    //     this.isLoading = setTimeout(() => {
    //         this.setState({
    //             Loading: false
    //         })
    //     }, 2300);
    // }
    // componentWillUnmount() {
    //     clearTimeout(this.isLoading);
    // }
    // timer = () =>setTimeout(()=>{
    //     this.setState({ Loading: false })
    // }
    //     , 2300)
    vaild=()=>{
        if(!this.state.userDetail.email.includes("@") && this.state.userDetail.password.length<4){
            this.setState({
                nameErr:"Invaild Email",
                passErr:"password length must be 4 Character"
            })
        }
        else if (!this.state.userDetail.email.includes("@")) {
            this.setState({
                nameErr:"Invaild Email"
            })
        }
        else if ( this.state.userDetail.password.length<4) {
            this.setState({
                passErr:"password length must be 4 Character"
            })
        }
        else {
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
        event.preventDefault()
        console.log("hello", this.userDetail);
        
        if (this.vaild()) {
            console.log(this.state.userDetail);
            axios({
                method:"post",
                url:"https://apifromashu.herokuapp.com/api/login",
                data:this.state.userDetail        
            }).then((res) => {
                console.log("my mess", res);
                this.message = res.data;
                
                if(this.message.message !== 'Invalid Credentials'){
                    toast("Welcome");                    
                    console.log("message ;.....", this.message);
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("name", res.data.name);
                    this.props.dispatch({
                        type: "Login",
                        payload: res.data
                   })
                    this.props.history.push('/');
                } else {                    
                    toast("please Check Your details");
                }              
            },(err)=>{
                console.log("error",err);
                toast("Oh! Sorry You enter Wrong details");
            })         
        }
        else{
            toast("Server not Found");
            return;
        }
    }
    
    //   componentDidMount(){
    //       this.userDetail = JSON.parse(localStorage.getItem('user'));
    //       if (localStorage.getItem('user')) {
    //           this.setState({                
    //               nameErr: this.userDetail.name,
    //               passErr: this.userDetail.email,
    //               token:this.userDetail.token,
                  
    //            })
    //       } else {
    //           this.setState({
    //               nameErr: '',
    //               passErr:''
    //           })
    //         }
    //   }
    // componentWillUpdate(nextprops,nextState) {
    //     localStorage.setItem('user', JSON.stringify(nextState));
    // }     
    render() {
        // const { loading } = this.state;loading ?(<Loading />):
        return (
            <div> 
                <form style={{ padding: "12.3em 20em", backgroundColor: "#E3D9DB " ,marginTop:"4em"}}>
                    <h3 style={{ color: "red" }}>Login</h3>
                    <div class="form-group">
                        <label for="exampleInputEmail1">EMAIL ADDRESS</label>
                        <input type="email" name="email" class="form-control" value={this.state.nameErr} id="exampleInputEmail1" onChange={this.getemail} aria-describedby="emailHelp" required></input>
                        <p>{this.state.nameErr}</p>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">PASSWORD</label> <Link to="./forget"><p style={{ marginLeft: "17em", marginTop: "-1em" }}>Forgotten Password?</p> </Link>                        
                        <input type="password" name="pswd" class="form-control" value={this.state.passErr} style={{ marginTop: "-1em" }} onChange={this.getpassword} id="exampleInputPassword1" required></input>
                        <p>{this.state.passErr}</p>
                        
                    </div>                    
                    <Link to='/'><button type="submit" class="btn btn-primary" onClick={this.Click}>Login</button></Link>
                    <Link to="/registration"><button type="submit" class="btn btn-primary" style={{ marginLeft: "2em" }}>Registration</button></Link>                    
                </form>        
            </div>            
        )
    }
}
export default connect () (Login);