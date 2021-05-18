import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


class Addcake extends Component {
    constructor() {
        super()
        this.state = {
          
        }
    }

   
     
    render() {
        return (
            <div>  
            <form style={{ marginTop: "5em", padding: "0em 28em", backgroundColor:"#F7F2F2" }}>
            <div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Cake ID</label>
    <input type="number" class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
</div>
  <div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Cake Name</label>
    <input type="text" class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
                </div>
                <div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Cake Flavour</label>
    <input type="text" class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
</div>
<div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Description</label>
    <input type="text" class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
</div>
<div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Ingredients</label>
    <input type="text" class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
</div>
  <div class="form-group">
    <label for="price" style={{fontSize:"1.1em"}}>Price</label>
    <input type="number" style={{height:"2em"}} class="form-control"></input>
    </div> 
  <button type="submit" class="btn btn-primary">Save</button>
</form>  
      
            </div>
        )
    }
}

export default Addcake;