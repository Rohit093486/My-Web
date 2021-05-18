// import {Component} from "react"
// import {Link} from "react-router-dom"
// import axios from "axios"
// class Cards extends Component{
//     constructor(){
//         super()
//         this.state={
//             // cakes:[]      
//          }
//     }
//     cart=(event)=>{  
//         console.log(event.target);
//         console.log(this.props);
//         // if(event.target){
//         //   axios({
//         //       method:'get',
//         //       url:"https://apibyashu.herokuapp.com/api/cake/1615290293028"
//         //   }).then((res)=>{
//         //       console.log(res.data);
//         //       this.setState({
//         //           cakes:res.data.data
//         //         })
//         //         console.log(this.state.cakes);
//         //   },(err)=>{
//         //       console.log(err);
//         //   })
//         // }
//     }
//     render(){
//         return(
//             <div>
//         <div class="card" style={{ height:"25em", width:"20em" , padding:"1rem"}}>
//             <img src={this.props.cakedata.image} style={{height:"15em"}}  class="card-img-top" alt="..."></img>
//             <div class="card-body">
//             <h5 class="card-title">{this.props.cakedata.name}</h5>
//             <p class="card-text">{this.props.cakedata.price}</p>
//             </div>
//         </div>
//         </div>
//         )
//     }
// }
// export default Cards;
"use strict";