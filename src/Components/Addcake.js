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
                <form style={{ marginTop: "4em", padding: "1.5em 28em", backgroundColor: "#F7F2F2" }}>
                <h3 style={{ backgroundColor: "#F7F2F2", color: "tomato" ,fontFamily:"monospace" }}>New cake </h3>
            <hr></hr>
                    <div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Name</label>
    <input type="text" class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
</div>
<div class="form-group">
      <label for="validationTooltip04">Weight</label>
      <select class=" form-control" style={{height:"2em"}} id="validationTooltip04" required>
        <option selected disabled value="">Choose...</option>
                        <option>500 gm</option>
                        <option>1 kg</option>
                        <option>1.5 kg</option>
                    </select>
                </div>
    
<div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Description</label>
    <input type="text" class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
</div>
<div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Ingredients</label>
    <input type="text" class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
                    </div>
                    <div class="form-group" >
    <label for="Cake" style={{fontSize:"1.1em"}}>Category</label>
    <input type="text" class="form-control" style={{height:"2em"}} aria-describedby="emailHelp"></input>
                    </div>

                    <div class="form-group">
      <label for="validationTooltip04">Eggless</label>
      <select class=" form-control " style={{height:"2em"}} id="validationTooltip04" required>
        <option selected disabled value="">Choose...</option>
                        <option>True</option>
                        <option>False</option>                        
                    </select>
                    </div>
                    
                    <div class="form-group">
    <label for="price" style={{fontSize:"1.1em"}}>Price</label>
    <input type="number" style={{height:"2em"}} class="form-control"></input>
                    </div>
                    
                    <div class="form-group">
    <label for="exampleFormControlFile1" style={{fontSize:"1.1em",marginRight:"20em"}}>Cake Image:</label>
    <input type="file" style={{height:"2em"}} class="form-control-file" id="exampleFormControlFile1" style={{marginLeft:"18.7em",marginTop:"-2.4em"}}></input>
                    </div>

                  
  <button type="submit" class="btn btn-primary">Save</button>
</form>  
      
            </div>
        )
    }
}

export default Addcake;